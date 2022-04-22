const initFunctions = {
  changeImageServecice: function () {
    const menuButtons = document.querySelectorAll(
      '.cr-services__container_wrapper > div'
    );

    const selectImageByIndex = (index) => {
      const image = document.querySelector('.cr-services__title_image');
      const imagesUrls = [
        'http://127.0.0.1:5501/images/services_2.png',
        'http://127.0.0.1:5501/images/services_3.png',
        'http://127.0.0.1:5501/images/services_4.png',
        'http://127.0.0.1:5501/images/services_5.png',
        'http://127.0.0.1:5501/images/services_2.png',
        'http://127.0.0.1:5501/images/services_3.png',
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
};

window.addEventListener('DOMContentLoaded', (event) => {
  initFunctions.changeImageServecice();
});
