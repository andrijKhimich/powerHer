"use strict";

// import { gsap } from "gsap/dist/gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
// import { TextPlugin } from "gsap/dist/TextPlugin";
const animItems = document.querySelectorAll(".js-show");
const showAnimation = () => {
  const trigger = (window.innerHeight / 5) * 4;
  animItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < trigger) {
      item.classList.add("show");
    } else {
      item.classList.remove("show");
    }
  });
}

window.addEventListener("scroll", showAnimation);
showAnimation();


gsap.registerPlugin(CSSRulePlugin, ScrollTrigger, ScrollToPlugin);


gsap.from('body', { duration: 2, opacity: 0, delay: 1 });
gsap.fromTo('.preloader', { opacity: 1 }, { opacity: 0, duration: 1, display: 'none', delay: 2 });
gsap.from('.preloader__icon', { duration: 1, x: '100%', delay: 1 });
gsap.from('.preloader__word', { duration: 1, x: '-50%', opacity: 0, delay: 1 });
// gsap.from('.logo', { duration: 1, y: '-100%', duration: 1, delay: 3 });
gsap.from('.header-row', { duration: 1, y: '-200%', delay: 3 });

gsap.from('.hero__content', { duration: 1, x: '-20px', opacity: 0, delay: 3 });
gsap.from('.hero-cta__content', { duration: 1, x: '-20px', opacity: 0, delay: 3 });
gsap.from('.hero__img img', { duration: 1, x: '-20px', scale: 1.2, opacity: 0, delay: 3 });
gsap.from('.hero-cta__img img', { duration: 1, x: '-20px', scale: 1.2, opacity: 0, delay: 3 });

gsap.from(CSSRulePlugin.getRule(".hero:before"), { duration: 1, x: '20px', opacity: 0, delay: 3 });

// document.querySelectorAll(".nav-list__link").forEach((btn, index) => {

//   btn.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (btn.classList.contains('link_active')) {
//       btn.classList.remove('link_active');
//     } else {
//       e.target.classList.add('link_active');
//     }
//     gsap.to(window, { duration: 1, scrollTo: { y: "#section" + (index + 1) } });
//   });
// });



// Scroll to top Button
// const scrollTopBtns = document.querySelectorAll('.nav-list a');

// scrollTopBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     gsap.to(window, {duration: 1, scrollTo:{y:"#section" + (index + 1), offsetY:70}});
//   });
// })


