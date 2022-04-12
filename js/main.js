const $jq = jQuery.noConflict();

$jq(document).ready(function () {
  $jq(".slider-freelance").slick({
    // mobileFirst: true,
    variableWidth: true,
    centerMode: true,
    arrows: true,
    dots: false,
    slidesToShow: 3,
    autoplay: false,
    infinite: true,
    speed: 1800,
    adaptiveHeight: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    easing: "ease",
    draggable: true,
    // swipe: true,
    touchTreshold: 20,
    touchMove: false,
    prevArrow: document.querySelector("#prevArrow"),
    nextArrow: document.querySelector("#nextArrow"),
  });
});

function openBlock() {
  const burgerBtn = document.getElementById("burgerBtn");
  const otherId = document.getElementById("other");
  burgerBtn.classList.toggle("active");
  otherId.classList.toggle("hidden");
  otherId.querySelector(".inner").classList.toggle("active");
}

$jq(document).ready(function () {
  $jq("#burgerBtn").click(function () {
    if ($jq("#other").hasClass("active")) {
      $jq("#other").fadeOut();
      $jq("body").removeClass("modal-open");
      $jq("#other").toggleClass("active");
    } else {
      $jq("#other").fadeIn();
      $jq("body").addClass("modal-open");
      $jq("#other").toggleClass("active");
    }
  });
});

function openBlockSecond() {
  const burgerBtnSecond = document.getElementById("burgerBtnSecond");
  const otherSecond = document.getElementById("otherSecond");
  burgerBtnSecond.classList.toggle("active");
  otherSecond.classList.toggle("hidden");
  otherSecond.querySelector(".inner").classList.toggle("active");
}

$jq(document).ready(function () {
  $jq("#burgerBtnSecond").click(function () {
    if ($jq("#otherSecond").hasClass("active")) {
      $jq("#otherSecond").fadeOut();
      $jq("body").removeClass("modal-open");
      $jq("#otherSecond").toggleClass("active");
    } else {
      $jq("#otherSecond").fadeIn();
      $jq("body").addClass("modal-open");
      $jq("#otherSecond").toggleClass("active");
    }
  });
});

document
  .querySelectorAll(".languages, .bottom-side__nav__row")
  .forEach((item) => {
    item.addEventListener("click", (e) => {
      item.classList.toggle("active");
    });
  });

document.addEventListener("click", (e) => {
  const lang = document.getElementById("lang");
  const hotels = document.getElementById("hotels");
  const pathToLang = e.composedPath().includes(lang);
  const pathToHotels = e.composedPath().includes(hotels);

  if (!pathToLang) {
    lang.classList.remove("active");
  }
  if (!pathToHotels) {
    hotels.classList.remove("active");
  }
});

let accordions = document.querySelectorAll(".accordion");
accordions.forEach((element) => {
  element.querySelector(".accordion__header").addEventListener("click", () => {
    toggleAccordion(element);
  });
});

function toggleAccordion(element) {
  let isActive = element.classList.contains("active");
  if (document.querySelectorAll(".accordion.active").length > 0) {
    document.querySelector(".accordion.active .accordion__body").style.width =
      document.querySelector(".accordion.active .accordion__header")
        .offsetWidth + "px";
    document.querySelector(".accordion.active .accordion__body").style.height =
      document.querySelector(".accordion.active .accordion__header")
        .offsetHeight + "px";
    document.querySelector(".accordion.active").classList.remove("active");
  }
  if (isActive) {
    element.querySelector(".accordion__body").style.width =
      element.querySelector(".accordion__header").offsetWidth + "px";
    element.querySelector(".accordion__body").style.height =
      element.querySelector(".accordion__header").offsetHeight * 0.5 + "px";
    element.classList.remove("active");
  } else {
    element.querySelector(".accordion__body").style.width =
      element.querySelector(".accordion__inner").offsetWidth + "px";
    element.querySelector(".accordion__body").style.height =
      element.querySelector(".accordion__inner").offsetHeight + "px";
    element.classList.add("active");
  }
}
