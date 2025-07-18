<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="assets/images/logo.svg">
  <title>Learn Web Development | Contact</title>
  <meta name="description" content="Get in touch with the site creator for questions, feedback, or collaboration.">

  <!-- Font and Icon Links -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/contact.css">
  <link rel="stylesheet" href="assets/css/header.css">
</head>

<body>
<?php
require_once('header.php');
?>
<!-- main -->
<main>
  <section id="contact">
  <form method="post" class="form">
    <h2>Contact me!</h2>
    <div class="name-lastname">
      <div class="nom">
        <label for="name">Name :</label>
        <input class="item" type="text" id="name" name="name" placeholder="Your name" autocomplete="off">
        <div class="error-txt">Full name can't be blank</div>
      </div>

      <div class="lastname">
        <label for="lastname">Last name :</label>
        <input class="item" type="text" id="lastname" name="lastname" placeholder="Your last name" autocomplete="off">
        <div class="error-txt">Last name can't be blank</div>
      </div>
    </div>    

    <div class="email-phone">
      <div class="email">
        <label for="email">Email :</label>
        <input class="item"  type="email" id="email" name="email" placeholder="exemple@domaine.com" autocomplete="off">
        <div class="error-txt">Email addresse can't be blank</div>
      </div>

      <div class="phone">
        <label for="number">Phone number :</label>
        <input   type="number" id="number" name="number" placeholder="07********" autocomplete="off">
        <div class="error-txt">Phone number can't be blank</div>
      </div>
    </div>

    <!-- Champ message -->
    <div class="message">
      <label for="message">Message :</label>
      <textarea class="item" id="message" name="message"  placeholder="Your message..." autocomplete="off"></textarea>
      <div class="error-txt">Message can't be blank</div>
    </div>
    <div class="buttons">
      <button type="submit" class="button-send">Send</button>
      <button type="reset" class="button-cancel">Cancel</button>
    </div>
  </form>
  <div id="confirmation" class="message-box"></div>

    <div class="contact-box box">
      <address class="small-box">
        <span class="material-symbols-outlined">mail</span>        
        <a href="mailto:moeid6624@gmail.com" target="_blank">moeid6624@gmail.com</a>
      </address>

      <address class="small-box box">
        <span class="material-symbols-outlined">call</span>
        <a href="tel:+33745935173">+33745935173</a>
      </address>
      
      <address class="small-box box">
        <span  class="material-symbols-outlined">account_balance</span>
        <a href="legal-notice.html" target="_blank">Legal notice</a>
      </address>
    </div>
  </section>
</main>

<!-- footer -->
<footer>
  <p>&copy; 2025 Learn Web Development. All rights reserved.</p>
</footer>

<script src="assets/js/script.js"></script>
<script src="assets/js/form.js"></script>
<script src="assets/js/scroll.js"></script>
</body>
</html>