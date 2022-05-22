document.addEventListener("DOMContentLoaded", function () {
  function navigation() {
    const anchors = document.querySelectorAll(
      ".nav__link, .hero__link, .accordion-list__inner-link"
    );

    for (let anchor of anchors) {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute("href");
        console.log(blockID);

        document.querySelector(blockID).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }

  function gallerySlider() {
    var swiper1 = new Swiper(".gallery-slider__inner", {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 1,

      navigation: {
        nextEl: ".gallery-slider__btn-next",
        prevEl: ".gallery-slider__btn-prev",
      },
      pagination: {
        el: ".gallery-slider__pagination",
        type: "fraction",
        clickable: true,
      },
    });
  }

  function eventsSwiper() {
    var swiper2 = new Swiper(".events-swiper", {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 1,

      navigation: {
        nextEl: ".events-swiper__next",
        prevEl: ".events-swiper__prev",
      },
      // pagination: {
      //   el: ".events-swiper__pagination",
      //   type: "fraction",
      //   clickable: true,
      // },
    });
  }

  function projectSlider() {
    var swiper3 = new Swiper(".project-slider", {
      slidesPerView: 3,
      spaceBetween: 50,
      navigation: {
        nextEl: ".project__partners-btn-next",
        prevEl: ".project__partners-btn-prev",
      },
    });
  }

  function contactsMap() {
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
  }

  const defaultSelect = () => {
    const element = document.querySelector(".gallery-filter__select");
    const choices = new Choices(element, {
      searchEnabled: false,
    });
  };

  function newAccordion() {
    new Accordion(".accordion-list", {
      elementClass: "accordion",
      triggerClass: "accordion-list__btn",
      panelClass: "accordion-list__content",
      activeClass: "accordion--active",
    });
  }

  function showData() {
    const menuBtn = document.querySelectorAll(".selection-menu__btn");

    menuBtn.forEach(function (e) {
      const sibling = e.nextElementSibling;
      e.addEventListener("click", () => {
        sibling.classList.toggle("active");
        const arrow = sibling.querySelector(".list-scroll");
      });
    });
  }
  function tulTip() {
    tippy(".tultip-1", {
      content:
        " уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. Прежде",
      theme: "amethyst",
      fill: "yellow",
      trigger: "click",
    });
    tippy(".tultip-2", {
      content:
        "современных социальных резервов призывают нас к новым свершениям,",
      theme: "amethyst",
      fill: "yellow",
      trigger: "click",
    });
    tippy(".tultip-3", {
      content:
        "с не уникальными данными до степени совершенной неузнаваемости.",
      theme: "amethyst",
      fill: "yellow",
      trigger: "click",
    });
  }

  contactsMap();
  navigation();
  defaultSelect();
  newAccordion();
  showData();
  gallerySlider();
  eventsSwiper();
  projectSlider();
  tulTip();
});
