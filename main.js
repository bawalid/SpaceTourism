const exploreFrontCircle = document.querySelector('.exploreF');
const exploreBackCircle = document.querySelector('.exploreB');

exploreFrontCircle.addEventListener('mouseenter', () => {
  enterButton(exploreBackCircle);
});

exploreFrontCircle.addEventListener('mouseleave', function (e) {
  leaveButton(exploreBackCircle);
});

function animateButton(el, opacity, scale, duration, elasticity) {
  anime.remove(el);
  anime({
    targets: el,
    opacity: opacity,
    scale: scale,
    duration: duration,
    elasticity: elasticity,
  });
}

function enterButton(el) {
  animateButton(el, 0.2, 1.4, 800, 400);
}

function leaveButton(el) {
  animateButton(el, 0, 1, 600, 300);
}
