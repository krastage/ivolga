import Swiper from 'swiper';
import { Navigation, Pagination, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const showMoreButtons = document.querySelectorAll('.product-config__button');

if (showMoreButtons.length > 0) {
  showMoreButtons.forEach((showMoreButton) => {
    showMoreButton.addEventListener('click', () => {
      const button = showMoreButton.querySelector('.product-config-details-button__details');

      button.classList.toggle('active');

      showMoreButton.querySelector('.product-config__symbol').textContent =
        button.classList.contains('active') ? '-' : '+';
    });
  });
}

if (document.querySelector('.product-images') && window.matchMedia('(max-width: 760px)').matches) {
  const swiper = new Swiper('.product-images', {
    modules: [Pagination, Navigation],
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

const broadcasts = document.querySelectorAll('.broadcasts-products');
if (broadcasts.length > 0 && window.matchMedia('(max-width: 620px)').matches) {
  broadcasts.forEach((broadcast) => {
    const swiper2 = new Swiper(broadcast, {
      modules: [FreeMode],
      slidesPerView: 3,
      freeMode: true,
      spaceBetween: 20,
    });
  });
}

if (
  document.querySelector('.broadcast-swiper') &&
  window.matchMedia('(max-width: 580px)').matches
) {
  const swiper3 = new Swiper('.broadcast-swiper', {
    modules: [FreeMode],
    slidesPerView: 3,
    freeMode: true,
    spaceBetween: 10,
  });
}

