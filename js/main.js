(() => {
  const burger = document.querySelector(".burger"),
    menu = document.querySelector(".menu"),
    burgerClose = document.querySelector(".close"),
    menuLeft = document.querySelector(".menu-left"),
    heroTitle = document.querySelector(".hero__title"),
    heroDescr = document.querySelector(".hero__descr"),
    heroBtn = document.querySelector(".hero__btn"),
    photos = document.querySelector(".photos-wrap"),
    author = document.querySelector(".photos__author");

  setTimeout(() => {
    gsap.from(".hero__title, .hero__btn", { y: 150, duration: 1, opacity: 0 });
    gsap.from(".hero__descr", { opacity: 0, delay: 1, duration: 3 });
    gsap.from(".photos-wrap > img", {
      scale: 0.2,
      delay: 1,
      duration: 1,
      opacity: 0,
      stagger: 0.25,
    });
    gsap.from(".photos__author", { opacity: 0, duration: 3, delay: 2 });
    // let tl = gsap.timeline({repeat:3, yoyo: true});
    // tl.from('.hero__title, .hero__btn', {y: 100, duration: 1, opacity: 0});
    // tl.from('.hero__descr', {opacity: 0, duration: 3});
    // tl.from('.photos-wrap > img', {scale: 0.2, duration: 1, opacity: 0, stagger: 0.25});
    // tl.from('.photos__author', {opacity: 0, duration: 3, delay: 1})
  }, 0);
  let tl = gsap.timeline({ paused: true });
  tl.fromTo(".menu", { opacity: 0, duration: 1 }, { opacity: 1 });
  tl.from(".menu__top", { opacity: 0, y: -100, duration: 0.5 }, "-=0.5");
  tl.from(".menu__container", { opacity: 0, y: 150, duration: 0.5 }, "-=0.5");
  tl.from(".menu__nav", { opacity: 0, y: 100, duration: 1.2 }, "-=0.5");
  tl.from(
    ".social, .sub-menu__list, .sub-menu__title",
    { opacity: 0, duration: 1.5, y: 100 },
    "-=0.5"
  );

  burger.addEventListener("click", () => {
    menu.classList.add("menu--open");
    tl.timeScale(1).play();
  });
  burgerClose.addEventListener("click", () => {
    tl.timeScale(2).reverse();
    setTimeout(() => {
      menu.classList.remove("menu--open");
    }, 1600);
  });
})();
