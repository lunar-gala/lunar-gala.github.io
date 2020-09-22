/**
 * Code for the timeline swiper.
 *
 * Also contains data for the timeline data.
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
 *  og: set to false if you want "Year of the <zodiac_animal>" appended to the description
 *  has_bg: set to true if there exists a background
 *  img_ext: image extension of the background in assets/img/timeline
 *  links: {
 *    type: [
 *      link1,
 *      link2
 *    ]
 *  }
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
    "directors": ["Ugne Ziausyte", "Michael Powell"],
    "description": "Yesterday defines our current moment as a liminal space constantly in tension between the past and future. <br>For this year’s show, we drew inspiration from Pittsburgh’s industrial history. In the 1980s, Pittsburgh experienced a massive transition out of its identity as an industrial city, forcing it to adapt and rebuild. Today, Pittsburgh demonstrates resilience by continuing to evolve with the times while honoring its roots.",
    "zodiac": "rat",
    "og": false,
    "has_bg": true,
    "img_ext": "png",
    "links": {
      "website": ["http://lunargala.org/LG2020/"],
      "video": [
        "https://livestream.com/cmutvlive/lg2020/videos/202420260"
      ]
    }
  },
  {
    "year": 2019,
    "title": "ANOMIE",
    "directors": ["Jumana Akoad", "Kenneth Cohen", "Ruhani Mumick"],
    "description": "",
    "zodiac": "pig",
    "og": false,
    "has_bg": true,
    "img_ext": "jpg",
    "links": {
      "website": ["https://2019.lunargala.org/"],
      "video": [
        "https://livestream.com/cmutvlive/lg2019/videos/188209816"
      ]
    }
  },
  {
    "year": 2018,
    "title": "FEROX",
    "directors": ["Grace Kao","Gilly Johnson","Jarret Lin"],
    "quote": "“Ferox is primal. Ferox is chaotic. Ferox is a return to instinct. Embodied by the human species, Ferox represents a blind and reckless freedom that must be contained for the sake of maintaining the civility we all value and from which we all benefit. Ultimately... Ferox must be quelled.”",
    "description":"The Lunar Gala: an intergalactic celebration of the yearly contributions of the Interplanetary Federation for Peace and Protection. The year is 2268, and, on this 250th anniversary of the planet Earth’s quarantine, we present Ferox, a public demonstration of the hostility of the Earth’s previously dominant species, the homosapien. We invite Federation sponsors and visitors to observe, for the first time, the savagery we have successfully contained. Infused with Federation principles, the previously dangerous human race is now docile - an allegory for the potential of the IFPP to mollify threatening agents intergalactically. Come celebrate with us! And, in the process, bear witness to a species, that, prior to this event, has been contained for centuries.",
    "zodiac": "dog",
    "img_ext": "jpg",
    "og": false,
    "has_bg": true,
    "video": "https://www.youtube.com/watch?v=KLvRES_aGAs",
    "links": {
        "website": ["https://2018.lunargala.org"],
        "video": [
          "https://www.youtube.com/watch?v=tMoRp8GI53g&list=PLCSO71HhvyTxyoRO8kYOT4EurAb8mDnZ5",
          "https://livestream.com/cmutvlive/ferox/videos/170381507"
        ]
    }
  },
  {
    "year": 2017,
    "title": "SONDER",
    "directors": ["Michelle Cho", "Catherine Zheng", "Lynzky Deleon"],
    "quote": "“Consumed by our everyday agenda, one can pass by the same places and faces with no concern of the significance of each interaction.”",
    "description": "Inspired by bright colors and kaleidoscopic textures, Sonder personified the awakening through which we become aware of the parallels between our own vivid and complex experiences and that of any passerby. This was the first year Lunar Gala Alumni took part in the show, bringing together the past and present.",
    "zodiac": "rooster",
    "img_ext": "jpg",
    "has_bg": true,
    "links": {
      "website": ["https://2017.lunargala.org"],
      "video": [
        "https://livestream.com/cmutvlive/lunargala2017",
        "https://youtu.be/mthoGEVeMpI",
        "https://youtu.be/ootduS2YHUY",
        "https://youtu.be/ALTPrhvka2I"
      ]
    }
  },
  {
    "year": 2016,
    "title": "STRAIN",
    "directors": ["Jessica Shen", "Miriam Buchewald", "Jibby Ani"],
    "quote": "“Strain is the evolution of a form over time from the application of pressure, tension, and constriction.”",
    "description": "Strain played on the concept of evolution and physical force, mirroring how Lunar Gala has grown through the pressure of CMU over time. Emphasizing transparency, Strain gave a look behind the scenes with backstage, internal team, and designer videos during the show, and experimented with color extremes.",
    "zodiac": "monkey",
    "img_ext": "jpg",
    "og": false,
    "has_bg": true,
    "links": {
      "website": ["https://2016.lunargala.org"],
      "video": [
        "https://livestream.com/cmutvlive/lg2016/videos/112298433",
        "https://www.youtube.com/watch?v=BNB7bdi2mWw",
        "https://youtu.be/7Au1KumBiYE",
        "https://youtu.be/20bksB2Xd7I"
      ]
    }
  },
  {
    "year": 2015,
    "title": "VESTIGE",
    "directors": ["Zach Bergeron", "Rachel Ciavarella", "Coleen Clifford"],
    "quote": "“Happiness cannot exist without sadness. Saturation cannot exist without drought.”",
    "description": "Through information distortion and folklore, the goat has fooled others into thinking it is something far greater. Similarly, humans have curated their lives to the public to present a superhuman view of their actual selves. They want to satisfy the urge to be connected, to be desired. Vestige exploited the human need for stimulation, and saturated the mind to give the viewer the information high they have been seeking.",
    "zodiac": "goat",
    "img_ext": "jpg",
    "has_bg": true,
    "links": {
      "website": ["https://2015.lunargala.org"],
      "video": [
        "https://www.youtube.com/watch?v=qA_eEz5e2Go",
        "https://www.youtube.com/edit?o=U&video_id=8ABvXV5SoBw"
      ]
    }
  },
  {
    "year": 2014,
    "title": "HYPNÔSE",
    "directors": ["Ceecee Chang", "Alana Fusaro"],
    "quote": "“Enter HYPNÔSE. The illusion is beautiful.”",
    "description": "Referring to a dream-like state that stimulates the mind and heightens the senses, Hypnose was created to push the boundaries of fashion on the runway and to imprint in the audience's’ memories. This was the year the Lunar Gala magazine was born, along with the Lunar Gala Blog that lives on to this day.",
    "zodiac": "horse",
    "og": false,
    "has_bg": true,
    "img_ext": "jpg",
    "links": {
      "video": [
        "https://vimeo.com/79932536",
        "https://vimeo.com/120503524",
        "https://vimeo.com/120504154",
        "https://vimeo.com/97393569"
      ]
    }
  },
  {
    "year": 2013,
    "title": "VENIN",
    "directors": ["Chris Ioffreda", "Joanne Yun", "Alex Deronde"],
    "description": "As one of the first shows to place emphasis on a visually cohesive theme, Venin incorporated video art, promotional videos, 360-degree photographs of the clothing, and a mobile app for the show. The show was split into two halves: light and dark, and placed designer lines and acts accordingly.",
    "zodiac": "snake",
    "og": false,
    "has_bg": true,
    "img_ext": "jpg",
    "links": {
      "video": [
        "https://www.youtube.com/watch?v=tikThvtXb_U",
        "https://www.youtube.com/watch?v=TzPdNTu7LbI",
        "https://www.youtube.com/watch?v=A0fqfJLcQTY"
      ],
      "article": [
        "https://thetartan.org/2013/2/18/pillbox/lunargala"
      ],
      "poster": [
        "https://4.bp.blogspot.com/-akzj2hWSlxA/URr5atV_m9I/AAAAAAAACfQ/s9JDOH4xcbk/s1600/venin+(1).jpg"
      ]
    }
  },
  {
    "year": 2012,
    "title": "BLUR",
    "directors": ["Ian Anthony Coleman", "Brieanna Nesbit"],
    "description": "",
    "zodiac": "dragon",
    "og": false,
    "has_bg": true,
    "img_ext": "jpg",
    "links": {
      "video": [
        "https://vimeo.com/36088511",
        "https://vimeo.com/36636667"
      ]
    }
  },
  {
    "year": 2011,
    "title": "MELANGE",
    "directors": ["Eddie Wong"],
    "description": "",
    "zodiac": "rabbit",
    "img_ext": "jpg",
    "og": false,
    "has_bg": true,
    "links": {
      "video": [
        "https://www.youtube.com/watch?v=pxQpmp1y42M",
        "https://www.youtube.com/watch?v=IWGrOwKh1_s",
        "https://vimeo.com/84919857",
        "https://www.youtube.com/watch?v=cXCAmwL3DXw"
      ]
    }
  },
  {
    "year": 2010,
    "title": "TENSION",
    "directors": ["Jessica Meng", "Hannah Pileggi"],
    "description": "",
    "zodiac": "tiger",
    "img_ext": "jpg",
    "og": false,
    "has_bg": true,
    "video": "https://www.youtube.com/watch?v=3oMTZ9b1G8s",
    "links": {
      "video": [
        "https://www.youtube.com/watch?v=3oMTZ9b1G8s",
        "https://www.youtube.com/watch?v=oGkypgilCv0",
        "https://vimeo.com/10527379",
        "https://vimeo.com/9692177"
      ]
    }
  },
  {
    "year": 2009,
    "title": "EVOLVE",
    "directors": ["Terrence Boyd", "Jessica Meng"],
    "description": "",
    "zodiac": "ox",
    "img_ext": "jpg",
    "og": false,
    "has_bg": true,
    "links": {
        "video": [
          "https://www.youtube.com/watch?v=F9g5Id9uNGQ",
          "https://www.youtube.com/watch?v=F9g5Id9uNGQ"
        ]
    }
  },
  {
    "year": 2008,
    "title": "KARMA",
    "directors": ["Stephen Lim", "Jamie Song"],
    "description": "Being the twelfth anniversary, Lunar Gala had come full circle and completed one cycle of the zodiac. Karma showcased the whimsical and witch-like karma emblem, and emphasized the cyclical process of dominance and submission through the lines and dances.",
    "zodiac": "rat",
    "img_ext": "jpg",
    "og": false,
    "has_bg": true,
    "links": {
      "video": [
        "https://www.youtube.com/watch?v=v_vUSF7kAjM",
        "https://www.youtube.com/watch?v=AbFtlgJkVOI"
      ]
    }
  },
  {
    "year": 2007,
    "title": "VICE VERSA",
    "directors": ["Natisha Kang"],
    "description": "",
    "zodiac": "pig",
    "img_ext": "jpg",
    "og": false,
    "has_bg": true,
    "links": {
      "video": [
        "https://www.youtube.com/watch?v=WHCAmk4sGbg",
        "https://www.youtube.com/watch?v=ty9SHRdHnSM",
        "https://vimeo.com/468768"
      ]
    }
  },
  {
    "year": 2006,
    "title": "X",
    "directors": ["David Bong", "Kwan Kim", "Rigardo Rush II"],
    "description": "Focusing on the “extreme”, “exciting”, and “expressive” aspects of fashion, the “X” theme was chosen in honor of Lunar Gala’s ten-year anniversary in hopes to emphasize the unknown factor of designing clothing.",
    "zodiac": "dog",
    "img_ext": "png",
    "og": false,
    "has_bg": true,
    "links": {
      "video": [
        "https://www.youtube.com/watch?v=Gfu4nARbms0",
        "https://www.youtube.com/watch?v=v5IRU7M5oHM"
      ]
    }
  },
  {
    "year": 2005,
    "title": "TIME",
    "directors": ["Engly Chang"],
    "description": "",
    "zodiac": "rooster",
    "img_ext": "png",
    "og": false,
    "has_bg": true,
    "links": {}
  },
  {
    "year": 2004,
    "title": "ALTER THE REAL",
    "directors": ["Kaily Yuri Lee", "Carrie Yu"],
    "description": "After many years of Lunar Gala being held at University Center Hall, the show was finally moved to Wiegand Gym, where it now holds over 1000 show goers.",
    "zodiac": "monkey",
    "img_ext": "png",
    "og": false,
    "has_bg": true,
    "links": {
        "video": ["https://www.youtube.com/watch?v=rt02dj4uAZc"],
        "article": ["https://drive.google.com/file/d/0B7gBYMXaA9-TTThKZUdYdFAxd0k/view"],
        "info": ["https://www.andrew.cmu.edu/user/lgala/2004/"]
    }
  },
  {
    "year": 2003,
    "title": "EXPERIENCE IDENTITY",
    "directors": ["Eray Chou"],
    "description": "In order to incorporate greater diversity of designs, Experience Identity was the first show to ever feature “Mini-Collections,” which inspired a handful of designers to each create only 2 looks.",
    "zodiac": "goat",
    "img_ext": "png",
    "og": false,
    "has_bg": true,
    "links": {}
  },
  {
    "year": 2002,
    "title": "YEAR OF THE SNAKE",
    "directors": ["Anna Wei"],
    "description": "",
    "zodiac": "",
    "img_ext": "jpg",
    "og": true,
    "has_bg": true,
    "links": {}
  },
  {
    "year": 2001,
    "title": "YEAR OF THE HORSE",
    "directors": ["Olive Chian", "Thu Wu"],
    "description": "",
    "img_ext": "jpg",
    "zodiac": "",
    "og": true,
    "has_bg": true,
    "links": {}
  },
  {
    "year": 2000,
    "title": "YEAR OF THE DRAGON",
    "directors": ["Elena Chon"],
    "description": "",
    "zodiac": "",
    "img_ext": "jpg",
    "og": true,
    "has_bg": true,
    "links": {}
  },
  {
    "year": 1999,
    "title": "YEAR OF THE RABBIT",
    "directors": ["Shannon Tam"],
    "description": "",
    "zodiac": "",
    "og": true,
    "has_bg": false,
    "links": {}
  },
  {
    "year": 1998,
    "title": "YEAR OF THE TIGER",
    "directors": ["Shannon Tam", "Douglas Lee"] ,
    "description": "Improving on the show, the second year of Lunar Gala presented student designers, and incorporated themes for participating retailers. With an overall theme of “chic and panache,” Lunar Gala turned into a VIP style event, and was rebranded into the “it” event of the year.",
    "zodiac": "",
    "og": true,
    "has_bg": false,
    "links": {}
  },
  {
    "year": 1997,
    "title": "YEAR OF THE OX",
    "directors": ["Jimmy Chiang"],
    "description": "Birth of Lunar Gala Fashion Show <br><br> Keeping with the tradition of new clothes being worn on Lunar New Year’s Day, the first Lunar Gala show celebrated the Year or the Ox with a theme of “high fashion”.",
    "zodiac": "",
    "og": true,
    "links": {
      "article": ["https://drive.google.com/file/d/0B7gBYMXaA9-TTzQ0dGd0SzlHZEU/view"]
    }
  }
];

/**
 * Builds the timeline page
 */
