
import { TweenMax, TimelineMax } from 'gsap/all';

const youtubeItem = document.querySelector('.header_picture__youtube');

function youtubeMoving() {
  TweenMax.set(youtubeItem, {
    transform: 'translateX(25%)',
    right: '25%',
    top: '5%',
  });

  const animationSpeed = 3;

  // eslint-disable-next-line no-unused-vars
  const tween = new TimelineMax()
    .to(youtubeItem, animationSpeed, {
      top: '+=10%',
    })
    .to(youtubeItem, animationSpeed, {
      top: '+=2%',
      right: '-=2%',
    })
    .to(youtubeItem, animationSpeed, {
      top: '-=2%',
      right: '+=2%',
    })
    .to(youtubeItem, animationSpeed, {
      top: '-=10%',
    });
}

setInterval(youtubeMoving, 12000);

export default youtubeMoving;
