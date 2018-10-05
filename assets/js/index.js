$(window).scroll(function() {
  var wScroll = $(window).scrollTop();
  if (wScroll < $(window).height()) {
   opac = wScroll/400;
    if (opac > .2) {opac = .2; }
    $(".overlay").css("opacity", 0.5 + opac);
  }
  if (wScroll > $(window).height()/2) {
    $(".logo-right").addClass("active");
  } else {
    $(".logo-right").removeClass("active");
  }
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
}
