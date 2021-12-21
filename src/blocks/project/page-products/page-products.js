import Swiper from "swiper";
import openModal from "../../module/modal/modal.js";

const swiper = new Swiper(".products_swiper", {
    slidesPerView: "auto",
    spaceBetween: 8,
    slideToClickedSlide: true,
});

const productsItems = document.querySelectorAll(".products__item");
const productContent = document.querySelectorAll(".products__tabs-container");
const costBtns = document.querySelectorAll(".js-products__cost");

const removeActive = () => productsItems.forEach((item) => item.classList.remove("products__item_active"));
const removeActiveContent = () => productContent.forEach((content) => content.classList.remove("products__tabs-container_active"));

const openTabs = (tab) => {
    removeActive();
    tab.classList.add("products__item_active");
    const tabContent = document.getElementById(tab.dataset.id);
    removeActiveContent();
    tabContent.classList.add("products__tabs-container_active");
};
costBtns.forEach((btn) => {
    const text = btn.previousSibling.textContent;
    btn.addEventListener("click", () => openModal("price", text));
});

productsItems.forEach((item) => {
    item.addEventListener("click", () => openTabs(item));
});


const step = 5; // Размер этих самых порций. Чтобы легко можно было поменять.
const prod = document.querySelectorAll('.products__tabs-container');
const products = document.querySelector('#products').offsetTop;
for( let i = 0; i < prod.length; i++ ){
  let product = prod[i];
  let li = product.querySelectorAll('li');
  for( let j = 0; j < step; j++ ){//Для начала перебираем - показываем первые step пунктов.
    // Но только если такие существуют
    if( li[j] ){ li[j].classList.add('visi') }
  }
  
  let more = product.querySelector('.js-products__cost-all');
  more.addEventListener('click', function(){
    let visi = product.querySelectorAll('.visi');
    let next = visi[visi.length-1].nextElementSibling;
    // Достали следующий элемент ПОСЛЕДНЕГО элемента visi. 
    //Предполагается, что никогда не будет добавлено полностью пустых ul.
    function expandList(){
      let it = 0;
      while( it < step ){
        if( next ){
          next.classList.add('visi');
          next = next.nextElementSibling;
          more.scrollIntoView(false);
          it++;
        } else {
          more.classList.add('products__cost-all_rotate');
          more.textContent = "Сollapse the list";
          break; // Если следующего элемента не оказалось - выключаем цикл.
        }
      }
    }
    function collapseList() {
      window.scrollTo({ top: products+250});
      li.forEach((item, idx) => {
        idx+1 > step && item.classList.remove('visi');
      })
      more.classList.remove('products__cost-all_rotate');
      more.textContent = "Expand the list";
    }
    more.classList.contains('products__cost-all_rotate') ? collapseList() : expandList();  
  });
}

