const crewtImg = document.querySelector('.crewPreviewImg');
const crewName = document.querySelector('.crewName');
const crewRole = document.querySelector('.crewRole');
const crewBio = document.querySelector('.crewBio');
const crewNav = document.querySelector('.crewsNav');
let currentData = 'Douglas Hurley';

fetchDestinations();
fetchDestinationsMenu();

function fetchDestinationsMenu() {
  fetch('./data.json')
    .then((response) => response.json())
    .then((json) => json['crew'])
    .then((data) => {
      generateCrewNavItems(data);
    });
}

function fetchDestinations() {
  fetch('./data.json')
    .then((response) => response.json())
    .then((json) => json['crew'])
    .then((data) => {
      fillDestValues(data, currentData);
      anime({
        targets: '.crewPreviewImg',
        opacity: [0, 1],
        duration: 600,
        easing: 'easeInOutSine',
      });
    });
}

function fillDestValues(data, currentData) {
  const index = indexOfCurrentData(data, currentData);
  crewtImg.src = data[index].images.webp;
  crewName.innerHTML = data[index].name;
  crewBio.innerHTML = data[index].bio;
  crewRole.innerHTML = data[index].role;
}

function generateCrewNavItems(data) {
  for (let i = 0; i < data.length; i++) {
    const navitem = document.createElement('div');
    navitem.classList.add('crewNavItem');
    if (i === 0) {
      navitem.classList.add('active');
    }
    navitem.addEventListener('click', (e) => {
      currentData = data[i].name;
      if (!e.target.classList.contains('active')) {
        const destMenuItems =
          document.querySelectorAll('.crewNavItem');
        destMenuItems.forEach((i) => i.classList.remove('active'));
        e.target.classList.add('active');
      }
      fetchDestinations();
    });
    crewNav.appendChild(navitem);
  }
  anime({
    targets: '.crewNavItem',
    scale: [0, 1],
    duration: 400,
    delay: anime.stagger(200),
    easing: 'easeInQuad',
  });
}

function indexOfCurrentData(data, x) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].name === x) {
      return i;
    }
  }
}
