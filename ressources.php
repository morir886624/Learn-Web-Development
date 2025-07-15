<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="assets/images/logo.svg">
  <title>Learn Web Development | Resources</title>
  <meta name="description" content="Find useful resources, tutorials, and links to help you learn HTML, CSS, JavaScript and more.">

  <!-- Font and Icon Links -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/ressources.css">
  <link rel="stylesheet" href="assets/css/header.css">
  <link rel="stylesheet" href="assets/css/footer.css">
</head>

<body>
<?php
require_once('header.php');
?>
<!-- main sections -->
<div class="div-image-principal">
  <img src="assets/images/image-ressources.jpg" alt="la définition de html,css et js">
</div>

<section class="section-ressources">
  <div class="sites">
    <div class="big-box box ">
        <img src="assets/images/Udemy.svg" alt="Udemy">
      <div class="div-text">
        <h3>Udemy</h3>
        <p>
        75 millions participants <br>Plus d'un milliard inscriptions aux
        cours</p>
      </div>
      <div class="div-button">
        <a href="https://www.udemy.com/" target="_blank" tabindex="8">Voir le site !</a>
      </div>
    </div>

    <div class="big-box box">
       <img src="assets/images/w3schools.png" alt="W3schools">
      <div class="div-text">
        <h3>W3schools</h3>
        <p>
        70M+
        Monthly Visitors <br>
        3BN+ Pages Displayed Yearly</p>
      </div>
      <div class="div-button">
        <a href="https://www.w3schools.com/" target="_blank" tabindex="9">Voir le site !</a>
      </div>
    </div>

    <div class="big-box box ">
        <img src="assets/images/mdn.png" alt="MDN">
      <div class="div-text">
        <h3>MDN</h3>
        <p>45K Pages of content <br> 7 Languages <br> 46M Monthly pageviews</p>
      </div>
      <div class="div-button">
        <a href="https://developer.mozilla.org/en-US/" target="_blank" tabindex="10">Voir le site !</a>
      </div>
    </div>
    <div class="big-box box ">
        <img src="assets/images/Treehouse.png" alt="Treehouse">
      <div class="div-text">
        <h3>Treehouse</h3>
        <p>1.2 million students across the globe</p>
      </div>
      <div class="div-button">
        <a href="https://teamtreehouse.com/" target="_blank" tabindex="11">Voir le site !</a>
      </div>
    </div>
  </div>

  <!-- youtube -->
  <div class="youtubes">
    <div class="big-box-youtube box">
       <img src="assets/images/ninja.png" alt="Net Ninja">
      <div class="div-text">
        <h3>Net Ninja</h3>
        <p>1.74M subscribers</p>
      </div>
      <div class="div-button-youtube">
        <a href="https://www.youtube.com/@NetNinja" target="_blank" tabindex="12">Visiter la chaîne !</a>
      </div>
    </div>
    <div class="big-box-youtube box">
       <img src="assets/images/traversy.png" alt="Traversy Media">
      <div class="div-text">
        <h3>Traversy Media</h3>
        <p>2.34M subscribers</p>
      </div>
      <div class="div-button-youtube">
        <a href="https://www.youtube.com/@TraversyMedia" target="_blank" tabindex="13">Visiter la chaîne !</a>
      </div>
    </div>
    <div class="big-box-youtube box">
       <img src="assets/images/freeCodeCamp.org.svg" alt="free Code Camp.org">
      <div class="div-text">
        <h3>free Code Camp.org</h3>
        <p>10.6M subscribers</p>
      </div>
      <div class="div-button-youtube">
        <a href="https://www.youtube.com/@freecodecamp" target="_blank" tabindex="14">Visiter la chaîne !</a>
      </div>
    </div>
    <div class="big-box-youtube box">
       <img src="assets/images/web-dev-simplified.png" alt="Web-Dev-Simplified">
      <div class="div-text">
        <h3>Web Dev Simplified</h3>
        <p>1.69M subscribers</p>
      </div>
      <div class="div-button-youtube">
        <a href="https://www.youtube.com/@WebDevSimplified" target="_blank" tabindex="15">Visiter la chaîne !</a>
      </div>
    </div>
  </div>
</section>

 <?php
require_once('footer.php');
?>
<script src="assets/js/script.js"></script>
<script src="assets/js/scroll.js"></script>
</body>
</html>
