import getResolution from './getResolution';

function teamSlider() {
  const buttons = document.querySelectorAll('.team_button');
  const sliderList = document.querySelector('.team_list');

  let translateX = 0;

  const cardSize = getResolution() === 375
    ? 226
    : getResolution() === 320
      ? 186
      : 269;

  let index = 0;

  buttons.forEach(button => {
    button.addEventListener('click', (event) => {
      if (event.target.id === 'next') {
        if (index !== sliderList.children.length / 2) {
          translateX -= cardSize;
          index++;
        }
      } else {
        if (index !== 0) {
          translateX += cardSize;
          index--;
        }
      }

      sliderList.style.transform = `translateX(${translateX}px)`;
    });
  });
}

export default teamSlider;
