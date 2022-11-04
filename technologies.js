const techImg = document.querySelector('.techPreviewImg');
const techName = document.querySelector('.techName');
const techDescription = document.querySelector('.techDescription');
const techsNav = document.querySelector('.techsNav');
let currentData = 'Launch vehicle';

fetchDestinations();
fetchDestinationsMenu();

function fetchDestinationsMenu() {
  fetch('./data.json')
    .then((response) => response.json())
    .then((json) => json['technology'])
    .then((data) => {
      generateCrewNavItems(data);
    });
}

function fetchDestinations() {
  fetch('./data.json')
    .then((response) => response.json())
    .then((json) => json['technology'])
    .then((data) => {
      fillDestValues(data, currentData);
      anime({
        targets: '.techPreviewImg',
        opacity: [0, 1],
        duration: 600,
        easing: 'easeInOutSine',
      });
    });
}

function fillDestValues(data, currentData) {
  const index = indexOfCurrentData(data, currentData);
  techImg.style.backgroundImage =
    window.innerWidth >= 1440
      ? `url(${data[index].images.portrait})`
      : `url(${data[index].images.landscape})`;
  techName.innerHTML = data[index].name;
  techDescription.innerHTML = data[index].description;
}

function generateCrewNavItems(data) {
  for (let i = 0; i < data.length; i++) {
    const navitem = document.createElement('div');
    navitem.classList.add('techsNavItem');
    navitem.innerHTML = i + 1;
    if (i === 0) {
      navitem.classList.add('active');
    }
    navitem.addEventListener('click', (e) => {
      currentData = data[i].name;
      if (!e.target.classList.contains('active')) {
        const destMenuItems =
          document.querySelectorAll('.techsNavItem');
        destMenuItems.forEach((i) => i.classList.remove('active'));
        e.target.classList.add('active');
      }
      fetchDestinations();
    });
    techsNav.appendChild(navitem);
  }
}

function indexOfCurrentData(data, x) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].name === x) {
      return i;
    }
  }
}
