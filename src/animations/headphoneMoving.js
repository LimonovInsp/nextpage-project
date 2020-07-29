
import { TweenMax, TimelineMax } from 'gsap/all';

const headphoneItem = document.querySelector('.header_picture__headphone');

function headphoneMoving() {
  TweenMax.set(headphoneItem, {
    transform: 'translateX(-25%)',
    left: '25%',
    top: '15%',
  });

  const animationSpeed = 3;

  // eslint-disable-next-line no-unused-vars
  const tween = new TimelineMax()
    .to(headphoneItem, animationSpeed, {
      top: '+=2%',
      left: '-=2%',
    })
    .to(headphoneItem, animationSpeed, {
      top: '+=2%',
      left: '-=2%',
    })
    .to(headphoneItem, animationSpeed, {
      top: '-=2%',
      left: '+=2%',
    })
    .to(headphoneItem, animationSpeed, {
      top: '-=2%',
      left: '+=2%',
    });
}

setInterval(headphoneMoving, 12000);

export default headphoneMoving;
