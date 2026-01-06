const boites = document.querySelectorAll('.box');

function afficher() {
  boites.forEach(function(boite) {
    const position = boite.getBoundingClientRect();

    // Si la boîte est à moins de 100px du bas de l’écran
    if (position.top < window.innerHeight - 100) {
      boite.classList.add('visible');
    }
  });
}
//زمانی که صفحه را اسکرول می‌کنید یا زمانی که صفحه بارگذاری می‌شود
window.addEventListener('scroll', afficher);
window.addEventListener('load', afficher);