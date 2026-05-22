const envelopeWrapper = document.getElementById('envelopeWrapper');
const envelopeFlap = document.querySelector('.envelope-flap');
const letterSection = document.getElementById('letterSection');
const tapMessage = document.getElementById('tapMessage');
const intro = document.getElementById('intro');

/* ============================= */
/* MENSAJE DESPUÉS DE 5 SEGUNDOS */
/* ============================= */

setTimeout(() => {

  tapMessage.style.opacity = "1";

  setTimeout(() => {
    tapMessage.style.opacity = "0";
  }, 4000);

}, 5000);

/* ============================= */
/* ABRIR SOBRE */
/* ============================= */

envelopeWrapper.addEventListener('click', () => {

  envelopeFlap.style.transform = "rotateX(180deg)";

  envelopeWrapper.style.transform = "scale(1.05)";

  setTimeout(() => {

    letterSection.classList.add('show');

    window.scrollTo({
      top: letterSection.offsetTop,
      behavior: 'smooth'
    });

  }, 1200);

});

/* ============================= */
/* SWIPER */
/* ============================= */

const swiper = new Swiper(".romantic-swiper", {

  effect: "slide",

  loop: true,

  centeredSlides: true,

  slidesPerView: 1.1,

  spaceBetween: 20,

  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  speed: 1200,

  pagination: false,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {

    768: {
      slidesPerView: 1.2
    }

  }

});

/* ============================= */
/* MÚSICA */
/* ============================= */

const music = document.getElementById('bgMusic');

window.addEventListener('click', () => {

  music.volume = 0.5; // volumen medio

  music.play();

}, { once: true });