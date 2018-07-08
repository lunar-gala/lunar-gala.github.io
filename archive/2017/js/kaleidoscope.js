// Parameters
 
const SOURCE_IMG = 'http://2017.lunargala.org/wp-content/themes/2017/media/sonder-main-background2.jpg';

if ( $(window).width() < 769) {
					
                const SOURCE_IMG = 'http://2017.lunargala.org/wp-content/themes/2017/media/sonder-main-background.jpg';

                
                 } 
                 
                 
                 
                 
const KS_PARAMETERS = {
    offsetRotation: 0.0,
    offsetScale: 1.0,
    offsetX: 0.0,
    offsetY: 0.0,
    radius: window.innerWidth * 1.1, // temporary hack
    slices: 12,
    zoom: 1.0
};

// Kaleidoscope object initialize and draw logic
var Kaleidoscope = (function() {
    Kaleidoscope.prototype.HALF_PI = Math.PI / 2;
    Kaleidoscope.prototype.TWO_PI = Math.PI * 2;

    function Kaleidoscope(image) {
        var ref = KS_PARAMETERS;
        for (var key in ref) {
            var val = ref[key];
            this[key] = val;
        }

        this['image'] = image;

        if (this.domElement == null) {
            this.domElement = document.createElement('canvas');
        }
        if (this.context == null) {
            this.context = this.domElement.getContext('2d');
        }
        if (this.image == null) {
            this.image = document.createElement('img');
        }
    }

    Kaleidoscope.prototype.draw = function() {
        this.domElement.width = this.domElement.height = this.radius * 2;
        this.context.fillStyle = this.context.createPattern(this.image, 'repeat');
        var scale = this.zoom * (this.radius / Math.min(this.image.width, this.image.height));
        var step = this.TWO_PI / this.slices;
        var cx = this.image.width / 2;
        var results = [];
        var index, i, ref;
        for (index = i = 0, ref = this.slices; 0 <= ref ? i <= ref : i >= ref; index = 0 <= ref ? ++i : --i) {
            this.context.save();
            this.context.translate(this.radius, this.radius);
            this.context.rotate(index * step);
            this.context.beginPath();
            this.context.moveTo(-0, -0.5);
            this.context.arc(0, 0, this.radius, step * -0.51, step * 0.51);
            this.context.lineTo(0.5, 0.5);
            this.context.closePath();
            this.context.rotate(this.HALF_PI);
            this.context.scale(scale, scale);
            this.context.scale([-1, 1][index % 2], 1);
            this.context.translate(this.offsetX - cx, this.offsetY);
            this.context.rotate(this.offsetRotation);
            this.context.scale(this.offsetScale, this.offsetScale);
            this.context.fill();
            results.push(this.context.restore());
        }
        return results;
    };

    return Kaleidoscope;
})();
