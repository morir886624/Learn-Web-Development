
const toggleBtn = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

toggleBtn.addEventListener('click', () => {
    // Toggle la classe "active"
    navMenu.classList.toggle('active');
});




function toggleMenu() {
    const nav = document.getElementById('nav-menu');
    const icon = document.getElementById('menu-icon');
  
    nav.classList.toggle('active');
  
    if (nav.classList.contains('active')) {
      icon.textContent = 'close'; // Affiche le "X"
    } else {
      icon.textContent = 'menu'; // Réaffiche le burger
    }
  }