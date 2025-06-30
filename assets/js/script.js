const icons = document.querySelectorAll(".img-moon");
const logo = document.getElementById("logo");
const logoMobile = document.getElementById("logo-mobile");
const logoAbout = document.getElementById("logo-about");

function applyTheme(theme) {
  const isDark = theme === "dark";

  document.body.classList.toggle("dark-theme", isDark);

  icons.forEach(img => {
    img.src = isDark ? "assets/images/sun.png" : "assets/images/moon.png";
  });

  const logoSrc = isDark ? "assets/images/logo_mode_nuit.svg" : "assets/images/logo.svg";
  if (logo) logo.src = logoSrc;
  if (logoMobile) logoMobile.src = logoSrc;
  if (logoAbout) logoAbout.src = logoSrc;
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);

  icons.forEach(img => {
    img.addEventListener("click", () => {
      const newTheme = document.body.classList.contains("dark-theme") ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      applyTheme(newTheme);
    });
  });
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

  



