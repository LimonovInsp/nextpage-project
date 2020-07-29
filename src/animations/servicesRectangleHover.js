import gearRed from '../images/services-gear-red.png';
import gearDark from '../images/services-gear-dark.png';
import starDark from '../images/services-star-dark.png';
import graphikDark from '../images/services-graphik-dark.png';
import lupaDark from '../images/services-lupa-dark.png';
import claquetaDark from '../images/services-claqueta-dark.png';
import headphoneDark from '../images/services-headphone-dark.png';

function servicesRectangleHover() {
  const servicesItemList = document.querySelectorAll('.services_item');
  const srcList = new Map([
    [0, [gearDark, gearRed]],
    [1, [starDark, gearRed]],
    [2, [graphikDark, gearRed]],
    [3, [lupaDark, gearRed]],
    [4, [claquetaDark, gearRed]],
    [5, [headphoneDark, gearRed]],
  ]);

  servicesItemList.forEach((servicesItem, index) => {
    servicesItem.addEventListener('click', (event) => {
      event.currentTarget.querySelector('.services_image')
        .src = srcList.get(index)[1];
      event.currentTarget.classList.add('services_item-active');

      [...servicesItemList].map((generalItem, generalIndex) => {
        if (generalIndex !== index) {
          generalItem.classList.remove('services_item-active');

          generalItem.querySelector('.services_image')
            .src = srcList.get(generalIndex)[0];
        }
      });
    });
  });
}

export default servicesRectangleHover;
