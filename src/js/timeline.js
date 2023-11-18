(async function() {
    // Use a Promise to wait for the DOM to finish loading.
    await new Promise((resolve, reject) => {
        document.addEventListener('DOMContentLoaded', resolve);
    });

    function vh(v) {
        const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        return (v * h) / 100;
    }

    function isMobile() {
        let hasTouchScreen = false;
        if ('maxTouchPoints' in navigator) {
            hasTouchScreen = navigator.maxTouchPoints > 0;
        } else if ('msMaxTouchPoints' in navigator) {
            hasTouchScreen = navigator.msMaxTouchPoints > 0;
        } else {
            const mQ = window.matchMedia && matchMedia('(pointer:coarse)');
            if (mQ && mQ.media === '(pointer:coarse)') {
                hasTouchScreen = !!mQ.matches;
            } else if ('orientation' in window) {
                // Deprecated, but good fallback.
                hasTouchScreen = true;
            } else {
                // Only as a last resort, fall back to user agent sniffing.
                const UA = navigator.userAgent;
                hasTouchScreen = (
                    /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
                    /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
                );
            }
        }
        return hasTouchScreen;
    }

    const $timeline = document.querySelector('.timeline');
    const years = await (await fetch('assets/data/timeline.json')).json();;
    Object.keys(years).reverse().forEach((year) => {
        const datum = years[year];

        const $slide = document.createElement('div');
        $slide.classList.add('slide');
        $slide.dataset.id = year;

        const $media = document.createElement('div');
        $media.classList.add('media');

        const $image = document.createElement('img');
        $image.classList.add('image');
        $image.src = `assets/img/timeline/${year}.jpg`;
        $media.appendChild($image);

        const $caption = document.createElement('p');
        $caption.classList.add('caption');
        $caption.textContent = `${year} / Year of the ${datum.zodiac}`;
        $media.appendChild($caption);

        $slide.appendChild($media);

        const $content = document.createElement('div');
        $content.classList.add('content');

        const $title = document.createElement('h1');
        $title.classList.add('headline');
        $title.textContent = datum.title;
        $content.appendChild($title);

        const $subtitle = document.createElement('h2');
        $subtitle.classList.add('subtitle');
        $subtitle.textContent = datum.directors.join(', ');
        $content.appendChild($subtitle);

        if (datum.description) {
            const $body = document.createElement('p');
            $body.classList.add('body');
            $body.textContent = datum.description;
            $content.appendChild($body);
        }

        const $break = document.createElement('p');
        $break.classList.add('break');
        $break.textContent = '—';
        $content.appendChild($break);

        if (datum.links) {
            Object.keys(datum.links).forEach((link) => {
                const $link = document.createElement('a');
                $link.classList.add('link');
                $link.textContent = `${link} →`;
                $link.href = datum.links[link];
                $link.target = '_blank';
                $link.rel = 'noopener noreferrer';
                $content.appendChild($link);
            });
        }

        $slide.appendChild($content);

        $timeline.appendChild($slide);
    });

    if (isMobile()) return;

    $circle.addEventListener('mousedown', onCircleSelect);
    document.addEventListener('mouseup', onCircleDeselect);
    document.addEventListener('mousemove', onCircleMove);
})();
