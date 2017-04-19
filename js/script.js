var toggle = document.querySelector(".main-nav__toggle");
var header = document.querySelector(".main-header");
var nav = header.querySelector("nav");
var navButton = header.querySelector("button");
//var reviewSlider = document.querySelector("reviews");
//var slide = reviewSlider.querySelector("blockquote");
//var slideButton = document.querySelector("sliderJs-left");

toggle.addEventListener("click", function (event) {
	"use strict";
	event.preventDefault();
	nav.classList.toggle("main-nav--closed");
	navButton.classList.toggle("toggle-opened");
});

//slideButton.addEventListener("click", function (event) {
//	"use strict";
//	event.preventDefault();
//	slide.classList.remove("slider__item");
//});