ScrollTrigger.matchMedia({
  '(min-width: 993px)': function () {
    gsap.to('.nav-wrapper', { opacity: 0, pointerEvents: 'none' });


    // const initScrollTrigger = () => {
    gsap.utils.toArray(".section").forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        markers: false,
        start: 'bottom 50%',
        // end: 'top top',

        // onToggle: self => console.log("toggled. active?", self.isActive),
        onEnter: () => {
          // goToSection(i);
          // console.log(i);

          if (i === 2) {
            // goToSection(section);
            gsap.to('.js-img-1', { duration: 1, maxWidth: '99.5vw', height: '100vh', width: '99.5vw', top: '100%' });
            gsap.to(window, { duration: 1, scrollTo: "#section4" });
            setTimeout(function () {
              gsap.to(window, { duration: 1, scrollTo: "#section5" });
            }, 1500);

          }
          if (i === 6) {
            gsap.to('.js-img-2', { duration: 1, maxWidth: '44%', height: '100%', width: '44%', bottom: '0', delay: 1.5 });
            gsap.to(window, { duration: 1, scrollTo: "#section8" });
            setTimeout(function () {
              gsap.to(window, { duration: 1, scrollTo: "#section9" });
            }, 1500);

          }
        }
      });



      ScrollTrigger.create({
        trigger: panel,
        start: "10% 50%",
        end: "10% 50%",

        markers: false,

        onEnterBack: () => {
          // goToSection(i)
          console.log(i);

          if (i === 4) {
            // goToSection(section);
            gsap.to('.js-img-1', { duration: 1, maxWidth: '44%', height: '100%', top: '0', delay: 1 });
            gsap.to(window, { duration: 1, scrollTo: "#section4" });
            setTimeout(function () {
              gsap.to(window, { duration: 1, scrollTo: "#section3" });
            }, 1000);
          }

          if (i === 8) {
            // goToSection(section);
            gsap.to('.js-img-2', { duration: 1, maxWidth: '100%', height: '100vh', width: '100%', bottom: '100%' });
            gsap.to(window, { duration: 1, scrollTo: "#section8" });
            setTimeout(function () {
              gsap.to(window, { duration: 1, scrollTo: "#section7" });
            }, 1500);
          }
        }
      });
    });
    // }
    gsap.utils.toArray(".section").forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        markers: false,
        start: 'top center',
        end: 'top center',

        // onToggle: self => console.log("toggled. active?", self.isActive),
        onEnter: () => {
          // goToSection(i);
          console.log(i);
          if (i >= 1 && i < 2) {
            gsap.to('.nav-wrapper', { duration: .4, opacity: 1, pointerEvents: 'initial' });
          } else if (i >= 4 && i <= 6) {
            gsap.to('.nav-wrapper', { duration: .4, opacity: 1, pointerEvents: 'initial' });
          } else {
            gsap.to('.nav-wrapper', { duration: .4, opacity: 0, pointerEvents: 'none' });
          }
          if (i === 5) {
            gsap.to('.nav-list a', { duration: .4, color: '#0D0A0B' });
          } else {
            gsap.to('.nav-list a', { duration: .4, color: '#E6E6E6' });
          }
        }
      });



      ScrollTrigger.create({
        trigger: panel,
        start: 'top center',
        end: 'top center',

        markers: false,

        onEnterBack: () => {
          // goToSection(i)
          console.log(i);
          // if (i === 1) {
          //   gsap.to('.nav-wrapper', {duration: 0, opacity: 1, pointerEvents: 'initial'});
          // }
          if (i <= 7 && i >= 5 || i === 2) {
            gsap.to('.nav-wrapper', { duration: .4, opacity: 1, pointerEvents: 'initial' });
          } else if (i <= 4 && i >= 3) {
            gsap.to('.nav-wrapper', { duration: .4, opacity: 0, pointerEvents: 'none' });
          }
          else {
            gsap.to('.nav-wrapper', { duration: .4, opacity: 0, pointerEvents: 'none' });
          }
          if (i === 6) {
            gsap.to('.nav-list a', { duration: .4, color: '#0D0A0B' });
          } else {
            gsap.to('.nav-list a', { duration: .4, color: '#E6E6E6' });
          }
        }
      });
    });
  }
})
// if (window.innerWidth <= 992) {
//   console.log('disable')
//   ScrollTrigger.getAll().forEach(test => test.disable());
// }
// scrollTopBtns.addEventListener('click', function () {

//   ScrollTrigger.getAll().forEach(test => test.disable());
//     gsap.to(window, {
//         duration: 1.5, 
//         scrollTo: {
//           y: 0,
//           x: 0,
//           autoKill: true
//         },
//       onComplete: enableGsap
//     });
// });

// gsap.from('.hero::before', { duration: 1, x: '20px', scale: 1.4, opacity: 0, duration: 1, delay: 3 });

// var rule = CSSRulePlugin.getRule(".hero:before"); //get the rule


// const preloadTimeline = gsap.timeline({defaults: {duration: 1}});
// preloadTimeline.from()



// gsap.registerPlugin(ScrollTrigger);

// gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.config({ limitCallbacks: true });

// // const snapText = document.querySelectorAll('.snap-section-text');
// const sections = document.querySelectorAll('.section');

// function goToSection(section) {
//   gsap.to(window, {
//     scrollTo: { y: section, autoKill: false },
//     duration: .75
//   });
// }

// // Text Scroller Snap Function for each panel

// sections.forEach((section, i) => {
//   ScrollTrigger.create({
//     trigger: section,
//     duration: 1,
//     scrub: true,
//     // start: 'bottom bottom',
//     // end: 'bottom center',
//     onEnter: () => {
//       console.log(i);
//       // goToSection(section);

