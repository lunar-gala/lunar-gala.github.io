/**
 * Code for the timeline swiper.
 *
 * README:
 * Please edit the DATA variable for future years
 *
 * The format is
 * {
 *  year:
 *  title:
 *  directors:
 *  description:
 *  zodiac: zodiac animal
 *  site: website link
 *  video: video link
 *  og: set to false if you want "Year of the <zodiac_animal>" appended to the description
 *  has_bg: set to true if there exists a background
 *  img_ext: image extension of the background in assets/img/timeline
 * }
 */

/** @brief First year of LG */
const FIRST_YEAR = 1997;

/**
 * @brief Data for timeline entries. Should be in a JSON, but current codebase
 * does not support
 */
const DATA =
[
  {
    "year": 2020,
    "title": "YESTERDAY",
    "directors": "Ugne Ziausyte, Michael Powell",
    "description": "Yesterday defines our current moment as a liminal space constantly in tension between the past and future. <br>For this year’s show, we drew inspiration from Pittsburgh’s industrial history. In the 1980s, Pittsburgh experienced a massive transition out of its identity as an industrial city, forcing it to adapt and rebuild. Today, Pittsburgh demonstrates resilience by continuing to evolve with the times while honoring its roots.",
    "zodiac": "rat",
    "site": "http://lunargala.org/LG2020/",
    "og": false,
    "has_bg": true,
    "img_ext": "png"
  },
  {
    "year": 2019,
    "title": "ANOMIE",
    "directors": "",
    "description": "",
    "zodiac": "pig",
    "site": "https://2019.lunargala.org/",
    "og": false,
    "has_bg": true,
    "img_ext": "jpg"
  },
  {
    "year": 2018,
    "title": "FEROX",
    "directors": "Grace Kao, Gilly Johnson, Jarret Lin",
    "description": "“Ferox is primal. Ferox is chaotic. Ferox is a return to instinct. Embodied by the human species, Ferox represents a blind and reckless freedom that must be contained for the sake of maintaining the civility we all value and from which we all benefit. Ultimately... Ferox must be quelled.”",
    "zodiac": "dog",
    "img_ext": "jpg",
    "og": false,
    "has_bg": true,
    "video": "https://www.youtube.com/watch?v=KLvRES_aGAs",
    "site": "https://lg-2018.herokuapp.com/"
  },
  {
    "year": 2017,
    "title": "SONDER",
    "directors": "Michelle Cho, Catherine Zheng, Lynzky Deleon",
    "description": "Inspired by bright colors and kaleidoscopic textures, Sonder personified the awakening through which we become aware of the parallels between our own vivid and complex experiences and that of any passerby. This was the first year Lunar Gala Alumni took part in the show, bringing together the past and present.",
    "zodiac": "rooster",
    "img_ext": "jpg",
    "has_bg": true,
    "video": "https://youtu.be/mthoGEVeMpI"
  },
  {
    "year": 2016,
    "title": "STRAIN",
    "directors": "Jessica Shen, Miriam Buchewald, Jibby Ani",
    "description": "Strain played on the concept of evolution and physical force, mirroring how Lunar Gala has grown through the pressure of CMU over time. Emphasizing transparency, Strain gave a look behind the scenes with backstage, internal team, and designer videos during the show, and experimented with color extremes.",
    "zodiac": "monkey",
    "img_ext": "jpg",
    "og": false,
    "has_bg": true,
    "video": "https://www.youtube.com/watch?v=20bksB2Xd7I&feature=youtu.be"
  },
  {
    "year": 2015,
    "title": "VESTIGE",
    "directors": "Zach Bergeron, Rachel Ciavarella, Coleen Clifford",
    "description": "The goat has fooled others into thinking it is something far greater. Similarly, humans have curated their lives to the public to present a superhuman view of their actual selves. Vestige exploited the human need for stimulation, and saturated the mind to give the viewer the information high they have been seeking.",
    "zodiac": "goat",
    "img_ext": "jpg",
    "has_bg": true,
    "video": "https://www.youtube.com/watch?v=qA_eEz5e2Go"
  },
  {
    "year": 2014,
    "title": "HYPNOSE",
    "directors": "Ceecee Chang, Alana Fusaro",
    "description": "Referring to a dream-like state that stimulates the mind and heightens the senses, Hypnose was created to push the boundaries of fashion on the runway and to imprint in the audience's’ memories. This was the year the Lunar Gala magazine was born, along with the Lunar Gala Blog.",
    "zodiac": "horse",
    "og": false,
    "has_bg": true,
    "img_ext": "jpg",
    "video": "https://vimeo.com/79932536"
  },
  {
    "year": 2013,
    "title": "VENIN",
    "directors": "Chris Ioffreda, Joanne Yun, Alex Deronde",
    "description": "As one of the first shows to place emphasis on a visually cohesive theme, Venin incorporated video art, promotional videos, 360-degree photographs of the clothing, and a mobile app for the show. The show was split into two halves: light and dark, and placed designer lines and acts accordingly.",
    "zodiac": "snake",
    "og": false,
    "has_bg": true,
    "img_ext": "jpg",
    "video": "https://www.youtube.com/watch?v=tikThvtXb_U"
  },
  {
    "year": 2012,
    "title": "BLUR",
    "directors": "Ian Anthony Coleman, Brieanna Nesbit",
    "description": "",
    "zodiac": "dragon",
    "og": false,
    "has_bg": true,
    "img_ext": "jpg",
    "video": "https://vimeo.com/36088511"
  },
  {
    "year": 2011,
    "title": "MELANGE",
    "directors": "Eddie Wong",
    "description": "",
    "zodiac": "rabbit",
    "img_ext": "jpg",
    "og": false,
    "has_bg": true,
    "video": "https://www.youtube.com/watch?v=pxQpmp1y42M"
  },
  {
    "year": 2010,
    "title": "TENSION",
    "directors": "Jessica Meng, Hannah Pileggi",
    "description": "",
    "zodiac": "tiger",
    "img_ext": "jpg",
    "og": false,
    "has_bg": true,
    "video": "https://www.youtube.com/watch?v=3oMTZ9b1G8s"
  },
  {
    "year": 2009,
    "title": "EVOLVE",
    "directors": "Terrence Boyd, Jessica Meng",
    "description": "",
    "zodiac": "ox",
    "img_ext": "jpg",
    "og": false,
    "has_bg": true
  },
  {
    "year": 2008,
    "title": "KARMA",
    "directors": "Stephen Lim, Jamie Song",
    "description": "Being the twelfth anniversary, Lunar Gala had come full circle and completed one cycle of the zodiac. Karma showcased the whimsical and witch-like karma emblem, and emphasized the cyclical process of dominance and submission through the lines and dances.",
    "zodiac": "rat",
    "img_ext": "jpg",
    "og": false,
    "has_bg": true,
    "video": "https://www.youtube.com/watch?v=AbFtlgJkVOI"
  },
  {
    "year": 2007,
    "title": "VICE VERSA",
    "directors": "Natisha Kang",
    "description": "",
    "zodiac": "pig",
    "img_ext": "jpg",
    "og": false,
    "has_bg": true
  },
  {
    "year": 2006,
    "title": "X",
    "directors": "David Bong, Kwan Kim, Rigardo Rush II",
    "description": "Focusing on the “extreme”, “exciting”, and “expressive” aspects of fashion, the “X” theme was chosen in honor of Lunar Gala’s ten-year anniversary in hopes to emphasize the unknown factor of designing clothing.",
    "zodiac": "dog",
    "img_ext": "png",
    "og": false,
    "has_bg": true,
    "video": "https://www.youtube.com/watch?v=Gfu4nARbms0"
  },
  {
    "year": 2005,
    "title": "TIME",
    "directors": "Engly Chang",
    "description": "",
    "zodiac": "rooster",
    "img_ext": "png",
    "og": false,
    "has_bg": true
  },
  {
    "year": 2004,
    "title": "ALTER THE REAL",
    "directors": "Kaily Yuri Lee, Carrie Yu",
    "description": "After many years of Lunar Gala being held at University Center Hall, the show was finally moved to Wiegand Gym, where it now holds over 1000 show goers.",
    "zodiac": "monkey",
    "img_ext": "png",
    "og": false,
    "has_bg": true
  },
  {
    "year": 2003,
    "title": "EXPERIENCE IDENTITY",
    "directors": "Eray Chou",
    "description": "In order to incorporate greater diversity of designs, Experience Identity was the first show to ever feature “Mini-Collections,” which inspired a handful of designers to each create only 2 looks.",
    "zodiac": "goat",
    "img_ext": "png",
    "og": false,
    "has_bg": true
  },
  {
    "year": 2002,
    "title": "YEAR OF THE SNAKE",
    "directors": "Anna Wei",
    "description": "",
    "zodiac": "",
    "img_ext": "jpg",
    "og": true,
    "has_bg": true
  },
  {
    "year": 2001,
    "title": "YEAR OF THE HORSE",
    "directors": "Olive Chian, Thu Wu",
    "description": "",
    "img_ext": "jpg",
    "zodiac": "",
    "og": true,
    "has_bg": true
  },
  {
    "year": 2000,
    "title": "YEAR OF THE DRAGON",
    "directors": "Elena Chon",
    "description": "",
    "zodiac": "",
    "img_ext": "jpg",
    "og": true,
    "has_bg": true
  },
  {
    "year": 1999,
    "title": "YEAR OF THE RABBIT",
    "directors": "Shannon Tam",
    "description": "",
    "zodiac": "",
    "og": true,
    "has_bg": false
  },
  {
    "year": 1998,
    "title": "YEAR OF THE TIGER",
    "directors": "Shannon Tam, Douglas Lee" ,
    "description": "Improving on the show, the second year of Lunar Gala presented student designers, and incorporated themes for participating retailers. With an overall theme of “chic and panache,” Lunar Gala turned into a VIP style event, and was rebranded into the “it” event of the year.",
    "zodiac": "",
    "og": true,
    "has_bg": false
  },
  {
    "year": 1997,
    "title": "YEAR OF THE OX",
    "directors": "Jimmy Chiang",
    "description": "Birth of Lunar Gala Fashion Show <br><br> Keeping with the tradition of new clothes being worn on Lunar New Year’s Day, the first Lunar Gala show celebrated the Year or the Ox with a theme of “high fashion”.",
    "zodiac": "",
    "og": true,
    "article": "https://drive.google.com/file/d/0B7gBYMXaA9-TTzQ0dGd0SzlHZEU/view",
    "has_bg": false
  }
];

