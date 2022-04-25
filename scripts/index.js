const initFunctions = {
  changeImageServecice: function () {
    const menuButtons = document.querySelectorAll(
      '.cr-services__container_wrapper > div'
    );

    const selectImageByIndex = (index) => {
      const image = document.querySelector('.cr-services__title_image');
      const imagesUrls = [
        'https://github.com/pedro-samo/claudiarenda_site/blob/master/images/services_2.png',
        'https://github.com/pedro-samo/claudiarenda_site/blob/master/images/services_3.png',
        'https://github.com/pedro-samo/claudiarenda_site/blob/master/images/services_4.png',
        'https://github.com/pedro-samo/claudiarenda_site/blob/master/images/services_5.png',
        'https://github.com/pedro-samo/claudiarenda_site/blob/master/images/services_2.png',
        'https://github.com/pedro-samo/claudiarenda_site/blob/master/images/services_3.png',
      ];

      const newImage = document.createElement('img');
      newImage.classList.add('cr-services__title_image', 'slide-in-left');
      newImage.src = imagesUrls[index];

      image.replaceWith(newImage);
    };

    menuButtons.forEach((button, index) =>
      button.addEventListener('click', () => {
        selectImageByIndex(index);
      })
    );
  },

  carouselSlide: function () {
    const carousel = new Splide('.splide');
    carousel.mount();
  },
};

window.addEventListener('DOMContentLoaded', (event) => {
  initFunctions.changeImageServecice();
  // initFunctions.carouselSlide();
});