//       if (i === 2) {
//         // goToSection(section);
//         gsap.to('.js-img-1', { duration: 1, maxWidth: '99.5vw', height: '100vh', width: '99.5vw', top: '150%' });
//         setTimeout(function () {
//           gsap.to(window, { duration: 1, scrollTo: "#section2" });
//         }, 1500);
//       }
//     },
//     onEnterBack: () => {
//       console.log(i);
//       // console.log("onEnterBack()");
//       // goToSection(section);
//     },
//     // markers: {startColor: "green", endColor: "red", fontSize: "12px"},
//   });
// });


// Scroll to top Button
// const scrollTopBtn = document.querySelector('.btn-top');

// var enableGsap = function () {
//   // test.enabled = true;
//   // test.revert();
//   // test.enable();
//   ScrollTrigger.getAll().forEach(test => test.enable());
//   // ScrollTrigger.getAll().forEach(test => test.enable());
// }

// scrollTopBtn.addEventListener('click', function () {

//   ScrollTrigger.getAll().forEach(test => test.disable());
//   gsap.to(window, {
//     duration: 1.5,
//     scrollTo: {
//       y: 0,
//       x: 0,
//       autoKill: true
//     },
//     onComplete: enableGsap
//   });
// });


// function goToSection(i, anim) {
//   gsap.to(window, {
//     scrollTo: { y: i * innerHeight, autoKill: false },
//     duration: 1
//   });

//   if (anim) {
//     anim.restart();
//   }
// }

// const setGiftImgHeight = () => {
//   const giftImg = document.querySelector('.js-img-1');
//   giftImg.style.transform = "translate(0,-50%)";
// }

// setGiftImgHeight();


const accordion = document.querySelector(".accordion");


const accordionItems = document.querySelectorAll(".accordion__item");
const accordionContent = document.querySelectorAll(".accordion__panel");
const toggleAccordion = () => {
  accordion.addEventListener("click", (e) => {
    const parent = e.target.parentNode;
    let panel = parent.querySelector(".accordion__panel");
    if (parent.classList.contains("accordion__item")) {
      if (parent.classList.contains("active")) {
        parent.classList.remove("active");
        panel.style.maxHeight = null;
      } else {
        accordionItems.forEach((item) => {
          item.classList.remove("active");
        });
        accordionContent.forEach((item) => {
          item.style.maxHeight = null;
        })
        parent.classList.add("active");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    }

  })
}
toggleAccordion();

var burger = document.querySelector(".js-burger");
var menu = document.querySelector(".js-header-nav");
var body = document.querySelector("body");

var toggleMenu = function toggleMenu() {

  burger.addEventListener("click", function () {
    if (!menu.classList.contains("active")) {
      // menu.classList.add("active");
      // burger.classList.add("active");
      // body.classList.add("locked");
      openMenu();
    } else {
      // menu.classList.remove("active");
      // burger.classList.remove("active");
      // body.classList.remove("locked");
      closeMenu();
    }
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 992) {
      menu.classList.remove("active");
      burger.classList.remove("active");
      body.classList.remove("locked");
    }
  });
};
toggleMenu();

const openMenu = () => {
  menu.classList.add("active");
  burger.classList.add("active");
  body.classList.add("locked");
}

const closeMenu = () => {
  menu.classList.remove("active");
  burger.classList.remove("active");
  body.classList.remove("locked");
}


$(document).on('click', '.nav-list a[href^="#"]', function (event) {
  event.preventDefault();
  closeMenu();
  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    
  }, 1000);
});


var testWebP = function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height === 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
};

testWebP(function (support) {
  if (support === true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
}); // run for sprite svg support 

svg4everybody();

document.addEventListener('DOMContentLoaded', function () {

  const sections = document.querySelectorAll(".js-spy");
  const menu_links = document.querySelectorAll(".nav-list a");

  // functions to add and remove the active class from links as appropriate
  const makeActive = (link) => menu_links[link].classList.add("active");
  const removeActive = (link) => menu_links[link].classList.remove("active");
  const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));

  // const sectionMargin = 200;

  let currentActive = 0;

  // listen for scroll events
  window.addEventListener("scroll", () => {

    const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - 300) - 1
    if (current !== currentActive) {
      removeAllActive();
      currentActive = current;
      makeActive(current);
    }
  });
}, false);