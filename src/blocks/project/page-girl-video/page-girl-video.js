import Swiper, { Navigation }  from "swiper";
Swiper.use([Navigation]);

const movieBd = [
    {
        id: 0,
        image: "./img/content/olivia.jpg",
        fullName: "Olivia Da Silva",
        name: "Olivia",
        movie: "./video/1.mp4",
        subscribe: "1,081 <span>posts</span>2,226k <span>followes</span>"
    },
    {
        id: 1,
        image: "./img/content/mirela.jpg",
        fullName: "Mirela Flores",
        name: "Mirela",
        movie: "./video/2.mp4",
        subscribe: "2,122 <span>posts</span>5,340k <span>followes</span>"
    },
    {
        id: 2,
        image: "./img/content/barbara.jpg",
        fullName: "Bárbara Andrade",
        name: "Bárbara",
        movie: "./video/3.mp4",
        subscribe: "1,345 <span>posts</span>3,546k <span>followes</span>"
    },
]
let count = 0;
const movieContainer = document.querySelector('.movie__list');
const movieCard = document.querySelector('#movieCard'); 

function loadCards(container, data) { 
    const cardsElements = data.map(getCard); 
    container.append(...cardsElements); 
} 

function shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}

function getCard(card) { 
    const cardElement = movieCard.content.cloneNode(true);
    const videoContainer = cardElement.querySelector(".movie__item"); 
    const cardVideo = cardElement.querySelector(".js-video-src"); 
    videoContainer.dataset.id = card.id;
    videoContainer.dataset.name = card.name;
    videoContainer.dataset.fullname = card.fullName;
    videoContainer.dataset.img = card.image;
    videoContainer.dataset.subscribe = card.subscribe;
    cardVideo.src = card.movie; 
    return cardElement; 
} 

const newMas = shuffle(movieBd);
loadCards(movieContainer, newMas);


document.addEventListener('DOMContentLoaded', function () {    
    const containerButtons = document.querySelectorAll('.container__buttons');
    const name = document.querySelector('.info__name');
    const titleName = document.querySelector('.js-title');
    const avatar = document.querySelector('.js-avatar');
    const subscribe = document.querySelector('.info__subscribers');
    const sidebar = document.querySelector('.sidebar');
    const containerMovie = document.querySelector('.container__movie');
    const closeButton = document.querySelector('.modal__close-button');

    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.js-button-next',
            prevEl: '.js-button-prev',
        },
    });
    closeButton.addEventListener('click', () => {
        sidebar.classList.remove('sidebar__modal');
        containerMovie.classList.remove('container__movie_modal')
    })
    const openmodal = (e) => {
        sidebar.classList.add('sidebar__modal');
        containerMovie.classList.add('container__movie_modal')
    }

    containerButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            if(e.target.closest('.js-button-next')) {
                count = count + 1;
            }
            (e.target.closest('.js-button-next') && count >= 3) && openmodal();
        });
    });

    const handler = () => {
        name.textContent = '';
        titleName.textContent = ''
        let actSlide = movieContainer.querySelector('.swiper-slide-active');
        name.textContent = actSlide.dataset.fullname;
        titleName.textContent = actSlide.dataset.name;
        avatar.src = actSlide.dataset.img;
        avatar.alt = actSlide.dataset.name;
        subscribe.innerHTML = actSlide.dataset.subscribe;
    };
    handler();

    let observer = new MutationObserver(function(mutations) {
        for (let mutation of mutations) {
            if (mutation.type === 'attributes') {
                handler();
            }
        }
    });
    
    observer.observe(movieContainer, { attributes: true });
});