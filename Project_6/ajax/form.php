<?php

  $errors = ""; // ERRORS
  $recepient = ""; // FROM MAIL

  $idButton = $_POST['idButton']; //VALIDATION

  $name = $_POST['name']; // NAME USER
  $phone = $_POST['phone']; // PHONE USER
  $message = $_POST['message'] // MESSAGE USER
  $consent = $_POST['consent']; // CONSENT USER



// Form feedback

if ($idButton == "form_button") {  // VALIDATION THIS BUTTON
  $message = "Заявка на обратную связь от: $name<br>Телефон: $phone"; // MESSAGE TO MAIL

  $subject = "=?utf-8?B?".base64_encode("Заявка на обратную связь")."?="; // SUBJECT TO MAIL
  $headers = "Content-type: text/html; charset=utf-8\r\n";  //HEADERS MAIL
  $success = mail($recepient, $subject, $message, $headers);  // SECCESS SEND TO MAIL
  echo $success;   // SECCESS
  $idButton = "";   // CLEAR VALIDATION
}

// Form feedback

if ($idButton == "form_order") {  // VALIDATION THIS BUTTON
  $message = "Заявка на обратную связь от: $name<br>Телефон: $phone<br>Сообщение: $message"; // MESSAGE TO MAIL

  $subject = "=?utf-8?B?".base64_encode("Заявка на обратную связь")."?="; // SUBJECT TO MAIL
  $headers = "Content-type: text/html; charset=utf-8\r\n";  //HEADERS MAIL
  $success = mail($recepient, $subject, $message, $headers);  // SECCESS SEND TO MAIL
  echo $success;   // SECCESS
  $idButton = "";   // CLEAR VALIDATION
}

?>
