function change(index, direction) {

  if (direction == "down") {
    $(".post").eq(index - 1).removeClass("active");
    $(".post").eq(index).addClass("active");
  }
  else if (direction == "up") {
    $(".post").eq(index - 1).removeClass("active");
    $(".post").eq(index - 2).addClass("active");
  }
}

window.onload = function() {


  $("#fullpage").fullpage({
    navigation: true,
    continuousVertical: false,
    controlArrows: false,
    slidesNavigation: false,
    sectionsColor: ["none", "none", "none", "none"],
    css3: true,
    verticalCentered: false,
    onLeave: function(index, nextIndex, direction) {
      change(index, direction);
    }
  });

  setTimeout(function() {
    $(".nav").addClass("start");
    $(".post").eq(0).addClass("active");
  }, 250);


  $(".images").click(function() {
    $(".blogs").addClass("active");
    $.fn.fullpage.setMouseWheelScrolling(false);
    $.fn.fullpage.setAllowScrolling(false);
  });

  $(".close").click(function() {
    $(".blogs").removeClass("active");
    $.fn.fullpage.setMouseWheelScrolling(true);
    $.fn.fullpage.setAllowScrolling(true);
    $(".post").animate({ scrollTop: 0 }, "fast");
  });


};
