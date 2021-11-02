(async function() {
    const _this = this;

    // Use a Promise to wait for the DOM to finish loading.
    await new Promise((resolve, reject) => {
        document.addEventListener('DOMContentLoaded', resolve);
    });

    _this.options = {
        direction: 'ttb',
        height : '10rem',
        wheel : true,
        arrows: false,
        pagination: false
    };

    _this.timeline = new Splide('.splide', _this.options);
    _this.timeline.mount();
})();
