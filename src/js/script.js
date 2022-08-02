"use strict";

// import { gsap } from "gsap/dist/gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
// import { TextPlugin } from "gsap/dist/TextPlugin";

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);


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
// gsap.from('.hero::before', { duration: 1, x: '20px', scale: 1.4, opacity: 0, duration: 1, delay: 3 });

// var rule = CSSRulePlugin.getRule(".hero:before"); //get the rule


// const preloadTimeline = gsap.timeline({defaults: {duration: 1}});
// preloadTimeline.from()



gsap.registerPlugin(ScrollTrigger);
function goToSection(i, anim) {
  gsap.to(window, {
    scrollTo: { y: i * innerHeight, autoKill: false },
    duration: 1
  });

  if (anim) {
    anim.restart();
  }
}

const setGiftImgHeight = () => {
  const sectionHeight = document.querySelector('.gift__content').offsetHeight;
  const giftImg = document.querySelector('.js-img-1');
  giftImg.style.height = `${sectionHeight}px`
  console.log(sectionHeight, giftImg);
}

// setGiftImgHeight();



const initScrollTrigger = () => {
  gsap.utils.toArray(".screen").forEach((panel, i) => {
    ScrollTrigger.create({
      trigger: panel,
      // onToggle: self => console.log("toggled. active?", self.isActive),
      onEnter: () => {
        goToSection(i);
        console.log(i);


        if (i === 0) {
          gsap.to('.nav-wrapper', { opacity: 0, pointerEvents: 'none' });
        }

        if (i === 1 || i >= 4 && i <= 6) {
          gsap.to('.nav-wrapper', { duration: 1, opacity: 1, pointerEvents: 'initial', delay: .5 });
        } else {
          gsap.to('.nav-wrapper', { duration: .5, opacity: 0, pointerEvents: 'none' });
        }
        if (i === 3) {
          gsap.to('.js-img-1', { duration: 1, maxWidth: '99.5vw', height: '100vh', width: '99.5vw', top: '100%', y: '50%' });
          setTimeout(function () {
            goToSection(4);
          }, 1500);
        }
        if (i === 5) {
          gsap.to('.nav-list__link', { duration: 1, color: '#0D0A0B' });
        } else {
          gsap.to('.nav-list__link', { duration: 1, color: '#E6E6E6' });
        }

        if (i === 7) {

          setTimeout(function () {
            goToSection(8);
          }, 1500);

        }
        if (i === 8) {
          gsap.to('.js-img-2', { duration: 1, maxWidth: '44%', height: '50vh', width: '44%', bottom: '210px', y: '0%' });
        }
      }
    });

    ScrollTrigger.create({
      trigger: panel,
      start: "bottom bottom",

      onEnterBack: () => {
        goToSection(i)
        console.log(i);
        if (i === 0) {
          gsap.to('.nav-wrapper', { opacity: 0, pointerEvents: 'none' });
        }

        if (i === 1 || i >= 4 && i <= 6) {
          gsap.to('.nav-wrapper', { duration: 1, opacity: 1, pointerEvents: 'initial', delay: .5 });
        } else {
          gsap.to('.nav-wrapper', { duration: .5, opacity: 0, pointerEvents: 'none' });
        }
        if (i === 2) {
          gsap.to('.js-img-1', { duration: 1, maxWidth: '44%', height: '50vh', width: '44%', top: '50%', y: '0%' });
        }
        if (i === 3) {
          setTimeout(function () {
            goToSection(2);
          }, 1500);
        }

        if (i === 5) {
          gsap.to('.nav-list__link', { duration: 1, color: '#0D0A0B' });
        } else {
          gsap.to('.nav-list__link', { duration: 1, color: '#E6E6E6' });
        }

        if (i === 7) {
          gsap.to('.js-img-2', { duration: 1, maxWidth: '100%', height: '100vh', width: '100%', bottom: '200%', y: '0%' });
          setTimeout(function () {
            goToSection(6);
          }, 1500);
        }
      }
    });
  });
}

initScrollTrigger();

const link = document.querySelector('.header__nav');
link.addEventListener('click', (e) => {

  // ScrollTrigger.disable();
  // setTimeout(() => {
  // initScrollTrigger();
  // }, 1000)
});
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


var toggleMenu = function toggleMenu() {
  var burger = document.querySelector(".js-burger");
  var menu = document.querySelector(".js-header-nav");
  var body = document.querySelector("body");
  burger.addEventListener("click", function () {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      burger.classList.add("active");
      body.classList.add("locked");
    } else {
      menu.classList.remove("active");
      burger.classList.remove("active");
      body.classList.remove("locked");
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