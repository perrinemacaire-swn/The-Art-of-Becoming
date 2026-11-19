// Navigation commune à toutes les pages
const menuToggle = document.querySelector('.menu-toggle');
const menuBackdrop = document.querySelector('.menu-backdrop');

function setMenu(open) {
  document.body.classList.toggle('menu-open', open);
  if (menuToggle) {
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  }
}

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    setMenu(!document.body.classList.contains('menu-open'));
  });
}
if (menuBackdrop) {
  menuBackdrop.addEventListener('click', () => setMenu(false));
}
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
});
document.querySelectorAll('.menu-links a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

// Lever de rideau : affiché uniquement lors de la première arrivée sur l'accueil
const curtain = document.getElementById('curtain');
const actionButton = document.getElementById('actionButton');
if (curtain && actionButton) {
  const alreadyOpened = sessionStorage.getItem('portfolioCurtainOpened');
  if (alreadyOpened === 'yes') {
    curtain.classList.add('finished');
  } else {
    actionButton.addEventListener('click', () => {
      curtain.classList.add('open');
      sessionStorage.setItem('portfolioCurtainOpened', 'yes');
      window.setTimeout(() => curtain.classList.add('finished'), 1750);
    });
  }
}

// Le PDF de lettre sera relié dès qu'il sera fourni.
const letterButton = document.getElementById('letter-download');
if (letterButton) {
  letterButton.addEventListener('click', () => {
    alert('La lettre de motivation en PDF sera ajoutée prochainement.');
  });
}
