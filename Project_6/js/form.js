$(document).ready(function(){

  //FORM FEEDBACK

  $("#feedback").submit(function (event){

    var name = $("#name_feedback").val().trim();
    var phone = $("#phone_feedback").val().trim();
    var consent = $("#consent_feedback").prop('checked');
    $("#name_feedback, #phone_feedback").css("background-color", "#e6e6e6");

    if (name == "") {
      $("#name_feedback").css("background-color", "red");
      return false;
    } else if (phone == "") {
      $("#phone_feedback").css("background-color", "red");
      return false;
    } else if (consent == false) {
      $(".form_label_consent").css("color", "red");
      return false;
    }
    alert( "Форма отпралена" );
    event.preventDefault();
  });

//FORM ORDER

  $("#order").submit(function (event){

    var name = $("#name_order").val().trim();
    var phone = $("#phone_order").val().trim();
    var message = $("#message_order").val().trim();
    var consent = $("#consent_order").prop('checked');
    $("#name_order, #phone_order, #message_order").css("background-color", "#e6e6e6");

    if (name == "") {
      $("#name_order").css("background-color", "red");
      return false;
    } else if (phone == "") {
      $("#phone_order").css("background-color", "red");
      return false;
    } else if (message == "") {
      $("#message_order").css("background-color", "red");
      return false;
    } else if (consent == false) {
      $(".form_label_consent").css("color", "red");
      return false;
    }
    alert( "Форма отпралена" );
    event.preventDefault();

  });

});
