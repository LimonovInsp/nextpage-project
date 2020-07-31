
import { TweenMax, TimelineMax } from 'gsap/all';

const youtubeItem = document.querySelector('.header_picture__youtube');

function youtubeMoving() {
  TweenMax.set(youtubeItem, {
    transform: 'translateX(25%)',
    right: '25%',
    top: '-20%',
  });

  const animationSpeed = 2;

  function infiniteMoving() {
    new TimelineMax()
      .to(youtubeItem, animationSpeed, {
        top: '-=15%',
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
        top: '+=15%',
      });
  }

  infiniteMoving();

  setInterval(infiniteMoving, 8000);
}

export default youtubeMoving;
