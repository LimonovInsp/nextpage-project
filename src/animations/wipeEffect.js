import ScrollMagic from 'scrollmagic';

function wipeEffect() {
  const controller = new ScrollMagic.Controller();

  const team = document.querySelectorAll('team');
  const header = document.querySelectorAll('header');
  const clients = document.querySelectorAll('.clients');
  const services = document.querySelectorAll('.services');

  const slides = [team, header, services];

  new ScrollMagic.Scene({
    triggerElement: services,
    triggerHook: 1,
    duration: '0',
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
