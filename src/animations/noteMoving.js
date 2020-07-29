
import { TweenMax, TimelineMax } from 'gsap/all';

const noteItem = document.querySelector('.header_picture__note');

function noteMoving() {
  TweenMax.set(noteItem, {
    transform: 'translateX(-35%)',
    left: '35%',
    bottom: '10%',
  });

  const animationSpeed = 3;

  // eslint-disable-next-line no-unused-vars
  const tween = new TimelineMax()
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

setInterval(noteMoving, 9000);

export default noteMoving;
