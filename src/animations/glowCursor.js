
function glowCursor() {
  let x, y, coordinates, backgroundWebKit, backgroundMozilla;
  const lightColor = 'rgba(255,255,255,0.75)';
  // eslint-disable-next-line no-undef
  const originalBackgroundHeader = getComputedStyle(document
    .querySelector('.header')).background;
    // eslint-disable-next-line no-undef
  const originalBackgroundServices = getComputedStyle(document
    .querySelector('.services')).background;

  const header = document.querySelector('.header');
  const services = document.querySelector('.services');

  const backgroundList = [
    [services, originalBackgroundServices],
    [header, originalBackgroundHeader],
  ];

  backgroundList.forEach(backgroundItem => {
    backgroundItem[0]
      .addEventListener('mousemove', function(event) {
        x = event.pageX - this.offsetLeft;
        y = event.pageY - this.offsetTop;
        coordinates = x + ' ' + y;
        // eslint-disable-next-line max-len
        backgroundWebKit = '-webkit-gradient(radial, ' + coordinates + ', 0, ' + coordinates + ', 100, from(rgba(255,255,255,0.5)), to(rgba(255,255,255,0.0))), ' + backgroundItem[1];
        // eslint-disable-next-line max-len
        backgroundMozilla = '-moz-radial-gradient(' + x + 'px ' + y + 'px 45deg, circle, ' + lightColor + ' 0%, ' + backgroundItem[1];
        this.style.background = backgroundWebKit;
        this.style.background = backgroundMozilla;

        this.addEventListener('mouseleave', function() {
          this.style.background = backgroundItem[1];
        });
      });
  });
}

export default glowCursor;
