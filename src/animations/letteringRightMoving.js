
import { TweenMax, TimelineMax } from 'gsap/all';

function letteringRightMoving() {
  const letteringRightItem = document
    .querySelector('.header_picture__lettering-right');

  TweenMax.set(letteringRightItem, {
    transform: 'translateX(20%)',
    right: '5%',
    top: '40%',
  });

  const animationSpeed = 3;

  function infiniteMoving() {
    new TimelineMax()
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

  infiniteMoving();

  setInterval(infiniteMoving, 9000);
}

export default letteringRightMoving;
