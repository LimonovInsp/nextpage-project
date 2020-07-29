
import { TweenMax, TimelineMax } from 'gsap/all';

const claquetaItem = document.querySelector('.header_picture__claqueta');

function claquetaMoving() {
  TweenMax.set(claquetaItem, {
    transform: 'translateX(25%)',
    right: '25%',
    top: '45%',
  });

  const animationSpeed = 3;

  // eslint-disable-next-line no-unused-vars
  const tween = new TimelineMax()
    .to(claquetaItem, animationSpeed, {
      top: '+=2%',
      right: '-=1%',
    })
    .to(claquetaItem, animationSpeed, {
      top: '+=1%',
      right: '-=1%',
    })
    .to(claquetaItem, animationSpeed, {
      top: '-=2%',
      right: '-=1%',
    })
    .to(claquetaItem, animationSpeed, {
      top: '-=1%',
      right: '-=1%',
    })
    .to(claquetaItem, animationSpeed, {
      top: '+=2%',
      right: '+=1%',
    })
    .to(claquetaItem, animationSpeed, {
      top: '+=1%',
      right: '+=1%',
    })
    .to(claquetaItem, animationSpeed, {
      top: '-=2%',
      right: '+=1%',
    })
    .to(claquetaItem, animationSpeed, {
      top: '-=1%',
      right: '+=1%',
    });
}

setInterval(claquetaMoving, 24000);

export default claquetaMoving;
