const initFunctions = {
  menuMobile: function () {
    const menuButton = document.querySelector('.cr-header__nav_mobmenu');
    const navList = document.querySelector('.cr-header__nav');
    menuButton.addEventListener('click', () => {
      [menuButton, navList].forEach((element) =>
        element.classList.toggle('open')
      );
    });
  },

  carouselSlide: function () {
    const glide = new Glide('.glide', {
      autoplay: 5000,
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
  initFunctions.menuMobile();
});
