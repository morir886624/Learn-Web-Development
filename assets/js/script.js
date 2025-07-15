const icons = document.querySelectorAll(".img-moon");
const logo = document.getElementById("logo");
const logoAbout = document.getElementById("logo-about");

// اعمال تم
function appliquerTheme(theme) {
  const modeSombre = theme === "dark"; //مقدار تم
  document.body.classList.toggle("dark-theme", modeSombre); //دارک بود مود سومبغ ترو میشه و تم تغییر میکنه 
//برای تغییر ایکن ها
  icons.forEach(function(img) {
    if (modeSombre) {
      img.src = "assets/images/sun.png"; 
    } else {
      img.src = "assets/images/moon.png"; 
    }
  });

let nouvelleLogo;
if (modeSombre) {
  nouvelleLogo = "assets/images/logo_mode_nuit.svg";
}else {
  nouvelleLogo = "assets/images/logo.svg";
}if (logo) {
  logo.src = nouvelleLogo;
}if (logoAbout) {
  logoAbout.src = nouvelleLogo;
}}

// زمانی که صفحه تازه باز یا رفرش میشه ما تم را از لوکال استورج میگیریم 
document.addEventListener("DOMContentLoaded", function() {
  const themeSauvegarde = localStorage.getItem("theme") || "light";
  appliquerTheme(themeSauvegarde);

  // برای تبدیل تم با کلیک روی ایکن
  icons.forEach(function(img) {
    img.addEventListener("click", function() {
      // چک میکنیم که چی تمی درحال اجرا است
      const nouveauTheme = document.body.classList.contains("dark-theme") ? "light" : "dark";
      // ذخیره تم جدید
      localStorage.setItem("theme", nouveauTheme);
      // اعمال تم
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