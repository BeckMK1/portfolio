"use strict";
const slideShow = document.querySelector(".slide");
const slideImages = document.querySelectorAll(".slide img");

// buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

// counter
let counter = 1;
const size = slideImages[0].clientWidth;

slideShow.style.transform = 'translateX(' + (-size * counter) + 'px)'