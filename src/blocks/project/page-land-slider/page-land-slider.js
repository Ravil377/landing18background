import Swiper, { Navigation }  from "swiper";
Swiper.use([Navigation]);
const joinButton = document.querySelector('.js-join-now');
const modal = document.querySelector('.modal');
const closeModalButton = modal.querySelector('.js-modal-close-button');

const toggleModal = () => modal.classList.toggle('modal_opened');
const checkKeyPress = (e) => e.code === "Escape" ? modal.classList.remove('modal_opened') : null;

const checkPressOverlay = (e) => {
    if (e.target === modal) {
        modal.classList.remove('modal_opened');
    }
}

modal.addEventListener("click", e => checkPressOverlay(e));
closeModalButton.addEventListener('click', toggleModal);
joinButton.addEventListener('click', toggleModal);
document.addEventListener("keydown", (e) => checkKeyPress(e));




const girls = [
    {
        image: "./img/content/girl1.jpg",
        name: "name",
    },
    {
        image: "./img/content/girl2.jpg",
        name: "name",
    },
    {
        image: "./img/content/girl3.jpg",
        name: "Camila, 32",
    },
    {
        image: "./img/content/girl4.jpg",
        name: "Bruna, 28",
    },
    {
        image: "./img/content/girl5.jpg",
        name: "Alice, 29",
    },
    {
        image: "./img/content/girl6.jpg",
        name: "Leticia, 27",
    },
    {
        image: "./img/content/girl7.jpg",
        name: "name",
    },
    {
        image: "./img/content/girl8.jpg",
        name: "name",
    },
    {
        image: "./img/content/girl9.jpg",
        name: "name",
    },
    {
        image: "./img/content/girl10.jpg",
        name: "name",
    },
    {
        image: "./img/content/girl11.jpg",
        name: "name",
    },
    {
        image: "./img/content/girl12.jpg",
        name: "name",
    },
    {
        image: "./img/content/girl13.jpg",
        name: "Amanda, 24",
    },
    {
        image: "./img/content/girl14.jpg",
        name: "name",
    },
    {
        image: "./img/content/girl15.jpg",
        name: "name",
    },
    {
        image: "./img/content/girl16.jpg",
        name: "name",
    },
    {
        image: "./img/content/girl17.jpg",
        name: "Isabel, 26",
    },
    {
        image: "./img/content/girl18.jpg",
        name: "name",
    },
    {
        image: "./img/content/girl19.jpg",
        name: "name",
    },
    {
        image: "./img/content/girl20.jpg",
        name: "name",
    },
    {
        image: "./img/content/girl21.jpg",
        name: "name",
    },
    {
        image: "./img/content/girl22.jpg",
        name: "Sara, 22",
    },
    {
        image: "./img/content/girl23.jpg",
        name: "name",
    },
    {
        image: "./img/content/girl24.jpg",
        name: "name",
    },
    {
        image: "./img/content/girl25.jpg",
        name: "name",
    },
    {
        image: "./img/content/girl26.jpg",
        name: "Bianca, 26",
    },
    {
        image: "./img/content/girl27.jpg",
        name: "name",
    },
    {
        image: "./img/content/girl28.jpg",
        name: "name",
    },
    {
        image: "./img/content/girl29.jpg",
        name: "name",
    },
    {
        image: "./img/content/girl30.jpg",
        name: "name",
    },
    {
        image: "./img/content/girl31.jpg",
        name: "name",
    },
    {
        image: "./img/content/girl32.jpg",
        name: "name",
    },
    {
        image: "./img/content/girl33.jpg",
        name: "name",
    },
    {
        image: "./img/content/girl34.jpg",
        name: "name",
    },
    {
        image: "./img/content/girl35.jpg",
        name: "name",
    },
    {
        image: "./img/content/girl36.jpg",
        name: "name",
    },
    {
        image: "./img/content/girl37.jpg",
        name: "name",
    },
    {
        image: "./img/content/girl38.jpg",
        name: "name",
    },
    {
        image: "./img/content/girl39.jpg",
        name: "name",
    },
    {
        image: "./img/content/girl40.jpg",
        name: "name",
    },
    {
        image: "./img/content/girl41.jpg",
        name: "name",
    },
    {
        image: "./img/content/girl42.jpg",
        name: "name",
    },
]

function shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}
const sliderContainer = document.querySelector('.slider__list');
const cardTemplate = document.querySelector('#card'); 

function loadCards(container, data) { 
    const cardsElements = data.map(getCard); 
    container.append(...cardsElements); 
} 

function getCard(card) { 
    const cardElement = cardTemplate.content.cloneNode(true);
    const cardImg = cardElement.querySelector(".slider__item-img"); 
    const cardName = cardElement.querySelector(".slider__desc"); 
    cardImg.dataset.src = card.image; 
    cardImg.alt = card.name; 
    cardName.textContent = card.name; 
    return cardElement; 
} 
const newGirls = shuffle(girls);
loadCards(sliderContainer, newGirls);

document.addEventListener('DOMContentLoaded', function () {        
    const swiper = new Swiper('.swiper', {
        slidesPerView: 'auto',
        spaceBetween: 12,
        loop: true,
        centeredSlidesBounds: true,
        // autoHeight,
        navigation: {
            nextEl: '.js-slider-next',
            prevEl: '.js-slider-prev',
        },
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var lazyLoadInstance = new LazyLoad({
        elements_selector: ".slider__item-img"
    });
});