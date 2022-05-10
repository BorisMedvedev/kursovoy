(function ($) {
	$(function () {
		$('.filter-styles').styler();
	});

	new Accordion('.accordion', {


	});


})(jQuery);


var swiper = new Swiper(".gallery-slider__inner", {
	slidesPerView: 3,
	spaceBetween: 50,
	slidesPerGroup: 1,
	navigation: {
		nextEl: ".slider-btn--next",
		prevEl: ".slider-btn--prev",
	},
	pagination: {
		el: ".gallery-slider__pagination",
		type: "fraction",
		clickable: true,
	},
});

var swiper = new Swiper(".events-swiper", {
	slidesPerView: 3,
	spaceBetween: 50,
	slidesPerGroup: 1,
	loop: true,
	navigation: {
		nextEl: ".events-swiper__next",
		prevEl: ".slider-btn--prev",
	},
	pagination: {
		el: ".gallery-slider__pagination",
		type: "fraction",
		clickable: true,
	},
});
var swiper = new Swiper(".project-slider", {
	slidesPerView: 3,
	spaceBetween: 50,
	slidesPerGroup: 1,
	loop: true,
	navigation: {
		nextEl: ".slider-btn--next",
		prevEl: ".slider-btn--prev",
	},
	pagination: {
		el: ".gallery-slider__pagination",
		type: "fraction",
		clickable: true,
	},
});