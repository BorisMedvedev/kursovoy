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

var total_pics_num = 3; // колличество изображений
var interval = 5000; // задержка между изображениями
var time_out = 25; // задержка смены изображений
var i = 0;
var timeout;
var opacity = 100;

function fade_to_next() {
	opacity--;
	var k = i + 1;
	var image_now = 'image_' + i;
	if (i == total_pics_num) k = 1;
	var image_next = 'image_' + k;
	document.getElementById(image_now).style.opacity = opacity / 100;
	document.getElementById(image_now).style.filter = 'alpha(opacity=' + opacity + ')';
	document.getElementById(image_next).style.opacity = (100 - opacity) / 100;
	document.getElementById(image_next).style.filter = 'alpha(opacity=' + (100 - opacity) + ')';
	timeout = setTimeout("fade_to_next()", time_out);
	if (opacity == 1) {
		opacity = 100;
		clearTimeout(timeout);
	}
}
setInterval(
	function () {
		i++;
		if (i > total_pics_num) i = 1;
		fade_to_next();
	}, interval
);


tippy('.tultip-1', {
	content: 'Предварительные выводы: постоянное информационно-пропагандистское обеспечение нашей деятельности однозначно',
});

tippy('.tultip-2', {
	content: 'Предварительные выводы: постоянное информационно-пропагандистское обеспечение нашей деятельности однозначно Предварительные выводы: постоянное информационно-пропагандистское обеспечение нашей деятельности однозначно',
});
tippy('.tultip-3', {
	content: 'Предварительные выводы: постоянное информационно-пропагандистское обеспечение нашей деятельности однозначно Предварительные выводы: постоянное информационно-пропагандистское обеспечение нашей деятельности однозначно Предварительные выводы: постоянное информационно-пропагандистское обеспечение нашей деятельности однозначно Предварительные выводы: постоянное информационно-пропагандистское обеспечение нашей деятельности однозначно',
});