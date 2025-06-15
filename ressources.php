<?php
require_once('header.php');
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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



<!-- main sections -->

<div class="div-image-principal">
  <img src="assets/images/image-ressources.jpg" alt="" />
</div>

<section class="section-ressources">
  <div class="sites">
    <div class="big-box ">
      <div class="div-image">
        <img src="assets/images/Udemy.svg" alt="" />
      </div>
      <div class="div-text">
        <h3>Udemy</h3>
        <p>
        75 millions participants <br />Plus d'un milliard inscriptions aux
        cours</p>
      </div>
      <div class="div-button">
        <a href="https://www.udemy.com/" target="_blank">Voir le site !</a>
      </div>
    </div>


    <div class="big-box">
      <div class="div-image">
       <img src="assets/images/w3schools.png" alt="" />
      </div>
      <div class="div-text">
        <h3>W3schools</h3>
        <p>
        70M+
        Monthly Visitors <br>
        3BN+ Pages Displayed Yearly</p>
      </div>
      <div class="div-button">
        <a href="https://www.w3schools.com/" target="_blank">Voir le site !</a>
      </div>
    </div>

    <div class="big-box ">
      <div class="div-image">
        <img src="assets/images/mdn.png" alt="" />
      </div>
      <div class="div-text">
        <h3>MDN</h3>
        <p>45K Pages of content <br> 7 Languages <br> 46M Monthly pageviews</p>
      </div>
      <div class="div-button">
        <a href="https://developer.mozilla.org/en-US/" target="_blank">Voir le site !</a>
      </div>
    </div>
    <div class="big-box ">
      <div class="div-image">
        <img src="assets/images/Treehouse.png" alt="" />
      </div>
      <div class="div-text">
        <h3>Treehouse</h3>
        <p>1.2 million students across the globe</p>
      </div>
      <div class="div-button">
        <a href="https://teamtreehouse.com/" target="_blank">Voir le site !</a>
      </div>
    </div>
  </div>

  <!-- youtube -->
  <div class="youtubes">
    <div class="big-box-youtube">
      <div class="div-image-youtube">
       <img src="assets/images/ninja.jpg" alt="" />
      </div>
      <div class="div-text">
        <h3>Net Ninja</h3>
        <p>1.74M subscribers</p>
      </div>
      <div class="div-button-youtube">
        <a href="https://www.youtube.com/@NetNinja" target="_blank">Visiter la chaîne !</a>
      </div>
    </div>

    <div class="big-box-youtube">
      <div class="div-image-youtube">
       <img src="assets/images/traversy.jpg" alt="" />
      </div>
      <div class="div-text">
        <h3>Traversy Media</h3>
        <p>2.34M subscribers</p>
      </div>
      <div class="div-button-youtube">
        <a href="https://www.youtube.com/@TraversyMedia" target="_blank">Visiter la chaîne !</a>
      </div>
    </div>
    <div class="big-box-youtube">
      <div class="div-image-youtube">
       <img src="assets/images/freeCodeCamp.org.svg" alt="" />
      </div>
      <div class="div-text">
        <h3>freeCodeCamp.org</h3>
        <p>10.6M subscribers</p>
      </div>
      <div class="div-button-youtube">
        <a href="https://www.youtube.com/@freecodecamp" target="_blank">Visiter la chaîne !</a>
      </div>
    </div>

    <div class="big-box-youtube">
      <div class="div-image-youtube">
       <img src="assets/images/web-dev-simplified.jpg" alt="" />
      </div>
      <div class="div-text">
        <h3>Web Dev Simplified</h3>
        <p>1.69M subscribers</p>
      </div>
      <div class="div-button-youtube">
        <a href="https://www.youtube.com/@WebDevSimplified" target="_blank">Visiter la chaîne !</a>
      </div>
    </div>
  </div>
</section>

 <?php
require_once('footer.php');
?>
<script src="assets/js/script.js"></script>
</body>
</html>
