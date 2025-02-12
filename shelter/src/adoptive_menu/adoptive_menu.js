const page = document.querySelector(".page");
const adoptMenuBtn = document.querySelector(".adoptive-btn");
const mainBgOfAdoptMenu = document.querySelector(".adoptive-menu__wrapper-bg");
const adoptMenuPanel = document.querySelector(".adoptive-menu__wrapper");
const bgAdoptMenu = document.querySelector(".adoptive-menu__wrapper");
const linkItems = document.querySelectorAll(".nav-container__item");
const navLinks = document.querySelectorAll(".item-link__adoptive");
/*flags*/
let isMenuOpen = false;
let isMainBgOpen = false;
let disableBtn = false;

/*disable btn ddureing open and close menu*/
const disablerBtn = function () {
  if (disableBtn === false) {
    disableBtn = true;
    setTimeout(() => {
      disableBtn = false;
    }, 500);
  }
};

/*flag for checking the menu is bg of adopt menu open*/
const flagToggler = function () {
  if (!isMenuOpen) {
    isMenuOpen = true;
  } else {
    isMenuOpen = false;
  }
};

// rotate style btn
const rotateBtn = function () {
  if (!isMenuOpen) {
    adoptMenuBtn.classList.remove("adoptive-btn__transform--open");
    adoptMenuBtn.classList.add("adoptive-btn__transform--close");
  } else {
    adoptMenuBtn.classList.remove("adoptive-btn__transform--close");
    adoptMenuBtn.classList.add("adoptive-btn__transform--open");
  }
};

const disableScroll = function () {
  if (isMenuOpen) {
    page.style.overflow = "hidden";
    mainBgOfAdoptMenu.style.overflow = "hidden";
  } else {
    page.style.overflow = "";
    mainBgOfAdoptMenu.style.overflow = "";
  }
};

/*function to open and close menu bar within adopt menu bg*/
const menuBarToggler = function () {
  if (
    isMainBgOpen === true &&
    bgAdoptMenu.classList.contains("nav-container--hide")
  ) {
    bgAdoptMenu.classList.remove("nav-container--hide");
    bgAdoptMenu.classList.remove("transform-menu--close");
    bgAdoptMenu.classList.add("transform-menu--open");
  } else if (
    isMainBgOpen === false &&
    !bgAdoptMenu.classList.contains("nav-container--hide")
  ) {
    bgAdoptMenu.classList.remove("transform-menu--open");
    bgAdoptMenu.classList.add("transform-menu--close");

    setTimeout(() => {
      bgAdoptMenu.classList.add("nav-container--hide");
    }, 450);
  }
};
/*main func to open bg of adopt menu*/
const menuToggler = function (callback) {
  if (
    isMenuOpen &&
    mainBgOfAdoptMenu.classList.contains("adopt-menu__bg--hide")
  ) {
    mainBgOfAdoptMenu.classList.remove("adopt-menu__bg--hide");
    mainBgOfAdoptMenu.classList.add("style-adoptive-menu--open");
    mainBgOfAdoptMenu.classList.remove("style-adoptive-menu--hide");
    isMainBgOpen = true;
    setTimeout(() => {
      callback();
    }, 5);
  } else if (
    !isMenuOpen &&
    !mainBgOfAdoptMenu.classList.contains("adopt-menu__bg--hide")
  ) {
    mainBgOfAdoptMenu.classList.remove("style-adoptive-menu--open");
    setTimeout(() => {
      mainBgOfAdoptMenu.classList.add("style-adoptive-menu--hide");
      isMainBgOpen = false;
      callback();
    }, 5);

    setTimeout(() => {
      mainBgOfAdoptMenu.classList.add("adopt-menu__bg--hide");
    }, 499);
  }
};

/*handler for close adopt menu outside menu menu panale*/
const closeMenuHandler = function (
  event,
  callFlag,
  callScrollDisable,
  callRotateBtn,
  callMenuToggler,
  callMenuBarToggler
) {
  const isClickedInside = Array.from(linkItems).some((item) =>
    item.contains(event.target)
  );
  if (
    event.target === mainBgOfAdoptMenu ||
    event.target === adoptMenuPanel ||
    isClickedInside
  ) {
    callFlag();
    callScrollDisable();
    callRotateBtn();
    callMenuToggler(callMenuBarToggler);
  }
};
/*adopt menu handler*/
adoptMenuBtn.addEventListener("click", () => {
  if (disableBtn === false) {
    disablerBtn();
    flagToggler();
    disableScroll();
    rotateBtn();
    menuToggler(menuBarToggler);
  }
});

/*hendler outsside of btn*/
addEventListener("click", (event) => {
  if (disableBtn === false) {
    disablerBtn();
    closeMenuHandler(
      event,
      flagToggler,
      disableScroll,
      rotateBtn,
      menuToggler,
      menuBarToggler
    );
  }
});
