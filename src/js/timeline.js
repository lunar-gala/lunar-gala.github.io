function vh(v) {
    const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
}

// Based on https://www.npmjs.com/package/react-use-scroll-snap
(async function() {
    // Use a Promise to wait for the DOM to finish loading.
    await new Promise((resolve, reject) => {
        document.addEventListener('DOMContentLoaded', resolve);
    });

    const $timeline = document.querySelector('.timeline');
    const duration = 100;

    let isActiveInteraction = null;
    let scrollTimeout = null;
    let currentScrollOffset = null;
    let targetScrollOffset = null;
    let animation = null;

    let scrollIndex = 0;

    const tickAnimation = (value) => {
        const scrollTopDelta = targetScrollOffset - currentScrollOffset;
        const scrollTop = currentScrollOffset + (scrollTopDelta * value / 10000);
        scrollTo({ top: scrollTop, behavior: 'smooth' });
    };

    const resetAnimation = () => {
        currentScrollOffset = pageYOffset;
        targetScrollOffset = 0;
        animation = null;

        const currentYear = years[$timeline.children[scrollIndex].dataset.id];
        $title.textContent = currentYear.title;
        $subtitle.textContent = currentYear.directors.join(', ');
        $body.textContent = currentYear.description;

        [].slice.call($content.children).forEach((element) => {
            if (element.tagName === 'A') {
                element.remove();
            }
        })

        Object.keys(currentYear.links).forEach((link) => {
            const $link = document.createElement('a');
            $link.classList.add('link');
            $link.textContent = `${link} →`;
            $link.href = currentYear.links[link][0];
            $link.target = '_blank';
            $link.rel = 'noopener noreferrer';
            $content.appendChild($link);
        });

        $content.classList.remove('blank');
    };

    const endAnimation = () => {
        if (!animation) return;
        animation.stop();
        resetAnimation();
    };

    const getElementsInView = () => {
        const elements = [].slice.call($timeline.children);
        return elements.filter((element) => {
            let top = element.offsetTop;
            const height = element.offsetHeight;
            while (element.offsetParent) {
                element = element.offsetParent;
                top += element.offsetTop;
            }
            return top < (pageYOffset + innerHeight) && (top + height) > pageYOffset;
        });
    };

    const getTargetScrollOffset = (element) => {
        let top = element.offsetTop;
        while (element.offsetParent) {
            element = element.offsetParent;
            top += element.offsetTop;
        }
        return top;
    };

    const snapToTarget = (target) => {
        if (animation) {
            animation.stop();
        }

        const elements = [].slice.call($timeline.children);
        elements.forEach((element, index) => {
            if (element.isSameNode(target)) {
                scrollIndex = index;
            }
        });

        targetScrollOffset = getTargetScrollOffset(target) - vh(10);
        animation = new Tweezer({
            start: 0,
            end: 10000,
            duration: duration,
        });

        animation.on('tick', tickAnimation);
        animation.on('done', resetAnimation);

        animation.begin();
    };

    const findSnapTarget = () => {
        const deltaY = pageYOffset - currentScrollOffset;
        currentScrollOffset = pageYOffset;

        const elementsInView = getElementsInView();
        if (!elementsInView || elementsInView.length < 2) return;

        if (deltaY > 0) {
            snapToTarget(elementsInView[1]);
        } else {
            snapToTarget(elementsInView[0]);
        }
    };

    const onInteractionStart = () => {
        endAnimation();
        isActiveInteraction = true;

        $content.classList.add('blank');
    };

    const onInteractionEnd = () => {
        isActiveInteraction = false;
        findSnapTarget();
    };

    const onInteraction = () => {
        endAnimation();
        if (scrollTimeout) clearTimeout(scrollTimeout);
        if (isActiveInteraction || animation) return;

        $content.classList.add('blank');

        scrollTimeout = setTimeout(findSnapTarget, 500);
    };

    const years = await (await fetch('assets/data/timeline.json')).json();;
    Object.keys(years).reverse().forEach((year) => {
        const datum = years[year];

        const element = document.createElement('div');
        element.classList.add('slide');
        element.dataset.id = year;

        const image = document.createElement('img');
        image.classList.add('image');
        image.src = `assets/img/timeline/${year}.jpg`;

        const caption = document.createElement('p');
        caption.classList.add('caption');
        caption.textContent = `${year} / Year of the ${datum.zodiac}`;

        element.appendChild(image);
        element.appendChild(caption);

        $timeline.appendChild(element);
    });

    const $content = document.querySelector('.content');

    const $title = document.createElement('h1');
    $title.classList.add('title');
    $content.appendChild($title);

    const $subtitle = document.createElement('h2');
    $subtitle.classList.add('subtitle');
    $content.appendChild($subtitle);

    const $body = document.createElement('p');
    $body.classList.add('body');
    $content.appendChild($body);

    const $break = document.createElement('p');
    $break.classList.add('break');
    $break.textContent = '—';
    $content.appendChild($break);

    resetAnimation();

    document.addEventListener('keydown', onInteractionStart, { passive: true });
    document.addEventListener('keyup', onInteractionEnd, { passive: true });
    document.addEventListener('touchstart', onInteractionStart, { passive: true });
    document.addEventListener('touchend', onInteractionEnd, { passive: true });
    document.addEventListener('wheel', onInteraction, { passive: true });

    findSnapTarget();
})();
