
window.addEventListener('load', function() {
  $(".loader").fadeOut(1500, function() { $(this).remove(); });
});


$(".line-link").click(function() {
  var cur = $(this).attr('id');
  $(".glitch-img").removeClass("active");
  var lineId = "#" + "line-img-" + cur.substring(10, 12);
  $(lineId).addClass("active");
  var lineText = "#" + "line-text-" + cur.substring(10, 12);
  $(".line-text").removeClass("active");
  $(lineText).addClass("active");
});


/*
function imgNext(on) {
  if (on == 1) {
    $(".one").removeClass("active");
    $(".two").addClass("active");
  } else if (on == 2) {
    $(".two").removeClass("active");
    $(".three").addClass("active");
  } else if (on == 3) {
    $(".three").removeClass("active");
    $(".four").addClass("active");
  }
}

function imgPrev(on) {
  if (on == 4) {
    $(".four").removeClass("active");
    $(".three").addClass("active");
  } else if (on == 3) {
    $(".three").removeClass("active");
    $(".two").addClass("active");
  } else if (on == 2) {
    $(".two").removeClass("active");
    $(".one").addClass("active");
  }
}
*/

window.onload = function() {

  setTimeout(function() {
    $(".text").addClass("active");
    $(".tv-container").addClass("on");
    $(".one").addClass("active");
    $("#line-text-1").addClass("active");
  }, 1500);



  /*
  var on = 1;
  document.onkeydown = checkKey;
  function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == "38") {
      $(".prev").trigger("click");
    } else if (e.keyCode == "40") {
      $(".next").trigger("click");
    } else if (e.keyCode == "37") {
      $(".prev").trigger("click");
    } else if (e.keyCode == "39") {
      $(".next").trigger("click");
    }
  }

  $(".button").click(function() {
    var state = 1;
    if ($(this).hasClass("prev")) {
      state = -1;
    }
    if ((state == -1 && on != 1) || (state == 1 && on != 4)) {
      $(".tv-container").removeClass("on");
      $(".tv-container").addClass("off");
      $(".text").removeClass("active");
      $(".label").removeClass("active");
      setTimeout(function() {
        if (state == -1 && on != 1) {
          imgPrev(on);
          on -= 1;
        }
        if (state == 1 && on != 4) {
          imgNext(on);
          on += 1;
        }
        $(".tv-container").removeClass("on");
        $(".tv-container").addClass("on");
        $(".text").addClass("active");
        $(".label").addClass("active");
      }, 500);
    }
  });
  */


};
