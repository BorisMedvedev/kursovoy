
document.addEventListener("DOMContentLoaded", function () {
  var swiper1 = new Swiper(".gallery-slider__inner", {
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 1,
    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false,
    // },
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

  var swiper2 = new Swiper(".events-swiper", {
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 1,
    loop: true,
    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false,
    // },
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
  var swiper3 = new Swiper(".project-slider", {
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 1,
    centeredSlides: true,
    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false,
    // },
    loop: true,
    navigation: {
      nextEl: ".slider-btn--next",
      prevEl: ".slider-btn--prev",
    },
  });

  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map("contacts__map", {
      center: [55.75846806898367, 37.60108849999989],
      zoom: 16,
    });

    var myPlacemark = new ymaps.Placemark(
      [55.75846806898367, 37.60108849999989],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../images/icons/group.svg",
        iconImageSize: [20, 20],
        iconImageOffset: [-3, -42],
      }
    );
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable("scrollZoom");
  }

  tippy(".tultip-1", {
    content:
      "Предварительные выводы: постоянное информационно-пропагандистское обеспечение нашей деятельности однозначно",
  });

  tippy(".tultip-2", {
    content:
      "Предварительные выводы: постоянное информационно-пропагандистское обеспечение нашей деятельности однозначно Предварительные выводы: постоянное информационно-пропагандистское обеспечение нашей деятельности однозначно",
  });
  tippy(".tultip-3", {
    content:
      "Предварительные выводы: постоянное информационно-пропагандистское обеспечение нашей деятельности однозначно Предварительные выводы: постоянное информационно-пропагандистское обеспечение нашей деятельности однозначно Предварительные выводы: постоянное информационно-пропагандистское обеспечение нашей деятельности однозначно Предварительные выводы: постоянное информационно-пропагандистское обеспечение нашей деятельности однозначно",
  });
});