function build_timeline () {
  for (let i = 0; i < DATA.length; i++) {
    let curr_entry = DATA[i];

    // Build description string
    let info = `${curr_entry.title}<br><br>${curr_entry.directors.join(", ")}`;

    if (curr_entry.description !== "") {
      info += `<br><br>${curr_entry.description}`;
    }

    if (!curr_entry.og) {
      info += `<br><br>Year of the ${curr_entry.zodiac}`;
    }

    let new_elem = document.createElement('div');
    new_elem.classList.add('swiper-slide');
    new_elem.classList.add(`c${i}`);
    new_elem.onclick = () => $('.intro').html(info);
    new_elem.style.cursor = 'pointer';

    let new_elem_background = document.createElement('div');
    new_elem_background.classList.add('background');

    if (curr_entry.has_bg) {
      new_elem_background.style = `background-image: url(../assets/img/timeline/${curr_entry.year}.${curr_entry.img_ext})`;
    } else {
      // Black background if no bg
      new_elem_background.style = 'background: black';
    }

    /**
     * Build links under the entry.
     * Start with the theme site and videos, then append extras
     */
    let links = document.createElement('div');
    links.classList.add('caption');

    // If a site exists, link it to the current year
    if (curr_entry.links.website) {
      let site_link = document.createElement('a');
      site_link.target = '_blank';
      site_link.href = curr_entry.links.website[0];
      site_link.innerHTML = curr_entry.year;
      links.append(site_link);
    } else {
      links.append(curr_entry.year)
    }

    function convert_str_uppercase (str) {
      if (str.length == 0) {
        return str;
      } else if (str.length == 1) {
        return str.charAt(0);
      } else {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
    }

    function appendLinks (list, property) {
      if (list.length > 1) {
        for (let i = 0; i < list.length; i++) {
          let link = document.createElement('a');
          link.target = '_blank';
          link.href = list[i];
          link.innerHTML = `${convert_str_uppercase(property)} ${i+1}`;
          links.append(' / ');
          links.append(link);
        }
      } else {
        let link = document.createElement('a');
        link.target = '_blank';
        link.href = list[0];
        link.innerHTML = convert_str_uppercase(property);
        links.append(' / ');
        links.append(link);
      }
    }

    // List out all videos
    if (curr_entry.links.video) {
      appendLinks(curr_entry.links.video, 'Video');
    }

    for (const property in curr_entry.links) {
      if (property != 'website' && property != 'video') {
        appendLinks(curr_entry.links[property], property);
      }
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