
import { TweenMax, TimelineMax } from 'gsap/all';

function noteMoving() {
  const noteItem = document.querySelector('.header_picture__note');

  TweenMax.set(noteItem, {
    transform: 'translateX(-35%)',
    left: '35%',
    bottom: '10%',
  });

  const animationSpeed = 3;

  function infiniteMoving() {
    new TimelineMax()
      .to(noteItem, animationSpeed, {
        bottom: '+=3%',
        left: '-=2%',
      })
      .to(noteItem, animationSpeed, {
        bottom: '-=5%',
      })
      .to(noteItem, animationSpeed, {
        bottom: '+=2%',
        left: '+=2%',
      });
  }

  infiniteMoving();

  setInterval(infiniteMoving, 9000);
}

export default noteMoving;
