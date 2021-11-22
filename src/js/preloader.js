
document.addEventListener("DOMContentLoaded", function(event) { 
    setTimeout(()=> {
        $(".loadingScreen").addClass("hideLoading");
    }, 1000);
    
  
    setTimeout(() => {
      $(".loadingScreen").remove();
    }, 3000);
});

  