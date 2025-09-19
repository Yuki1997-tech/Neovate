'use strict';

// header animation
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// header burger-menu
let nav = document.querySelector("#nav-area");
let btn = document.querySelector(".c-toggle__button");
btn.onclick = () => {
    nav.classList.toggle("open");
};
