
// document.addEventListener("DOMContentLoaded", function(event) { 
//     if ( document.URL.includes("index.html") ) {
//         setTimeout(()=> {
//             $(".loadingScreen").addClass("hideLoading");
//         }, 1000);
        
//     }
//     else{
//         setTimeout(()=> {
//             $(".loadingScreen").addClass("hideLoading");
//         }, 0);
//     }

  
//     setTimeout(() => {
//       $(".loadingScreen").remove();
//     }, 3000);
// });

  
var imgs = document.images,
    len = imgs.length,
    counter = 0;

[].forEach.call( imgs, function( img ) {
    if(img.complete)
      incrementCounter();
    else
      img.addEventListener( 'load', incrementCounter, false );
} );

function incrementCounter() {
    counter++;
    if ( counter === len ) {

        if ( document.URL.includes("index.html") ) {
            setTimeout(()=> {
                $(".loadingScreen").addClass("hideLoading");
            }, 1000);
        }

        else{
            setTimeout(()=> {
                $(".loadingScreen").addClass("hideLoading");
            }, 0);
        }
    
        setTimeout(() => {
          $(".loadingScreen").remove();
        }, 3000);
    }
}