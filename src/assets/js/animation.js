const buttonNav = document.querySelector(".header__button_mobile");
const navMobile = document.querySelector(".nav__mobile");
let flagButton = true;

buttonNav.addEventListener("click", () => {
  if (flagButton) {
    buttonNav.classList.remove("closeButton");
    buttonNav.classList.add("openButton");

    navMobile.classList.add("openMobileMenu");
    navMobile.classList.remove("closeMobileMenu");

    document.body.style.overflow = 'hidden'
    flagButton = false;
  } else {
    buttonNav.classList.remove("openButton");
    buttonNav.classList.add("closeButton");

    navMobile.classList.add("closeMobileMenu");
    navMobile.classList.remove("openMobileMenu");

    document.body.style.overflow = 'visible'
    flagButton = true;
  }
});
