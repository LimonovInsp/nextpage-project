import gearRed from '../images/services-gear-red.png';
import gearDark from '../images/services-gear-dark.png';
import starRed from '../images/services-star-red.png';
import starDark from '../images/services-star-dark.png';
import graphikRed from '../images/services-graphik-red.png';
import graphikDark from '../images/services-graphik-dark.png';
import lupaRed from '../images/services-lupa-red.png';
import lupaDark from '../images/services-lupa-dark.png';
import claquetaRed from '../images/services-claqueta-red.png';
import claquetaDark from '../images/services-claqueta-dark.png';
import headphoneRed from '../images/services-headphone-red.png';
import headphoneDark from '../images/services-headphone-dark.png';
import gearDarkBig from '../images/services-gear-dark-big.png';
import starDarkBig from '../images/services-star-dark-big.png';
import graphikDarkBig from '../images/services-graphik-dark-big.png';
import lupaDarkBig from '../images/services-lupa-dark-big.png';
import claquetaDarkBig from '../images/services-claqueta-dark-big.png';
import headphoneDarkBig from '../images/services-headphone-dark-big.png';

function servicesRectangleHover() {
  const servicesItemList = document.querySelectorAll('.services_item');
  // eslint-disable-next-line max-len
  const servicesDemonstrationImage = document.querySelector('.services_image-big');
  const servicesNotation = document.querySelector('.services_notation');

  const servicesContent = document.querySelector('.services_content');

  const newline = '\r\n';

  servicesNotation.textContent = `Channel Operation${newline} and Management`;

  const srcList = new Map([
    [
      0,
      [
        gearDark,
        gearRed,
        gearDarkBig,
        `Channel Operation${newline} and Management`,
      ],
    ],
    [
      1,
      [
        starDark,
        starRed,
        starDarkBig,
        `Creative Services for${newline} Infuencers`,
      ],
    ],
    [
      2,
      [
        graphikDark,
        graphikRed,
        graphikDarkBig,
        `Graphic Design &${newline} Photography`,
      ],
    ],
    [
      3,
      [
        lupaDark,
        lupaRed,
        lupaDarkBig,
        `Lyric Videos &${newline} Animation`,
      ],
    ],
    [
      4,
      [
        claquetaDark,
        claquetaRed,
        claquetaDarkBig,
        `Business${newline} Development`,
      ],
    ],
    [
      5,
      [
        headphoneDark,
        headphoneRed,
        headphoneDarkBig,
        `Brand${newline}Campaigns`,
      ],
    ],
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

      servicesDemonstrationImage.src = srcList.get(index)[2];
      servicesNotation.textContent = srcList.get(index)[3];

      servicesDemonstrationImage.classList
        .remove('services_image-big-animation');
      servicesContent.classList.remove('services_content-animation');
      servicesDemonstrationImage.style.display = 'none';
      servicesContent.style.display = 'none';

      // void servicesDemonstrationImage.offsetWidth;

      setTimeout(() => {
        servicesDemonstrationImage.classList
          .add('services_image-big-animation');
        servicesDemonstrationImage.style.display = 'block';
      }, 20);

      setTimeout(() => {
        servicesContent.classList.add('services_content-animation');
        servicesContent.style.display = 'block';
      }, 400);
    });
  });
}

export default servicesRectangleHover;
