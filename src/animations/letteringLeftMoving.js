
import { TweenMax, TimelineMax } from 'gsap/all';

const letteringLeftItem = document
  .querySelector('.header_picture__lettering-left');

function letteringLeftMoving() {
  TweenMax.set(letteringLeftItem, {
    transform: 'translateX(-10%)',
    left: '10%',
    top: '20%',
  });

  const animationSpeed = 3;

  // eslint-disable-next-line no-unused-vars
  const tween = new TimelineMax()
    .to(letteringLeftItem, animationSpeed, {
      top: '-=3%',
    })
    .to(letteringLeftItem, animationSpeed, {
      top: '+=5%',
      left: '-=5%',
    })
    .to(letteringLeftItem, animationSpeed, {
      top: '-=2%',
      left: '+=5%',
    });
}

setInterval(letteringLeftMoving, 9000);

export default letteringLeftMoving;
