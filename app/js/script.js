const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const headerMenu = document.querySelector(".header__menu");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

[btnHamburger, headerMenu].map((domElement) => {
  domElement.addEventListener("click", () => {
    if (header.classList.contains("open")) {
      body.classList.remove("no-scroll");
      // close hamburger menu
      header.classList.remove("open");
      for (const elem of fadeElems) {
        elem.classList.remove("fade-in");
        elem.classList.add("fade-out");
      }
    } else {
      body.classList.add("no-scroll");
      header.classList.add("open"); // open hamburger menu
      for (const elem of fadeElems) {
        elem.classList.remove("fade-out");
        elem.classList.add("fade-in");
      }
    }
  });
});
