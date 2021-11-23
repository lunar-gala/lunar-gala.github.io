
document.addEventListener("DOMContentLoaded", function(event) { 
    if ( document.URL.includes("index.html") ) {
        setTimeout(()=> {
            $(".loadingScreen").addClass("hideLoading");
        }, 1000);
        
    }
    else{
        $(".loadingScreen").addClass("hideLoading");
    }

  
    setTimeout(() => {
      $(".loadingScreen").remove();
    }, 3000);
});

 