
import { TweenMax, TimelineMax } from 'gsap/all';

function torusIronMoving() {
  const torusIronItem = document
    .querySelector('.header_picture__torus-iron');

  TweenMax.set(torusIronItem, {
    transform: 'translateX(40%)',
    right: '40%',
    top: '-10%',
  });

  const animationSpeed = 4;

  function infiniteMoving() {
    new TimelineMax()
      .to(torusIronItem, animationSpeed, {
        top: '+=5%',
      })
      .to(torusIronItem, animationSpeed, {
        top: '-=5%',
      });
  }

  infiniteMoving();

  setInterval(infiniteMoving, 8000);
}

export default torusIronMoving;
