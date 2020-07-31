
import { TweenMax, TimelineMax } from 'gsap/all';

function letteringLeftMoving() {
  const letteringLeftItem = document
    .querySelector('.header_picture__lettering-left');

  TweenMax.set(letteringLeftItem, {
    transform: 'translateX(-10%)',
    left: '5%',
    top: '20%',
  });

  const animationSpeed = 3;

  function infiniteMoving() {
    new TimelineMax()
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

  infiniteMoving();

  setInterval(infiniteMoving, 9000);
}

export default letteringLeftMoving;
