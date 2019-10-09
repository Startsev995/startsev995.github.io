<?php

  $errors = "";
  $recepient = "sl1me@live.ru";

  $idButton = $_POST['idButton'];

  $name = $_POST['name'];
  $phoneEmail = $_POST['phoneEmail'];
  $email = $_POST['email'];
  $activity = $_POST['activity'];
  $town = $_POST['town'];
  $phone = $_POST['phone'];
  $site = $_POST['site'];
  $applications = $_POST['applications'];
  $answerState1 = $_POST['answerState1'];
  $answerState2 = $_POST['answerState2'];
  $answerState3 = $_POST['answerState3'];
  $answerState4 = $_POST['answerState4'];
  $answerState5 = $_POST['answerState5'];


// Form call back

if ($idButton == "form_call-back_button") {
  $message = "Заявка на обратную связь от: $name<br>Телефон/Email: $phoneEmail";

  $subject = "=?utf-8?B?".base64_encode("Заявка на обратную связь с сайта Pelican")."?=";
  $headers = "From: $recepient\r\nReply-to: $recepient\r\nContent-type: text/html; charset=utf-8\r\n";
  $success = mail($recepient, $subject, $message, $headers);
  echo $success;
  $idButton = "";
}

// FORM PROJECT

elseif ($idButton == "form_send_project_button") {
  $message = "Заявка на проект от: $name <br>Телефон/Email: $phoneEmail";

  $headers = "From: $recepient\r\nReply-to: $recepient\r\nContent-type: text/html; charset=utf-8\r\n";
  $subject = "=?utf-8?B?".base64_encode("Заявка на проект с сайта Pelican")."?=";

  $success = mail($recepient, $subject, $message, $headers);
  echo $success;
  $idButton = "";
}

//FORM WEBSITE PROMOTION

elseif ($idButton == "form_website-promotion_button") {
  $message = "Заявка на продвижение сайта от: $name<br>Телефон/Email: $phoneEmail";

  $subject = "=?utf-8?B?".base64_encode("Заявка на продвижение сайта с сайта Pelican")."?=";
  $headers = "From: $recepient\r\nReply-to: $recepient\r\nContent-type: text/html; charset=utf-8\r\n";

  $success = mail($recepient, $subject, $message, $headers);
  echo $success;
  $idButton = "";
}

//FORM ORDER AN LOGO

elseif ($idButton == "form_order-an-logo_button") {
  $message = "Заявка на заказ логотипа от: $name<br>Телефон/Email: $phoneEmail";

  $subject = "=?utf-8?B?".base64_encode("Заявка на заказ логотипа с сайта Pelican")."?=";
  $headers = "From: $recepient\r\nReply-to: $recepient\r\nContent-type: text/html; charset=utf-8\r\n";

  $success = mail($recepient, $subject, $message, $headers);
  echo $success;
  $idButton = "";
}

// Form request

elseif ($idButton == "form-request-send") {
  $message = "Заявка на аудит рекламной компании от: $name
  <br>Email: $email
  <br>Телефон: $phone
  <br>Сфера деятельности: $activity
  <br>Город: $town
  <br>Сайт: $site
  <br>Сколько заявок на сайт хотите получать?: $applications";

  $headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";
  $subject = "=?utf-8?B?".base64_encode("Заявка на аудит рекламной компании с сайта Pelican")."?=";

  $success = mail($recepient, $subject, $message, $headers);
  echo $success;
  $idButton = "";
}

//FORM QUESTION SITE DEVELOPMENT


elseif ($idButton == "form-question-sd-button") {
  $headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";
  $message = "Ответы на вопросы разработка сайтов от $name
  <br>Телефон/Email: $phoneEmail
  <br>ответы на вопросы: 1.Вопрос $answerState1
                         2.Вопрос $answerState2
                         3.Вопрос $answerState3
                         4.Вопрос $answerState4
                         5.Вопрос $answerState5";

  $subject = "=?utf-8?B?".base64_encode("Ответы на вопросы разработка сайтов, с сайта Pelican")."?=";

  $success = mail($recepient, $subject, $message, $headers);
  echo $success;
  $idButton = "";
  }

//FORM ORDER AN AUDIT

