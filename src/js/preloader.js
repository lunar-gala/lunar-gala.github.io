
document.addEventListener("DOMContentLoaded", function(event) { 
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
});

  