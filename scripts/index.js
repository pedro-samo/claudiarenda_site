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
    MicroModal.show('modal-1');
  },
};

window.addEventListener('DOMContentLoaded', (event) => {
  initFunctions.changeImageServecice();
  initFunctions.carouselSlide();
  // initFunctions.openModal();
});
