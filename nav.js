const menuOpenIcon = './assets/shared/icon-hamburger.svg';
const menuCloseIcon = './assets/shared/icon-close.svg';
const hamburgerMenu = document.getElementById('menuIcon');
const navMenu = document.getElementById('navigation');
const menuItems = document.querySelectorAll('.menu-item');
let menuIsOpen = false;

hamburgerMenu.src = menuOpenIcon;

hamburgerMenu.addEventListener('click', () => {
  menuIsOpen = toggle(menuIsOpen);
  if (navMenu.classList.contains('open')) {
    navMenu.classList.remove('open');
  } else {
    navMenu.classList.add('open');
    menuItems.forEach((i) => {
      anime({
        targets: i,
        opacity: [0, 1],
        translateX: [100, 0],
        duration: 400,
        delay: function () {
          return anime.random(0, 400);
        },
        easing: 'easeInQuad',
      });
    });
  }
  hamburgerMenu.src = menuIsOpen ? menuCloseIcon : menuOpenIcon;
});

const toggle = (x) => !x;
