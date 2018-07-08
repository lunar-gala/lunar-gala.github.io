/*
 $(window).load(function() {
  // When the page has loaded
  $("body").css("opacity", "1");
});
*/





if (navigator.userAgent.toLowerCase().match(/(ipad|iphone)/)) {

 
$(document).bind("touchmove", function(e){
    e.preventDefault();
});

}



/************************* Load Screen ******************************************/

function onReady(callback) {
//     document.getElementById('nav').style.display = 'none';
    document.getElementById('hometext').style.display   = 'block';
    document.getElementById('logo').style.display = 'none';
    document.getElementById('loading').style.display = 'block';
    
    var intervalID = window.setInterval(checkReady, 1500);
  
    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);

        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}


onReady(function () {
//     show('abouttext', true);
    show('loading', false);
    
    document.getElementById('nav').style.display = 'block';
    document.getElementById('loading').style.display = 'block';
    document.getElementById('hometext').style.display  = 'none';

});


/************************* Nav logic ******************************************/

(document.getElementById('logo').onclick = function() {
  document.getElementById('hometext').style.display   = 'block';
  document.getElementById('abouttext').style.display  = 'none';
  document.getElementById('linestext').style.display  = 'none';
  document.getElementById('peopletext').style.display = 'none';
  document.getElementById('loading').style.display  = 'block'; 
  document.getElementById('logo').style.display  = 'none'; 
  
  document.body.style.overflowY = 'scroll';
  
  if ( $(window).width() < 769) {			
    document.getElementById('nav-tickets').style.display = 'block';
    document.getElementById('nav-date').style.display = 'block';             
} 



})();

document.getElementById('nav-about').onclick = function() {
  document.getElementById('hometext').style.display   = 'none';
  document.getElementById('abouttext').style.display  = 'block';
  document.getElementById('linestext').style.display  = 'none';
  document.getElementById('peopletext').style.display = 'none';
  document.getElementById('loading').style.display  = 'none';
  document.getElementById('logo').style.display = 'block';
  document.body.style.overflowY = 'scroll';
  

if ( $(window).width() < 769) {			
    document.getElementById('nav-tickets').style.display = 'none';
    document.getElementById('nav-date').style.display = 'none';         
} 
                 
                 
                 
}
document.getElementById('nav-lines').onclick = function() {
  document.getElementById('hometext').style.display   = 'none';
  document.getElementById('abouttext').style.display  = 'none';
  document.getElementById('linestext').style.display  = 'block';
  document.getElementById('peopletext').style.display = 'none';
  document.getElementById('loading').style.display  = 'none';
  document.getElementById('logo').style.display = 'block';
  document.body.style.overflowY = 'scroll';
  
  if ( $(window).width() < 769) {			
    document.getElementById('nav-tickets').style.display = 'none';
    document.getElementById('nav-date').style.display = 'none';         
} 



}
document.getElementById('nav-people').onclick = function() {
  document.getElementById('hometext').style.display   = 'none';
  document.getElementById('abouttext').style.display  = 'none';
  document.getElementById('linestext').style.display  = 'none';
  document.getElementById('peopletext').style.display = 'block';
  document.getElementById('loading').style.display  = 'none';
  document.getElementById('logo').style.display = 'block';
  document.body.style.overflowY = 'scroll';
  
  if ( $(window).width() < 769) {			
    document.getElementById('nav-tickets').style.display = 'none';
    document.getElementById('nav-date').style.display = 'none';        
} 


}



$(document).ready(function()
      {  
         $("#nav-tickets").click(function() {
         $("#info-slide").css('margin-right', '0px')
         }); 
         
         $(".info-close").click(function() {
         $("#info-slide").css('margin-right', '-100%')
         }); 
         
       });


$(document).ready(function()
      {  
         $("#nav-date").click(function() {
         $("#info-slide2").css('margin-left', '0px')
         }); 
         
         $(".info-close2").click(function() {
         $("#info-slide2").css('margin-left', '-100%')
         }); 
         
       });

 
 
 
/************************ Kaleidoscope creation ******************************/

var MOVEMENT_OPTIONS = {
    movement: true,
    ease: 0.1
};

var TIME_OPTIONS = {
    movement: true,
    ease: 0.1,
    xSpeed: 10,
    ySpeed: 4,
    xDir: -1,
    yDir: 1,
    interval: 50,
};

var images = {};
images[0] = new Image;
images[0].onload = (function(_this) {
    return function() {
        return kaleidoscope.draw();
    };
})(this);
images[0].src = SOURCE_IMG;

// Create new kaleidoscope and position it
var kaleidoscope = new Kaleidoscope(images[0]);
kaleidoscope.domElement.style.position = 'absolute';
kaleidoscope.domElement.style.zIndex = '-999';
kaleidoscope.domElement.style.marginLeft = -kaleidoscope.radius + 'px';
kaleidoscope.domElement.style.marginTop = -kaleidoscope.radius + 'px';
kaleidoscope.domElement.style.left = '50%';
kaleidoscope.domElement.style.top = '50%';

document.body.appendChild(kaleidoscope.domElement);

// The following is the update magic
var tx = kaleidoscope.offsetX;
var ty = kaleidoscope.offsetY;
var tr = kaleidoscope.offsetRotation;

var onMouseMoved = (function(_this) {
    return function(event) {
        var cx = window.innerWidth / 2;
        var cy = window.innerHeight / 2;
        var dx = event.pageX / window.innerWidth;
        var dy = event.pageY / window.innerHeight;
        var hx = dx - 0.5;
        var hy = dy - 0.5;
        tx = hx * kaleidoscope.radius * -2;
        ty = hy * kaleidoscope.radius * 2;
        return tr = Math.atan2(hy, hx);
    };
})(this);

window.addEventListener('mousemove', onMouseMoved, false);

function onLineHover(elem) {
    var modalNum = elem.getAttribute('data-modal').match(/\d+/g)[0];
    if (images[modalNum] !== undefined) {
      kaleidoscope.image = images[modalNum];
    }
}

var update;
(update = (function(_this) {
    return function() {
        if (MOVEMENT_OPTIONS.movement) {
            var delta = tr - kaleidoscope.offsetRotation;
            var theta = Math.atan2(Math.sin(delta), Math.cos(delta));
            kaleidoscope.offsetX += (tx - kaleidoscope.offsetX) * MOVEMENT_OPTIONS.ease / 200;
            kaleidoscope.offsetY += (ty - kaleidoscope.offsetY) *  MOVEMENT_OPTIONS.ease / 200;
            kaleidoscope.offsetRotation += (theta - kaleidoscope.offsetRotation) * MOVEMENT_OPTIONS.ease;
            kaleidoscope.draw();
        }
        return setTimeout(update, 1000 / 60);
    };
})(this))();

/**************************** Image loading *********************************/

const NUM_LINES = 20;
const NUM_PEOPLE = 118;
 
 
 
    var done = 0;

    for (var num = 1; num <= NUM_LINES; num++) {
 
	
	
    var loadImage;
      
	            
                images[num] = new Image;
                images[num].onload = (function(_this) {
                    return function() {
                        return kaleidoscope.draw();
                    };
                })(this);

 
				if ( $(window).width() < 769) {
					
                images[num].src = 'http://2017.lunargala.org/wp-content/themes/2017/media/lines-small/line'+num+'.jpg';
                $(new Image()).src = images[num];
                
                 } else {
	                 
	            images[num].src = 'http://2017.lunargala.org/wp-content/themes/2017/media/lines2/line'+num+'.jpg';
                $(new Image()).src = images[num];
                
                
                 } 
        
        
        
        
				  
        
    }
    
     