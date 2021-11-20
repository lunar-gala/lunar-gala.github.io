/**
 * Main script
 */

window.onload = function() {
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
