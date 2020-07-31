
import { TweenMax, TimelineMax } from 'gsap/all';

function cameraMoving() {
  const cameraItem = document.querySelector('.header_picture__camera');

  TweenMax.set(cameraItem, {
    left: '3%',
    top: '20%',
  });

  const animationSpeed = 3;

  function infiniteMoving() {
    new TimelineMax()
      .to(cameraItem, animationSpeed, {
        top: '+=20%',
      })
      .to(cameraItem, animationSpeed, {
        top: '-=20%',
      });
  }

  infiniteMoving();

  setInterval(infiniteMoving, 6000);
}

export default cameraMoving;
