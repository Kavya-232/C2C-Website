
let searchForm = document.querySelector('.search-form');


document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
  shoppingcart.classList.remove('active');
  loginBtn.classList.remove('active');
  navbar.classList.remove('active');
}

let shoppingcart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
  shoppingcart.classList.toggle('active');
  searchForm.classList.remove('active');
  loginBtn.classList.remove('active');
  navbar.classList.remove('active');
}

let loginBtn = document.querySelector('.login-form');

document.querySelector('#user-btn').onclick = () => {
  loginBtn.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppingcart.classList.remove('active');
  navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppingcart.classList.remove('active');
  loginBtn.classList.remove('active');
}


Window.onscroll = () => {
  searchForm.classList.remove('active');
  shoppingcart.classList.remove('active');
  loginBtn.classList.remove('active');
  navbar.classList.remove('active');
}




var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
