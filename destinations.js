const destImg = document.querySelector('.destinationPreviewImg');
const destName = document.querySelector('.destinationName');
const destDesc = document.querySelector('.destinationDescription');
const destAvg = document.querySelector('.destinationAverage');
const destTime = document.querySelector('.destinationTime');
const destNav = document.querySelector('.destinationsNav');
let currentData = 'Moon';

fetchDestinations();
fetchDestinationsMenu();

function fetchDestinationsMenu() {
  fetch('./data.json')
    .then((response) => response.json())
    .then((json) => json['destinations'])
    .then((data) => {
      generateDestNavItems(data);
    });
}

function fetchDestinations() {
  fetch('./data.json')
    .then((response) => response.json())
    .then((json) => json['destinations'])
    .then((data) => {
      fillDestValues(data, currentData);
      anime({
        targets: '.destinationPreviewImg',
        opacity: [0, 1],
        scale: [0.5, 1],
        duration: 600,
        easing: 'easeInOutSine',
      });
    });
}

function fillDestValues(data, currentData) {
  const index = indexOfCurrentData(data, currentData);
  destImg.src = data[index].images.png;
  destName.innerHTML = data[index].name;
  destDesc.innerHTML = data[index].description;
  destAvg.innerHTML = data[index].distance;
  destTime.innerHTML = data[index].travel;
}

function generateDestNavItems(data) {
  for (let i = 0; i < data.length; i++) {
    const navitem = document.createElement('p');
    navitem.innerHTML = data[i].name;
    navitem.classList.add('destNavItem');
    if (i === 0) {
      navitem.classList.add('active');
    }
    navitem.addEventListener('click', (e) => {
      currentData = data[i].name;
      if (!e.target.classList.contains('active')) {
        const destMenuItems =
          document.querySelectorAll('.destNavItem');
        destMenuItems.forEach((i) => i.classList.remove('active'));
        e.target.classList.add('active');
      }
      fetchDestinations();
    });
    destNav.appendChild(navitem);
  }
  document.querySelectorAll('.destNavItem').forEach((i) => {
    anime({
      targets: i,
      opacity: [0, 1],
      translateY: [-20, 0],
      duration: 400,
      delay: function () {
        return anime.random(400, 800);
      },
      easing: 'easeInQuad',
    });
  });
}

function indexOfCurrentData(data, x) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].name === x) {
      return i;
    }
  }
}
