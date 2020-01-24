function showNav() {
    var window_top = $(window).scrollTop();
    var div_top = ($(window).height() / 2) + 60;
    if (window_top > div_top) {
        $('.main-nav').addClass('visible');
    } else {
        $('.main-nav').removeClass('visible');
    }
};

var sections = $('.content-section')
  , nav = $('.main-nav');
 
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
 
  sections.each(function() {
    var top = $(this).offset().top - 1,
        bottom = top + $(this).outerHeight();
 
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
 
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

$('.nav-item').click(function() {
  $('a.active').removeClass('active');
  $(this).find('a').addClass('active');
});

$(function () {
    $(window).scroll(showNav);
    showNav();
});

$('.open-popup').magnificPopup({
  type:'inline',
  midClick: true
});

var deadline = 'Feburary 13 2016 08:00:00 GMT-05:00';

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
};

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
};

initializeClock('clockdiv', deadline);


$('.people-header').click(function() {
  var windowWidth = $(window).width();
  console.log(windowWidth);
  if (windowWidth < 824) {
    $(this).next().toggleClass('hidden');
  }
});

$(function() {
  var windowWidth = $(window).width();
  if (windowWidth < 824) {
    $('.peepz').addClass('hidden');
  }
});