/**
 * Builds the timeline page
 */
function build_timeline () {
  for (let i = 0; i < DATA.length; i++) {
    let curr_entry = DATA[i];

    // Build description string
    let info = `${curr_entry.title}<br><br>${curr_entry.directors}`;

    if (curr_entry.description !== "") {
      info += `<br><br>${curr_entry.description}`;
    }

    if (!curr_entry.og) {
      info += `<br><br>Year of the ${curr_entry.zodiac}`;
    }

    let on_click_function = () => { $('.intro').innerHTML = info };

    let new_elem = document.createElement('div');
    new_elem.classList.add('swiper-slide');
    new_elem.classList.add(`c${i}`);
    new_elem.onclick = function on_click () { $('.intro').html(info) };
    new_elem.style.cursor = 'pointer';

    let new_elem_background = document.createElement('div');
    new_elem_background.classList.add('background');

    if (curr_entry.has_bg) {
      new_elem_background.style = `background-image: url(../assets/img/timeline/${curr_entry.year}.${curr_entry.img_ext})`;
    } else {
      // Black background if no bg
      new_elem_background.style = `background: black`;
    }

    let links = document.createElement('div');
    links.classList.add('caption');
    links.append(curr_entry.year)

    if (curr_entry.site) {
      let site_link = document.createElement('a');
      site_link.target = '_blank';
      site_link.href = curr_entry.site;
      site_link.innerHTML = "Site";
      links.append(' / ');
      links.append(site_link);
    }

    if (curr_entry.video) {
      let video_link = document.createElement('a');
      video_link.target = '_blank';
      video_link.href = curr_entry.video;
      video_link.innerHTML = "Video";
      links.append(' / ');
      links.append(video_link);
    }

    if (curr_entry.year === FIRST_YEAR) {
      let article_link = document.createElement('a');
      article_link.target = '_blank';
      article_link.href = curr_entry.article;
      article_link.innerHTML = "Article";
      links.append(' / ');
      links.append(article_link);
    }

    new_elem.appendChild(new_elem_background);
    new_elem.appendChild(links);

    $('.swiper-wrapper').append(new_elem);
  }
}

// Kickoff timeline building
build_timeline();

// Create the swiper
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