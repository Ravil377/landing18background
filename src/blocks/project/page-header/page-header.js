const burger = document.querySelector(".menu__burger");
const burgerMenuItems = document.querySelectorAll('.menu__item');
const btnCloseBurgerMenu = document.querySelector(".menu__burger-close-btn");
const menu = document.querySelector(".header__menu-container");
const contactBtns = document.querySelectorAll(".js-header-button");
const body = document.body;

const openBurgerMenu = () => {
    menu.classList.toggle("header__menu-container_active");
    body.classList.toggle('body_fixed');
    document.addEventListener("click", checkPressOverlay);
    document.addEventListener("keydown", checkKeyPress);
};

const burgerMenuClose = () => {
    body.classList.remove('body_fixed');
    menu.classList.remove("header__menu-container_active");
    document.removeEventListener("keydown", burgerMenuClose);
    document.removeEventListener("click", checkPressOverlay);
};

const checkKeyPress = (e) => {
    if (e.code === "Escape") {
        burgerMenuClose();
    }
};

const checkPressOverlay = (e) => {
    if (
        e.target.closest(".header__overlay") && 
        e.target.closest(".content") && 
        !e.target.closest(".menu__burger") && 
        !(e.target.closest(".header__menu-container") == menu)) {
            burgerMenuClose();
        }
};

burger.addEventListener("click", openBurgerMenu);
btnCloseBurgerMenu.addEventListener("click", burgerMenuClose);

contactBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        window.location.href = "#contacts";
    });
})

burgerMenuItems.forEach((item) => {
    item.addEventListener('click', burgerMenuClose);
})