elseif ($idButton == "form_order-an-audit_button") {
  $message = "Заказ на бесплатный аудит сайта <br> Телефон/Email: $phoneEmail";

  $subject = "=?utf-8?B?".base64_encode("Заказ на бесплатный аудит сайта с сайта Pelican")."?=";
  $headers = "Content-type: text/html; charset=utf-8\r\n";

  $success = mail($recepient, $subject, $message, $headers);
  echo $success;
  $idButton = "";
}

// FORM ORDER CONTACTS

elseif ($idButton == "corporate-site-order") {

  $message = "Заказ на корпоративный сайт от: $name
                    <br>Телефон/Email: $phoneEmail";

  $subject = "=?utf-8?B?".base64_encode("Заказ на Корпоративный сайт с сайта Pelican")."?=";
  $headers = "Content-type: text/html; charset=utf-8\r\n";

  $success = mail($recepient, $subject, $message, $headers);
  echo $success;
  $idButton = "";
} elseif ($idButton == "landing-page-send") {

  $message = "Заказ на Landing page от: $name
                      <br>Телефон/Email: $phoneEmail";


  $subject = "=?utf-8?B?".base64_encode("Заказ на Landing page с сайта Pelican")."?=";
  $headers = "Content-type: text/html; charset=utf-8\r\n";

  $success = mail($recepient, $subject, $message, $headers);
  echo $success;
} elseif ($idButton == "online-store-send") {

  $message = "Заказ на интернет-магазин от: $name
                      <br>Телефон/Email: $phoneEmail";


  $subject = "=?utf-8?B?".base64_encode("Заказ на Интернет-магазин с сайта Pelican")."?=";
  $headers = "Content-type: text/html; charset=utf-8\r\n";

  $success = mail($recepient, $subject, $message, $headers);
  echo $success;
  $idButton = "";
} elseif ($idButton == "search-advertising-order") {

  $message = "Заказ на рекламу в поисковой выдаче от: $name
                      <br>Телефон/Email: $phoneEmail";


  $subject = "=?utf-8?B?".base64_encode("Заказ на рекламу в поисковой выдаче с сайта Pelican")."?=";
  $headers = "Content-type: text/html; charset=utf-8\r\n";

  $success = mail($recepient, $subject, $message, $headers);
  echo $success;
  $idButton = "";
} elseif ($idButton == "promotion-in__send") {

  $message = "Заказ на продвижение в РСЯ и КМС от: $name
                      <br>Телефон/Email: $phoneEmail";


  $subject = "=?utf-8?B?".base64_encode("Заказ на продвижение в РСЯ и КМС с сайта Pelican")."?=";
  $headers = "Content-type: text/html; charset=utf-8\r\n";

  $success = mail($recepient, $subject, $message, $headers);
  echo $success;
} elseif ($idButton == "display-ad-send") {

  $message = "Заказ на медийную рекламу от: $name
                      <br>Телефон/Email: $phoneEmail";


  $subject = "=?utf-8?B?".base64_encode("Заказ на медийную рекламу с сайта Pelican")."?=";
  $headers = "Content-type: text/html; charset=utf-8\r\n";

  $success = mail($recepient, $subject, $message, $headers);
  echo $success;
}

//FORM QUESTION FORM STYLE


elseif ($idButton == "form-question-fs-button") {
  $headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";
  $message = "Ответы на вопросы разработка фирменого стиля от $name
  <br>Телефон/Email: $phoneEmail
  <br>ответы на вопросы: 1.Вопрос $answerState1
                         2.Вопрос $answerState2
                         3.Вопрос $answerState3
                         4.Вопрос $answerState4
                         5.Вопрос $answerState5";

  $subject = "=?utf-8?B?".base64_encode("Ответы на вопросы разработка фирменого стиля с сайта Pelican")."?=";

  $success = mail($recepient, $subject, $message, $headers);
  echo $success;
  $idButton = "";
  }

//FORM QUESTION LOGO DEVELOPMENT


elseif ($idButton == "form-question-ld-button") {
  $headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";
  $message = "Ответы на вопросы разработка логотипа от $name
  <br>Телефон/Email: $phoneEmail
  <br>ответы на вопросы: 1.Вопрос $answerState1
                         2.Вопрос $answerState2
                         3.Вопрос $answerState3
                         4.Вопрос $answerState4
                         5.Вопрос $answerState5";

  $subject = "=?utf-8?B?".base64_encode("Ответы на вопросы разработка логотипа с сайта Pelican")."?=";

  $success = mail($recepient, $subject, $message, $headers);
  echo $success;
  $idButton = "";
} else {
  exit;
}

?>
