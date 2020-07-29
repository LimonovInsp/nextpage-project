import ScrollMagic from 'scrollmagic';

function wipeEffect() {
  const controller = new ScrollMagic.Controller();

  const slides = document.querySelectorAll('.panel');
  const clients = document.querySelectorAll('.clients');
  const services = document.querySelectorAll('.services');

  // eslint-disable-next-line no-unused-vars
  const pinGreenScene = new ScrollMagic.Scene({
    triggerElement: services,
    triggerHook: 1,
  })
    .setPin(clients, { pushFollowers: false })
    .addTo(controller);

  for (let i = 0; i < slides.length; i++) {
    new ScrollMagic.Scene({
      triggerElement: slides[i],
      triggerHook: 'onLeave',
      duration: '0',
    })
      .setPin(slides[i], { pushFollowers: false })
      .addTo(controller);
  }
};

export default wipeEffect;
