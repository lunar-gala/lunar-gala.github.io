/**
 * Main script
 */

$(window).scroll(function() {
  var wScroll = $(window).scrollTop();

  // TODO: fix transparency scroll
  /*
  if (wScroll < $(window).height()) {
    opac = wScroll/400;
    if (opac > .2) {
      opac = .2;
    }

    $(".background").css("opacity", 0.5 + opac);
    $(".mobile-head-background").css("opacity", 0.5 + opac);
  }
  */
  if (wScroll > $(window).height()) {
    $(".freeze").addClass("fixed");
  } else {
    $(".freeze").removeClass("fixed");
  }
});


window.onload = function() {
  $("path").addClass("stroke");
  $("text").addClass("fade");

  $(".background").addClass("active");
  $(".mobile-head-background").addClass("active");
}



if ($(window).width() > 800) {
  $(".hover-text").hover(function(){
    var linkName = this.className;
    var index = linkName.substr(linkName.length - 1);
    $(".hover-img-" + index).css("opacity", 1);
  }, function() {
    $(".hover-img").css("opacity", 0);
  });
}
