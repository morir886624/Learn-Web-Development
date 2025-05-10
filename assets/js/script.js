const toggleBtn = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

toggleBtn.addEventListener('click', () => {
    
    navMenu.classList.toggle('active');
});




function toggleMenu() {
    const nav = document.getElementById('nav-menu');
    const icon = document.getElementById('menu-icon');
  
    nav.classList.toggle('active');
  
    if (nav.classList.contains('active')) {
      icon.textContent = 'close'; 
    } else {
      icon.textContent = 'menu'; 
    }
  }