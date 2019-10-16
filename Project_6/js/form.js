$(document).ready(function(){

  //FORM FEEDBACK

$("#form_button").on("click", function (){

  var idButton = $(this).attr("id");
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


  $.ajax({
    url: 'ajax/form.php',
    type: 'POST',
    cache: false,
    data: { 'idButton':idButton,
            'name': name,
            'phone': phone,
            'consent': consent },
    dataType: 'html',
    beforeSend: function () {
      $("#form_feedback").prop("disabled", true);
    },
    success: function(data) {
      if(!data)
      alert("ERROR");
      else
      name = '', phone = '', consent ='', idButton = '';
      $('.feedback, .background-durk').trigger("reset").hide();
  }
  });
});

//FORM ORDER

$("#form_order").on("click", function (){

var idButton = $(this).attr("id");
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


$.ajax({
  url: 'ajax/form.php',
  type: 'POST',
  cache: false,
  data: { 'idButton':idButton,
          'name': name,
          'phone': phone,
          'message': message,
          'consent': consent },
  dataType: 'html',
  beforeSend: function () {
    $("#form_order").prop("disabled", true);
  },
  success: function(data) {
    if(!data)
    alert("ERROR");
    else
    name = '', phone = '', consent = '', message = '', idButton = '';
    $('.order, .background-durk').trigger("reset").hide();
}
});
});

});
