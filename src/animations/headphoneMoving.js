
import { TweenMax, TimelineMax } from 'gsap/all';

function headphoneMoving() {
  const headphoneItem = document.querySelector('.header_picture__headphone');

  TweenMax.set(headphoneItem, {
    left: '18%',
    top: '-20%',
  });

  const animationSpeed = 3;

  function infiniteMoving() {
    new TimelineMax()
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

  infiniteMoving();

  setInterval(infiniteMoving, 12000);
}

export default headphoneMoving;
