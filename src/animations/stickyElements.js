import ScrollMagic from 'scrollmagic';

function stickyElements() {
  const clientsPresentation = document.querySelector('.clients_presentation');
  const clientsTop = document.querySelector('.clients_top');
  const clientsSection = document.querySelector('.clients');
  // eslint-disable-next-line max-len
  const clientsFigureTorus = document.querySelector('.clients_figures_item-torus');
  // eslint-disable-next-line max-len
  const clientsFigureYout = document.querySelector('.clients_figures_item-yout');
  // eslint-disable-next-line max-len
  const clientsFigureSphere = document.querySelector('.clients_figures_item-sphere');
  const clientsList = [
    clientsPresentation,
    clientsTop,
    clientsFigureTorus,
    clientsFigureYout,
    clientsFigureSphere,
  ];

  const controller = new ScrollMagic.Controller();

  for (let i = 0; i < clientsList.length; i++) {
    new ScrollMagic.Scene({
      triggerElement: clientsSection,
      triggerHook: 0,
      duration: 0,
    })
      .setPin(clientsList[i])
      .addIndicators({ name: '1 (duration: 0)' })
      .addTo(controller);
  }
}

export default stickyElements;
