var swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: false,
  slidesPerView: "auto",
  centeredSlides: true,
  effect: "coverflow",
  mousewheelControl: false,
  direction: 'horizontal',
  mousewheel: {
    releaseOnEdges: false,
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

//Click on images
function imageOne() {
  var x = document.getElementsByClassName("intro");
  x[0].innerHTML = "<br><br>FEROX <br><br> Grace Kao, Gilly Johnson, Jarret Lin <br><br> “Ferox is primal. Ferox is chaotic. Ferox is a return to instinct. Embodied by the human species, Ferox represents a blind and reckless freedom that must be contained for the sake of maintaining the civility we all value and from which we all benefit. Ultimately... Ferox must be quelled.” <br><br> Year of the dog";
}

function imageTwo() {
  var x = document.getElementsByClassName("intro");
  x[0].innerHTML = "<br><br>SONDER <br><br> Michelle Cho, Catherine Zheng, Lynzky Deleon <br><br> Inspired by bright colors and kaleidoscopic textures, Sonder personified the awakening through which we become aware of the parallels between our own vivid and complex experiences and that of any passerby. This was the first year Lunar Gala Alumni took part in the show, bringing together the past and present. <br><br> Year of the rooster";
}

function imageThree() {
  var x = document.getElementsByClassName("intro");
  x[0].innerHTML = "<br><br>STRAIN <br><br> Jessica Shen, Miriam Buchewald, Jibby Ani <br><br> Strain played on the concept of evolution and physical force, mirroring how Lunar Gala has grown through the pressure of CMU over time. Emphasizing transparency, Strain gave a look behind the scenes with backstage, internal team, and designer videos during the show, and experimented with color extremes. <br><br> Year of the monkey";
}

function imageFour() {
  var x = document.getElementsByClassName("intro");
  x[0].innerHTML = "<br><br>VESTIGE <br><br> Zach Bergeron, Rachel Ciavarella, Coleen Clifford <br><br> The goat has fooled others into thinking it is something far greater. Similarly, humans have curated their lives to the public to present a superhuman view of their actual selves. Vestige exploited the human need for stimulation, and saturated the mind to give the viewer the information high they have been seeking. <br><br> Year of the goat";
}
function imageFive() {
  var x = document.getElementsByClassName("intro");
  x[0].innerHTML = "<br><br>HYPNOSE <br><br> Ceecee Chang, Alana Fusaro <br><br> Referring to a dream-like state that stimulates the mind and heightens the senses, Hypnose was created to push the boundaries of fashion on the runway and to imprint in the audience's’ memories. This was the year the Lunar Gala magazine was born, along with the Lunar Gala Blog. <br><br> Year of the horse";
}
function imageSix() {
  var x = document.getElementsByClassName("intro");
  x[0].innerHTML = "<br><br>VENIN <br><br> Chris Ioffreda, Joanne Yun, Alex Deronde <br><br> As one of the first shows to place emphasis on a visually cohesive theme, Venin incorporated video art, promotional videos, 360-degree photographs of the clothing, and a mobile app for the show. The show was split into two halves: light and dark, and placed designer lines and acts accordingly. <br><br> Year of the snake";
}
function imageSeven() {
  var x = document.getElementsByClassName("intro");
  x[0].innerHTML = "<br><br>BLUR <br><br> Ian Anthony Coleman, Brieanna Nesbit <br><br> Year of the dragon";
}
function imageEight() {
  var x = document.getElementsByClassName("intro");
  x[0].innerHTML = "<br><br>MELANGE <br><br> Eddie Wong <br><br> Year of the rabbit";
}
function imageNine() {
  var x = document.getElementsByClassName("intro");
  x[0].innerHTML = "<br><br>TENSION <br><br> Jessica Meng, Hannah Pileggi <br><br> Year of the tiger";
}
function imageTen() {
  var x = document.getElementsByClassName("intro");
  x[0].innerHTML = "<br><br>EVOLVE <br><br> Terrence Boyd, Jessica Meng <br><br> Year of the ox";
}
function imageEleven() {
  var x = document.getElementsByClassName("intro");
  x[0].innerHTML = "<br><br>KARMA <br><br> Stephen Lim, Jamie Song <br><br> Being the twelfth anniversary, Lunar Gala had come full circle and completed one cycle of the zodiac. Karma showcased the whimsical and witch-like karma emblem, and emphasized the cyclical process of dominance and submission through the lines and dances. <br><br> Year of the rat";
}

function imageTwelve() {
  var x = document.getElementsByClassName("intro");
  x[0].innerHTML = "<br><br>VICE VERSA <br><br> Natisha Kang <br><br> Year of the pig";
}
function imageThirteen() {
  var x = document.getElementsByClassName("intro");
  x[0].innerHTML = "<br><br>X <br><br> David Bong, Kwan Kim, Rigardo Rush II <br><br> Focusing on the “extreme”, “exciting”, and “expressive” aspects of fashion, the “X” theme was chosen in honor of Lunar Gala’s ten-year anniversary in hopes to emphasize the unknown factor of designing clothing. <br><br> Year of the dog";
}
function imageFourteen() {
  var x = document.getElementsByClassName("intro");
  x[0].innerHTML = "<br><br>TIME <br><br> Engly Chang <br><br> Year of the rooster";
}
function imageFifteen() {
  var x = document.getElementsByClassName("intro");
  x[0].innerHTML = "<br><br>ALTER THE REAL <br><br> Kaily Yuri Lee, Carrie Yu <br><br> After many years of Lunar Gala being held at University Center Hall, the show was finally moved to Wiegand Gym, where it now holds over 1000 show goers.  <br><br> Year of the monkey";
}
function imageSixteen() {
  var x = document.getElementsByClassName("intro");
  x[0].innerHTML = "<br><br>EXPERIENCE IDENTITY <br><br> Eray Chou <br><br> In order to incorporate greater diversity of designs, Experience Identity was the first show to ever feature “Mini-Collections,” which inspired a handful of designers to each create only 2 looks. <br><br> Year of the goat";
}
function imageSeventeen() {
  var x = document.getElementsByClassName("intro");
  x[0].innerHTML = "<br><br>YEAR OF THE SNAKE <br><br> Anna Wei";
}
    function imageEighteen() {
  var x = document.getElementsByClassName("intro");
  x[0].innerHTML = "<br><br>YEAR OF THE HORSE <br><br> Olive Chian, Thu Wu";
}
function imageNineteen() {
  var x = document.getElementsByClassName("intro");
  x[0].innerHTML = "<br><br>YEAR OF THE DRAGON <br><br> Elena Chon ";
}
function imageTwenty() {
  var x = document.getElementsByClassName("intro");
  x[0].innerHTML = "<br><br>YEAR OF THE RABBIT <br><br> Shannon Tam ";
}
function imageTwentyone() {
  var x = document.getElementsByClassName("intro");
  x[0].innerHTML = "<br><br>YEAR OF THE TIGER <br><br> Shannon Tam, Douglas Lee <br><br> Improving on the show, the second year of Lunar Gala presented student designers, and incorporated themes for participating retailers. With an overall theme of “chic and panache,” Lunar Gala turned into a VIP style event, and was rebranded into the “it” event of the year.";
}
function imageTwentytwo() {
  var x = document.getElementsByClassName("intro");
  x[0].innerHTML = "<br><br>YEAR OF THE OX <br><br> Jimmy Chiang <br><br> Birth of Lunar Gala Fashion Show <br><br> Keeping with the tradition of new clothes being worn on Lunar New Year’s Day, the first Lunar Gala show celebrated the Year or the Ox with a theme of “high fashion”.";
}
function imageTwentythree() {
  var x = document.getElementsByClassName("intro");
  x[0].innerHTML = "<br><br>YESTERDAY <br><br> Ugne Ziausyte, Michael Powell <br><br> Yesterday defines our current moment as a liminal space constantly in tension between the past and future. <br>For this year’s show, we drew inspiration from Pittsburgh’s industrial history. In the 1980s, Pittsburgh experienced a massive transition out of its identity as an industrial city, forcing it to adapt and rebuild. Today, Pittsburgh demonstrates resilience by continuing to evolve with the times while honoring its roots.<br><br>Year of the rat";
}