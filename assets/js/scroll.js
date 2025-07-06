// On sélectionne toutes les boîtes à animer
const boites = document.querySelectorAll('.box');

// Fonction pour afficher la boîte quand elle arrive à l'écran
function afficherQuandVisible() {
  boites.forEach(function(boite) {
    const position = boite.getBoundingClientRect();

    // Si la boîte est à moins de 100px du bas de l’écran
    if (position.top < window.innerHeight - 100) {
      boite.classList.add('visible');
    }
  });
}

// Quand on fait défiler la page OU que la page se charge
window.addEventListener('scroll', afficherQuandVisible);
window.addEventListener('load', afficherQuandVisible);