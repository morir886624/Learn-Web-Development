

let icon = document.getElementById("icon");
let logo = document.getElementById("logo");
let logoMobile = document.getElementById("logo-mobile");
let logoAbout = document.getElementById("logo-about");

function applyTheme(theme) {
  const isDark = theme === "dark";

  document.body.classList.toggle("dark-theme", isDark);
  if (icon) icon.src = isDark ? "assets/images/sun.png" : "assets/images/moon.png";
  if (logo) logo.src = isDark ? "assets/images/logo_mode_nuit.svg" : "assets/images/logo.svg";
  if (logoMobile) logoMobile.src = isDark ? "assets/images/logo_mode_nuit.svg" : "assets/images/logo.svg";
  if (logoAbout) logoAbout.src = isDark ? "assets/images/logo_mode_nuit.svg" : "assets/images/logo.svg";
}

//******************************************************************* */
window.addEventListener("DOMContentLoaded", function(){
  // Appliquer le thème au chargement
  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);

  // Gérer le clic sur l’icône
  if (icon) {
    icon.addEventListener("click", function(){
      const newTheme = document.body.classList.contains("dark-theme") ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      applyTheme(newTheme);
    });
  }
});






let toggleBtn = document.getElementById("menu-toggle");
let navMenu = document.getElementById("nav-menu");

toggleBtn.addEventListener("click", function(){
  navMenu.classList.toggle("active");
});    

function toggleMenu() {
    let nav = document.getElementById("nav-menu");
    let icon = document.getElementById("menu-icon");
  
    nav.classList.toggle("active");
    if (nav.classList.contains("active")) {
      icon.textContent = "close"; 
    } else {
      icon.textContent = "menu"; 
    }  
  }  

  
  







