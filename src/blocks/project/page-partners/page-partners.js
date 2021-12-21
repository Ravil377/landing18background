import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);

const swiper = new Swiper(".partners__swiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
        prevEl: ".partners__left-btn",
        nextEl: ".partners__right-btn",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        620: {
            slidesPerView: 2,
            spaceBetween: 59,
        },
        880: {
            slidesPerView: 3,
            spaceBetween: 59,
        },
        1040: {
            slidesPerView: 4,
            spaceBetween: 59,
        },
    },
});
