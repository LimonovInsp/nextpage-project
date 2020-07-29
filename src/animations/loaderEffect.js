import starImage from '../images/loader-star.png';
import cameraImage from '../images/loader-camera.png';
import headphoneImage from '../images/loader-headphone.png';

function loaderEffect() {
  const preloader = document.querySelector('.loader');
  const preloaderCounter = document.querySelector('.loader_counter');
  const urlList = [starImage, cameraImage, headphoneImage];
  const preloaderImage = document.querySelector('.loader_image');

  let counter = 0;

  function changeLoaderImage() {
    preloaderImage.src = urlList[counter];

    if (counter === 2 || preloader.style.top === '-100%') {
      counter = 0;
    } else {
      counter++;
    }
  }

  function preloaderCounterHandler() {
    const textContent = preloaderCounter.textContent;

    if (textContent !== '100') {
      preloaderCounter.textContent = parseInt(textContent, 10) + 1;
    }
  }

  function preloaderHandler() {
    preloader.style.top = '-100%';
  };

  setTimeout(preloaderHandler, 4000);
  setInterval(changeLoaderImage, 350);
  setInterval(preloaderCounterHandler, 10);
}

export default loaderEffect;
