
import { TweenMax, TimelineMax } from 'gsap/all';

const torusItem = document.querySelector('.header_picture__torus');

function torusMoving() {
  TweenMax.set(torusItem, {
    transform: 'translateX(20%)',
    right: '20%',
    top: '65%',
  });

  const animationSpeed = 3;

  // eslint-disable-next-line no-unused-vars
  const tween = new TimelineMax()
    .to(torusItem, animationSpeed, {
      right: '-=5%',
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
      right: '+=5%',
    });
}

setInterval(torusMoving, 12000);

export default torusMoving;
