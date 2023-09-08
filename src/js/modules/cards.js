import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
 
let productsItem = document.querySelectorAll('.products__item');

let paginationItem = [];


productsItem.forEach(productItem => {
    paginationItem.push(productItem.innerHTML);
});







const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
loop: true,



pagination: {
  el: '.products-wrapper',
  clickable: true,
  bulletActiveClass:'product-active-pagination',
    renderBullet: function (index, className) {
    return '<div class="products__item ' + className + '">' + (paginationItem[index]) + '</div>';
    }

}
,


navigation: {
  nextEl: '.cards-button-right',
  prevEl: '.cards-button-left',
},

observer: true,
  observeParents: true,

scrollbar: {
  el: '.swiper-scrollbar',
},
});



    





 