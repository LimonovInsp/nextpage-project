import { TimelineMax } from 'gsap/all';

function teamHoverMoving() {
  const teamItemList = document.querySelectorAll('.team_item');
  const sphereItem = document.querySelector('.team_figures_item-sphere');
  const noteItem = document.querySelector('.team_figures_item-note');
  const torusItem = document.querySelector('.team_figures_item-torus');

  const generalTween = new TimelineMax();

  function sphereItemAnimate() {
    const tweenFirst = new TimelineMax()
      .to(sphereItem, 2, {
        bottom: '+=15%',
        left: '-=1%',
      });

    return tweenFirst;
  }

  function noteItemAnimate() {
    const tweenSecond = new TimelineMax()
      .to(noteItem, 2, {
        top: '+=3%',
        left: '-=15%',
      });

    return tweenSecond;
  }

  function torusItemAnimate() {
    const tweenThird = new TimelineMax()
      .to(torusItem, 2, {
        bottom: '-=15%',
        right: '-=2%',
      });

    return tweenThird;
  }

  let counter = 0;

  teamItemList.forEach(teamItem => {
    teamItem.addEventListener('mouseover', (event) => {
      function moveOnce() {
        if (counter === 0) {
          generalTween
            .add(sphereItemAnimate())
            .add(noteItemAnimate())
            .add(torusItemAnimate());

          counter++;
        }
      }
      setTimeout(moveOnce, 500);
    });
  });
}

export default teamHoverMoving;
