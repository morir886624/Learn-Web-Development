<!DOCTYPE html>
<html lang="fa-AF">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="assets/images/logo.svg">
  <title>یادگیری توسعه وب | تماس با ما</title>
  <meta name="description" content="برای سوالات، نظرات یا همکاری با سازنده وب‌سایت تماس بگیرید.">

  <!-- Font and Icon Links -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/contact-fa.css">
    <link rel="stylesheet" href="assets/css/header-fa.css">
</head>

<body>
<?php
require_once('header-fa.php');
?>
<!-- main -->
 <main>
<section id="contact">
  <form method="post" class="form">
    <h2>تماس با من!</h2>
    <div class="name-lastname">
      <div class="nom">
        <label for="name">نام :</label>
        <input class="item" type="text" id="name" name="name" placeholder="نام" autocomplete="off">
         <div class="error-txt">نام نمی‌تواند خالی باشد</div>
      </div>

      <div class="lastname">
        <label for="lastname">نام خانوادگی :</label>
        <input class="item" type="text" id="lastname" name="name" placeholder="نام خانوادگی" autocomplete="off">
        <div class="error-txt">نام خانوادگی نمی‌تواند خالی باشد</div>
      </div>
    </div>    

    <div class="email-phone">
      <div class="email">
        <label for="email" >آدرس ایمیل :</label>
        <input class="item"  type="email" id="email" name="email" placeholder="exemple@domaine.com" autocomplete="off">
        <div class="error-txt">آدرس ایمیل نمی‌تواند خالی باشد</div>
      </div>

      <div class="phone">
        <label for="number"> شماره تماس : </label>
        <input   type="number" id="number" name="number" placeholder="********۰۷" autocomplete="off">
         <div class="error-txt">شماره تماس نمی‌تواند خالی باشد</div>
      </div>
    </div>

    <!-- Champ message -->
    <div class="message">
      <label for="message"> پیام :</label>
      <textarea class="item" id="message" name="message" cols="30" rows="10" placeholder="پیام شما..." autocomplete="off"></textarea>
      <div class="error-txt">پیام نمی‌تواند خالی باشد</div>
    </div>
    <div class="buttons">
      <button type="submit" class="button-send">ارسال</button>
      <button type="reset" class="button-cancel">لغو</button>
    </div>
  </form>
  <div id="confirmation" class="message-box"></div>

  <div class="contact-box box">
    <address class="small-box">
      <span class="material-symbols-outlined icons">mail</span>        
      <a href="mailto:exemple@gmail.com" target="_blank">exemple@gmail.com</a>
    </address>

    <address class="small-box box">
      <span class="material-symbols-outlined icons">Phone</span>
      <a href="tel:+3370000000">+3370000000</a>
    </address>
    
    <address class="small-box box">
      <span  class="material-symbols-outlined icons">account_balance</span>
      <a href="legal-notice-fa.html" target="_blank">اعلامیه حقوقی</a>
    </address>
    </div>
  </section>
</main>

<!-- footer -->
<footer>
  <p> .یادگیری توسعه وب ,تمام حقوق محفوظ است&copy;</p>
</footer>

<script src="assets/js/script.js"></script>
<script src="assets/js/form.js"></script>
<script src="assets/js/scroll.js"></script>
</body>
</html>