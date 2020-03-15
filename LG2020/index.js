
window.addEventListener('load', function() {
  $(".loader").fadeOut(1500, function() { $(this).remove(); });
});

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

window.onload = function() {
    $(".s span").each(function(index) {
    $(this).addClass("active");
  });

  setTimeout(function() {
    $(".text").addClass("active");
    $(".tv-container").addClass("on");
    $(".one").addClass("active");
    $(".label").addClass("active");
  }, 1500);
  //next
  var on = 1;


//  document.onkeydown = checkKey;
//
//  function checkKey(e) {
//
//    e = e || window.event;
//
//    if (e.keyCode == '38') {
//        $('.prev').trigger('click');
//    }
//    else if (e.keyCode == '40') {
//        $('.next').trigger('click');
//    }
//    else if (e.keyCode == '37') {
//       $('.prev').trigger('click');
//    }
//    else if (e.keyCode == '39') {
//       $('.next').trigger('click');
//    }
//
//}

  $(".trigger").hover(function() {

    var state = 1;

    if ($(this).hasClass("prev")) {
      state = -1;
    }
    //glitchOff($(".one"));
    if ((state == -1 && on != 1) || (state == 1 && on != 16)) {
      $(".tv-container").removeClass("on");
      $(".tv-container").addClass("off");
      $(".text").removeClass("active");
      $(".label").removeClass("active");
      //next dns
      setTimeout(function() {
        if (state == -1 && on != 1) {
          imgPrev(on);
          on -= 1;
        }
        if (state == 1 && on != 16) {
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

};


$(".menu").click(function() {
  $(".menu").toggleClass("open");
  $(".nav").toggleClass("open");
});
