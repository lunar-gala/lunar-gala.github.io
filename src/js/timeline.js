(async function() {
    const _this = this;

    _this.$class = '.splide';

    // Use a Promise to wait for the DOM to finish loading.
    await new Promise((resolve, reject) => {
        document.addEventListener('DOMContentLoaded', resolve);
    });

    _this.options = {
        direction: 'ttb',
        type: 'ttb',
        height : '10rem',
        wheel : true,
        arrows: false,
        pagination: false,
        drag: true,
        waitForTransition: false
    };

    _this.$list = document.querySelector('.splide__list');

    // Add TTY
    (function () {
        const element = document.createElement('div');
        element.classList.add('splide__slide');

        const image = document.createElement('img');
        image.src = 'assets/img/timeline/TTY.jpg';

        element.appendChild(image);
        _this.$list.appendChild(element);
    })();

    _this.years = Array.from({ length: 2021 - 2000 }, (_, i) => i + 2000);
    _this.years.forEach((year) => {
        const element = document.createElement('div');
        element.classList.add('splide__slide');
        element.dataset.id = year;

        const image = document.createElement('img');
        image.src = `assets/img/timeline/${year}.jpg`;

        element.appendChild(image);
        _this.$list.appendChild(element);
    });

    _this.timeline = new Splide(_this.$class, _this.options);
    _this.timeline.mount();
})();
