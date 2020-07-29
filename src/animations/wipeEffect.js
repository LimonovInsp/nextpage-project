import ScrollMagic from 'scrollmagic';

function wipeEffect() {
  const controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave',
      duration: '0',
    },
  });

  const slides = document.querySelectorAll('.panel');

  for (let i = 0; i < slides.length; i++) {
    new ScrollMagic.Scene({
      triggerElement: slides[i],
    })
      .setPin(slides[i], { pushFollowers: false })
      .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
  }
};

export default wipeEffect;
