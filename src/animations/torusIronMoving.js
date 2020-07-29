
import { TweenMax, TimelineMax } from 'gsap/all';

const torusIronItem = document
  .querySelector('.header_picture__torus-iron');

function torusIronMoving() {
  TweenMax.set(torusIronItem, {
    transform: 'translateX(40%)',
    right: '40%',
    top: '20%',
  });

  const animationSpeed = 5;

  // eslint-disable-next-line no-unused-vars
  const tween = new TimelineMax()
    .to(torusIronItem, animationSpeed, {
      top: '+=3%',
    })
    .to(torusIronItem, animationSpeed, {
      top: '-=3%',
    });
}

setInterval(torusIronMoving, 10000);

export default torusIronMoving;
