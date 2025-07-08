const icons = document.querySelectorAll(".img-moon");
const logo = document.getElementById("logo");
const logoMobile = document.getElementById("logo-mobile");
const logoAbout = document.getElementById("logo-about");

// Cette fonction applique le thème (clair ou sombre)
function appliquerTheme(theme) {
  // Est-ce que le thème est "dark" ?
  const modeSombre = theme === "dark";

  // On ajoute ou enlève la classe "dark-theme" au <body>
  document.body.classList.toggle("dark-theme", modeSombre);

  icons.forEach(function(img) {
    if (modeSombre) {
      img.src = "assets/images/sun.png"; 
    } else {
      img.src = "assets/images/moon.png"; 
    }
  });

let nouvelleImageLogo;
if (modeSombre) {
  nouvelleImageLogo = "assets/images/logo_mode_nuit.svg";
} else {
  nouvelleImageLogo = "assets/images/logo.svg";
}
if (logo) {
  logo.src = nouvelleImageLogo;
}
if (logoMobile) {
  logoMobile.src = nouvelleImageLogo;
}
if (logoAbout) {
  logoAbout.src = nouvelleImageLogo;
}
}

// Quand la page est chargée
document.addEventListener("DOMContentLoaded", function() {
  // On récupère le thème choisi précédemment, ou "light" si rien n'est enregistré
  const themeSauvegarde = localStorage.getItem("theme") || "light";
  appliquerTheme(themeSauvegarde);

  // Quand on clique sur une icône, on change de thème
  icons.forEach(function(img) {
    img.addEventListener("click", function() {
      // On vérifie si on est déjà en mode sombre
      const nouveauTheme = document.body.classList.contains("dark-theme") ? "light" : "dark";
      // On sauvegarde le nouveau thème
      localStorage.setItem("theme", nouveauTheme);
      // On applique le nouveau thème
      appliquerTheme(nouveauTheme);
    });
  });
});
// gestion du bouton menu tablette
document.getElementById("menu-button").addEventListener("click", function() {
  const menu = document.getElementById("nav-menu");
  const icon = document.getElementById("menu-icon");

  menu.classList.toggle("active");
  icon.textContent = menu.classList.contains("active") ? "close" : "menu";
});