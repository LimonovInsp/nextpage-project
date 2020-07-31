import wipeEffect from './animations/wipeEffect';
import loaderEffect from './animations/loaderEffect';
import headphoneMoving from './animations/headphoneMoving';
import cameraMoving from './animations/cameraMoving';
import claquetaMoving from './animations/claquetaMoving';
import youtubeMoving from './animations/youtubeMoving';
import torusMoving from './animations/torusMoving';
import noteMoving from './animations/noteMoving';
import letteringLeftMoving from './animations/letteringLeftMoving';
import letteringRightMoving from './animations/letteringRightMoving';
import heartMoving from './animations/heartMoving';
import torusIronMoving from './animations/torusIronMoving';
import scoreIncrease from './animations/scoreIncrease';
import headerHeadlineMoving from './animations/headerHeadlineMoving';
import glowCursor from './animations/glowCursor';
import stickyElements from './animations/stickyElements';
import clientsHoverEffect from './animations/clientsHoverEffect';
import clientsHoverLinkEffect from './animations/clientsHoverLinkEffect';
import servicesRectangleHover from './animations/servicesRectangleHover';
import contactsHoverEffect from './animations/contactsHoverEffect';
import teamSlider from './animations/teamSlider';
import teamHoverEffect from './animations/teamHoverEffect';
import teamHoverMoving from './animations/teamHoverMoving';
import getResolution from './animations/getResolution';

if (getResolution() > 1024) {
  headphoneMoving();
  cameraMoving();
  claquetaMoving();
  youtubeMoving();
  torusMoving();
  noteMoving();
  letteringLeftMoving();
  letteringRightMoving();
  heartMoving();
  torusIronMoving();
  stickyElements();
  glowCursor();
  headerHeadlineMoving();
  loaderEffect();
  wipeEffect();
}

scoreIncrease();
clientsHoverEffect();
clientsHoverLinkEffect();
servicesRectangleHover();
contactsHoverEffect();
teamSlider();
teamHoverEffect();
teamHoverMoving();
