const page = document.querySelector('body');
const fullPath = window.location.pathname;
const filename = fullPath.replace(/^.*[\\\/]/, '');
let width = window.innerWidth;
let DeviceType = getDeviceType();

page.style.background = `url(${getPageBgImg(
  filename
)}) no-repeat center center fixed`;
page.style.backgroundSize = 'cover';

window.addEventListener('resize', () => {
  width = window.innerWidth;
  DeviceType = getDeviceType();
  page.style.background = `url(${getPageBgImg(
    filename
  )}) no-repeat center center fixed`;
  page.style.backgroundSize = 'cover';
});

function getPageBgImg(filename) {
  switch (filename) {
    case 'index.html':
      return `./assets/home/background-home-${DeviceType}.jpg`;
      break;
    case 'destinations.html':
      return `./assets/destination/background-destination-${DeviceType}.jpg`;
      break;
    case 'crews.html':
      return `./assets/crew/background-crew-${DeviceType}.jpg`;
      break;
    case 'technologies.html':
      return `./assets/technology/background-technology-${DeviceType}.jpg`;
      break;
    default:
      return `./assets/home/background-home-${DeviceType}.jpg`;
      break;
  }
}

function getDeviceType() {
  if (width < 1440) {
    if (width < 768) {
      return 'mobile';
    }
    return 'tablet';
  }

  return 'desktop';
}
