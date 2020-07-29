
import { TweenMax, TimelineMax } from 'gsap/all';

const heartItem = document
  .querySelector('.header_picture__heart');

function heartMoving() {
  TweenMax.set(heartItem, {
    transform: 'translateX(45%)',
    right: '45%',
    bottom: '30%',
  });

  const animationSpeed = 5;

  // eslint-disable-next-line no-unused-vars
  const tween = new TimelineMax()
    .to(heartItem, animationSpeed, {
      bottom: '+=2%',
    })
    .to(heartItem, animationSpeed, {
      bottom: '-=2%',
    });
}

setInterval(heartMoving, 10000);

export default heartMoving;
