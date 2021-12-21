(function (factory) {
    typeof define === 'function' && define.amd ? define('custom', factory) :
    factory();
})((function () { 'use strict';

    const button = document.querySelector('.js-button-signin');
    document.querySelectorAll('.girl__image');
    const containerImage = document.querySelector('.sidebar__right');
    const template = document.querySelector('#girl');
    const modal = document.querySelector('.modal');
    const girls = ["./img/content/1.png", "./img/content/2.png", "./img/content/3.png", "./img/content/4.png", "./img/content/5.png", "./img/content/6.png", "./img/content/7.png", "./img/content/8.png"];
    const time = 5000;

    function shuffle(sourceArray) {
      for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));
        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
      }

      return sourceArray;
    }

    const newGirls = shuffle(girls);

    function loadCards(container, data) {
      const cardsElements = data.map((card, idx) => getCard(card, idx));
      container.append(...cardsElements);
    }

    function getCard(card, idx) {
      const cardElement = template.content.cloneNode(true);
      const cardImg = cardElement.querySelector('.girl__image');
      cardImg.src = card;
      idx === 0 ? cardImg.classList.add('girl__image_active') : cardImg.classList.add('girl__image_down');
      return cardElement;
    }

    loadCards(containerImage, newGirls);
    button.addEventListener('click', () => modal.classList.add('modal_opened'));
    document.addEventListener('DOMContentLoaded', function () {
      const addActive = (elem, reverse = true) => {
        if (reverse) {
          elem.classList.remove('girl__image_down');
          elem.classList.add('girl__image_active');
        } else {
          elem.classList.add('girl__image_down');
          elem.classList.remove('girl__image_active');
        }
      };

      const slider = () => {
        let cardImg = document.querySelector(".girl__image_active");
        let nextImg = cardImg.nextElementSibling;

        if (nextImg == null) {
          const elem = document.querySelector('.girl__image');
          addActive(elem);
          addActive(cardImg, false);
        } else {
          addActive(nextImg);
          addActive(cardImg, false);
        }
      };

      setInterval(() => {
        slider();
      }, time);
    });

}));
