
import { TweenMax, TimelineMax } from 'gsap/all';

const letteringRightItem = document
  .querySelector('.header_picture__lettering-right');

function letteringRightMoving() {
  TweenMax.set(letteringRightItem, {
    transform: 'translateX(20%)',
    right: '10%',
    top: '40%',
  });

  const animationSpeed = 3;

  // eslint-disable-next-line no-unused-vars
  const tween = new TimelineMax()
    .to(letteringRightItem, animationSpeed, {
      top: '-=2%',
    })
    .to(letteringRightItem, animationSpeed, {
      top: '+=3%',
      right: '-=2%',
    })
    .to(letteringRightItem, animationSpeed, {
      top: '-=1%',
      left: '-=2%',
    });
}

setInterval(letteringRightMoving, 9000);

export default letteringRightMoving;
