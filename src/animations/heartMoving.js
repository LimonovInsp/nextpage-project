
import { TweenMax, TimelineMax } from 'gsap/all';

function heartMoving() {
  const heartItem = document
    .querySelector('.header_picture__heart');

  TweenMax.set(heartItem, {
    transform: 'translateX(45%)',
    right: '45%',
    bottom: '30%',
  });

  const animationSpeed = 5;

  function infiniteMoving() {
    new TimelineMax()
      .to(heartItem, animationSpeed, {
        bottom: '+=2%',
      })
      .to(heartItem, animationSpeed, {
        bottom: '-=2%',
      });
  }

  infiniteMoving();

  setInterval(infiniteMoving, 10000);
}

export default heartMoving;
