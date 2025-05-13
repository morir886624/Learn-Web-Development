let icon = document.getElementById("icon");
let logo = document.getElementById("logo");
let logoMobile = document.getElementById("logo-mobile");
let logoAbout = document.getElementById("logo-about");



// Appliquer le thème sauvegardé
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme");
  icon.src = "assets/images/sun.png";
  logo.src = "assets/images/logo_mode_nuit.svg";
  logoMobile.src = "assets/images/logo_mode_nuit.svg";
  logoAbout.src = "assets/images/logo_mode_nuit.svg";
}

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
      icon.src = "assets/images/sun.png";
      logo.src = "assets/images/logo_mode_nuit.svg";
      logoMobile.src = "assets/images/logo_mode_nuit.svg";
      logoAbout.src = "assets/images/logo_mode_nuit.svg";
    localStorage.setItem("theme", "dark");

  } else {
    icon.src = "assets/images/moon.png";
    logo.src = "assets/images/logo.svg";
    logoMobile.src = "assets/images/logo.svg";
    logoAbout.src = "assets/images/logo.svg";

    localStorage.setItem("theme", "light");
  }
};





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

  
  
