
import { TweenMax, TimelineMax } from 'gsap/all';

function claquetaMoving() {
  const claquetaItem = document.querySelector('.header_picture__claqueta');

  TweenMax.set(claquetaItem, {
    right: '20%',
    top: '30%',
  });

  const animationSpeed = 3;

  function infiniteMoving() {
    new TimelineMax()
      .to(claquetaItem, animationSpeed, {
        top: '+=10%',
        right: '-=1%',
      })
      .to(claquetaItem, animationSpeed, {
        top: '+=10%',
        right: '-=1%',
      })
      .to(claquetaItem, animationSpeed, {
        top: '-=10%',
        right: '-=1%',
      })
      .to(claquetaItem, animationSpeed, {
        top: '-=10%',
        right: '-=1%',
      })
      .to(claquetaItem, animationSpeed, {
        top: '+=10%',
        right: '+=1%',
      })
      .to(claquetaItem, animationSpeed, {
        top: '-=10%',
        right: '+=1%',
      });
  }

  infiniteMoving();

  setInterval(infiniteMoving, 18000);
}

export default claquetaMoving;
