
import { TweenMax, TimelineMax } from 'gsap/all';

const cameraItem = document.querySelector('.header_picture__camera');

function cameraMoving() {
  TweenMax.set(cameraItem, {
    transform: 'translateX(-15%)',
    left: '15%',
    top: '40%',
  });

  const animationSpeed = 3;

  // eslint-disable-next-line no-unused-vars
  const tween = new TimelineMax()
    .to(cameraItem, animationSpeed, {
      top: '+=3%',
    })
    .to(cameraItem, animationSpeed, {
      top: '+=3%',
    })
    .to(cameraItem, animationSpeed, {
      top: '-=3%',
    })
    .to(cameraItem, animationSpeed - 2, {
      top: '-=3%',
    });
}

setInterval(cameraMoving, 10000);

export default cameraMoving;
