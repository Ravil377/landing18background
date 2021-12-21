import openModal from "../../module/modal/modal.js";

const offices = document.querySelectorAll(".contacts__office-item");
const officeTitle = document.querySelectorAll(".contacts__office-item-title");
const inputFile = document.querySelector(".contacts__input-file");
const spanFile = document.querySelector(".contacts__file");
const officeContainer = document.querySelector(".office");
const submitButton = document.querySelector(".contacts__btn");


const openedOffice = (office) => {
    const officeContent = office.querySelector(".contacts__office-item-content");
    const officeTitle = office.querySelector(".contacts__office-item-title");
    officeContent.classList.toggle("contacts__office-item-content_opened");
    officeTitle.classList.toggle("open");
};
offices.forEach((office) => {
    office.addEventListener("click", () => openedOffice(office));
});

inputFile.addEventListener("change", () => {
    spanFile.textContent = inputFile.value;
});

const openCountry = (office) => {
    const countryId = office.dataset.id;
    console.log(countryId);
    const content = document.querySelector(`.geography__tabs-content_${countryId}`).innerHTML;
    officeContainer.innerHTML = content;
    openModal("office");
}

function breakpointChecker() {
    if (window.innerWidth > 767) {
        officeTitle.forEach((office) => {
            office.addEventListener('click', () => openCountry(office));
        })
    }
}

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    openModal("thanks");
})    


breakpointChecker();
window.addEventListener('resize', breakpointChecker);