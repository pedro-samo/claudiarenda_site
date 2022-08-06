MicroModal.init({
  onClose: () => console.log('FECHOU'), // [2]
});

const initFunctions = {
  carouselSlide: function () {
    const glide = new Glide('.glide', {
      autoplay: 4000,
      hoverpause: true,
      animationDuration: 1000,
      perView: 1,
    });
    glide.mount();
  },

  openModal: function () {
    const buttons = document.querySelectorAll('.cr-services__container_wrap');
    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        MicroModal.show(`modal-${index + 1}`);
        button.querySelector('input').checked = true;
        button.querySelector('.modal__container').scroll(0, 0);
      });
    });
  },
};

window.addEventListener('DOMContentLoaded', (event) => {
  initFunctions.carouselSlide();
  initFunctions.openModal();
});
