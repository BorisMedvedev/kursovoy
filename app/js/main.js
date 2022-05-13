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
	centeredSlides: true,
	loop: true,
	navigation: {
		nextEl: ".project-slider__btn--next",
		prevEl: ".project-slider__btn--prev",
	},
	// pagination: {
	// 	el: ".gallery-slider__pagination",
	// 	type: "fraction",
	// 	clickable: true,
	// },
});


ymaps.ready(init);

function init() {
	var myMap = new ymaps.Map("contacts__map", {
		center: [55.75846806898367, 37.60108849999989],
		zoom: 16
	});

	var myPlacemark = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
		iconLayout: 'default#image',
		iconImageHref: '../images/icons/group.svg',
		iconImageSize: [20, 20],
		iconImageOffset: [-3, -42]
	});
	myMap.geoObjects.add(myPlacemark);
	myMap.behaviors.disable("scrollZoom");
}


tippy('.tultip-1', {
	content: 'Предварительные выводы: постоянное информационно-пропагандистское обеспечение нашей деятельности однозначно',
});

tippy('.tultip-2', {
	content: 'Предварительные выводы: постоянное информационно-пропагандистское обеспечение нашей деятельности однозначно Предварительные выводы: постоянное информационно-пропагандистское обеспечение нашей деятельности однозначно',
});
tippy('.tultip-3', {
	content: 'Предварительные выводы: постоянное информационно-пропагандистское обеспечение нашей деятельности однозначно Предварительные выводы: постоянное информационно-пропагандистское обеспечение нашей деятельности однозначно Предварительные выводы: постоянное информационно-пропагандистское обеспечение нашей деятельности однозначно Предварительные выводы: постоянное информационно-пропагандистское обеспечение нашей деятельности однозначно',
});