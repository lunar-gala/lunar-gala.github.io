$(".button-container").click(function() {
  $(".button-container").toggleClass("open");
  $(".mobile-menu").toggleClass("open");
  $(".mobile-head").toggleClass("open");
});


  $(".one").click(function() {
    $(".one").addClass("active");
    $(".two").removeClass("active");
    $(".three").removeClass("active");

    $('html, body').animate({
      scrollTop: $(".elem-one").offset().top
    }, 750);
  });

  $(".two").click(function() {
    $(".one").removeClass("active");
    $(".two").addClass("active");
    $(".three").removeClass("active");

    $('html, body').animate({
      scrollTop: $(".elem-two").offset().top
    }, 750);
  });

  $(".three").click(function() {
    $(".one").removeClass("active");
    $(".two").removeClass("active");
    $(".three").addClass("active");

    $('html, body').animate({
      scrollTop: $(".elem-three").offset().top
    }, 750);
  });
