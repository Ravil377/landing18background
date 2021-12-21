import openModal from "../../module/modal/modal.js";

const vacancys = document.querySelectorAll(".career__vacancy");
const echoBtns = document.querySelectorAll(".career__vacancy-button ");

const openedVacancy = (vacancy) => {
    const vacancyContent = vacancy.querySelector(".career__vacancy-content");
    const vacancyTitle = vacancy.querySelector(".career__vacancy-title");
    vacancyContent.classList.toggle("career__vacancy-content_opened");
    vacancyTitle.classList.toggle("open");
};

vacancys.forEach((vacancy) => {
    vacancy.addEventListener("click", () => openedVacancy(vacancy));
});

echoBtns.forEach((btn) => {
    btn.addEventListener("click", () => openModal("response"));
});
