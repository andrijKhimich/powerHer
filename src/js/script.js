"use strict";

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

toggleMenu(); // const fixedHeader = () => {
//   const header = document.querySelector(".header");
//   const startPoint = 1;
//   if (window.scrollY >= startPoint) {
//     header.classList.add("fixed");
//   } else {
//     header.classList.remove("fixed");
//   }
// }
// window.addEventListener("scroll", fixedHeader);
// check if browser support webp format for images

// const setNavPosition = () => {
//   const container = document.querySelector('.container');
//   let nav = document.querySelector('.nav');
//   console.log(nav, container)
//   nav.style.setProperty('left', 'calc(100% - ' + container.offsetLeft + 'px)');

//   window.addEventListener("resize", () => {
//     nav.style.setProperty('left', 'calc(100% - ' + container.offsetLeft + 'px)');
//   })
// }

// setNavPosition();

const accordion = () => {
  let acc = document.getElementsByClassName("accordion__btn");
  let i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}
accordion()




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