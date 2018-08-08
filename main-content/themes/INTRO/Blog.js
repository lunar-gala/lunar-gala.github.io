function change(index, direction) {
  
  if (direction == "down") {
    $(".post" + index).removeClass("active");
    $(".post" + (index + 1)).addClass("active");
  }
  else if (direction == "up") {
    $(".post" + index).removeClass("active");    
    $(".post" + (index - 1)).addClass("active");
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
    $(".post1").addClass("active");
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
