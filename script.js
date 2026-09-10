// GLITCH EFFECT
const glitchText = document.querySelector('#hero h1 span');

if (glitchText) {
  function glitch() {
    glitchText.classList.add('glitching');
    setTimeout(() => {
      glitchText.classList.remove('glitching');
    }, 2000);
  }

  glitch();
  setInterval(glitch, 8000);
}

// CAROUSEL
const cards = document.querySelectorAll('.project-card');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let current = 0;

if (prevBtn && nextBtn) {
  function goTo(index, direction) {
    cards[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (index + cards.length) % cards.length;
    cards[current].classList.add('active');
    dots[current].classList.add('active');

    cards[current].classList.remove('slide-in-right', 'slide-in-left');
    void cards[current].offsetWidth;
    if (direction === 'next') {
      cards[current].classList.add('slide-in-right');
    } else {
      cards[current].classList.add('slide-in-left');
    }
  }

  prevBtn.addEventListener('click', () => goTo(current - 1, 'prev'));
  nextBtn.addEventListener('click', () => goTo(current + 1, 'next'));

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => goTo(i, 'next'));
  });
}

// SNAP IN ANIMATIONS
const hero = document.querySelector('#hero p:first-child');
const heroTitle = document.querySelector('#hero h1');
const heroPic = document.querySelector('.profile-pic');
const heroSub = document.querySelector('#hero p:last-of-type');

if (hero) {
  hero.classList.add('snap-left');
  heroTitle.style.animationDelay = '0.1s';
  heroTitle.classList.add('snap-left');
  heroPic.style.animationDelay = '0.2s';
  heroPic.classList.add('snap-up');
  heroSub.style.animationDelay = '0.3s';
  heroSub.classList.add('snap-left');
}

const aboutCards = document.querySelectorAll('.about-card');
aboutCards.forEach((card, i) => {
  card.style.animationDelay = `${i * 0.1}s`;
  card.classList.add('snap-up');
});

const projectCard = document.querySelector('.project-card.active');
if (projectCard) {
  projectCard.classList.add('snap-right');
}

const skillPills = document.querySelectorAll('.skill-pill');
skillPills.forEach((pill, i) => {
  pill.style.animationDelay = `${i * 0.05}s`;
  pill.classList.add('snap-up');
});