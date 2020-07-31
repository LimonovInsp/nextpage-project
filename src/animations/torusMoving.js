
import { TweenMax, TimelineMax } from 'gsap/all';

function torusMoving() {
  const torusItem = document.querySelector('.header_picture__torus');

  TweenMax.set(torusItem, {
    right: '10%',
    bottom: '0',
  });

  const animationSpeed = 3;

  function infiniteMoving() {
    new TimelineMax()
      .to(torusItem, animationSpeed, {
        right: '-=3%',
      })
      .to(torusItem, animationSpeed, {
        top: '-=3%',
        right: '-=1%',
      })
      .to(torusItem, animationSpeed, {
        top: '+=3%',
        right: '+=1%',
      })
      .to(torusItem, animationSpeed, {
        right: '+=3%',
      });
  }

  infiniteMoving();

  setInterval(infiniteMoving, 12000);
}

export default torusMoving;
