$(document).ready(function(){

  //FORM CALL BACK

$("#form_call-back_button").on("click", function (){

  var idButton = $(this).attr("id");
  var name = $("#form_call-back_name").val().trim();
  var phoneEmail = $("#form_call-back_tel-emeil").val().trim();

  $("#form_call-back_name, #form_call-back_tel-email").css("background-color", "#fff");
  if (name == "") {
    $("#form_call-back_name").css("background-color", "red");
    return false;
  } else if (phoneEmail == "") {
    $("#form_call-back_tel-email").css("background-color", "red");
    return false;
  }


  $.ajax({
    url: 'ajax/form.php',
    type: 'POST',
    cache: false,
    data: { 'idButton':idButton,
            'name': name,
            'phoneEmail': phoneEmail },
    dataType: 'html',
    beforeSend: function () {
      $("#form_call-back_button").prop("disabled", true);
    },
    success: function(data) {
      if(!data)
      alert("ERROR");
      else
      $('#form-call-back').trigger("reset").hide("1000");
      $("#form_call-back_button").text("Отправлена").css("color", "gray");
  }
  });

});

  //FORM PROJECT

  $("#form_send_project_button").on("click", function (){

    var idButton = $(this).attr("id");
    var name = $("#form_send_project_name").val().trim();
    var phoneEmail = $("#form_send_project_tel-emeil").val().trim();

    $("#form_send_project_name, #form_send_project_tel-emeil").css("background-color", "#fff");
    if (name == "") {
      $("#form_send_project_name").css("background-color", "red");
      return false;
    } else if (phoneEmail == "") {
      $("#form_send_project_tel-emeil").css("background-color", "red");
      return false;
    }

    $.ajax({
      url: 'ajax/form.php',
      type: 'POST',
      cache: false,
      data: { 'idButton':idButton, 'name': name, 'phoneEmail': phoneEmail },
      dataType: 'html',
      beforeSend: function () {
        $("#form_send_project_button").prop("disabled", true);
      },
      success: function(data) {
        if(!data)
        alert("ERROR");
        else
        $('#form__send__project').trigger("reset");
        $("#form_send_project_button").text("Отправлена").css("color", "gray");;
    }
    });

  });

  //FORM REQUEST

  $("#form-request-send").on("click", function (){

    var idButton = $(this).attr("id");
    var name = $("#form-request-name").val().trim();
    var email = $("#form-request-email").val().trim();
    var activity = $("#form-request-activity").val().trim();
    var town = $("#form-request-town").val().trim();
    var phone = $("#form-request-phone").val();
    var site = $("#form-request-site").val().trim();
    var applications = $("#form-request-applications").val();

    $("#form-request-name, #form-request-email, #form-request-activity, #form-request-town, #form-request-phone, #form-request-site, #form-request-applications").css("border", "1px solid #C4C4C4");

    if (name == "") {
      $("#form-request-name").css("border-color", "red");
      return false;
    } else if (email == "") {
      $("#form-request-email").css("border-color", "red");
      return false;
    } else if (activity == "") {
        $("#form-request-activity").css("border-color", "red");
        return false;
    } else if (town == "") {
        $("#form-request-town").css("border-color", "red");
        return false;
    } else if (phone == "") {
        $("#form-request-phone").css("border-color", "red");
        return false;
    } else if (site == "https://") {
        $("#form-request-site").css("border-color", "red");
        return false;
    } else if (applications == "") {
      $("#form-request-applications").css("border-color", "red");
      return false;
  }

    $.ajax({
      url: 'ajax/form.php',
      type: 'POST',
      cache: false,
      data: { 'idButton':idButton,
              'name': name,
              'email': email,
              'activity': activity,
              'town': town,
              'phone': phone,
              'site': site,
              'applications': applications },
      dataType: 'html',
      beforeSend: function () {
        $("#form-request-send").prop("disabled", true);
      },
      success: function(data) {
        if(!data)
        alert("ERROR");
        else
        $('#form__request').trigger("reset");
        $("#form-request-send").text("Отправлена").css("color", "gray");
    }
    });

  });

  //FORM WEBSITE PROMOTION

  $("#form_website-promotion_button").on("click", function (){

    var idButton = $(this).attr("id");
    var name = $("#form_website-promotion_name").val().trim();
    var phoneEmail = $("#form_website-promotion_tel-emeil").val().trim();

    $("#form_website-promotion_name, #form_website-promotion_tel-emeil").css("background-color", "#fff");
    if (name == "") {
      $("#form_website-promotion_name").css("background-color", "red");
      return false;
    } else if (phoneEmail == "") {
      $("#form_website-promotion_tel-emeil").css("background-color", "red");
      return false;
    }

    $.ajax({
      url: 'ajax/form.php',
      type: 'POST',
      cache: false,
      data: { 'name': name, 'phoneEmail': phoneEmail, 'idButton':idButton, },
      dataType: 'html',
      beforeSend: function () {
        $("#form_website-promotion_button").prop("disabled", true);
      },
      success: function(data) {
        if(!data)
        alert("ERROR");
        else
        $('#form-website-promotion').trigger("reset");
        $("#form_website-promotion_button").text("Отправлена").css("color", "gray");
    }
    });

  });

  //FORM ORDER AN LOGO

  $("#form_order-an-logo_button").on("click", function (){

    var idButton = $(this).attr("id");
    var name = $("#form_order-an-logo_name").val().trim();
    var phoneEmail = $("#form_order-an-logo_tel-emeil").val().trim();

    $("#form_order-an-logo_name, #form_order-an-logo_tel-emeil").css("background-color", "#fff");
    if (name == "") {
      $("#form_order-an-logo_name").css("background-color", "red");
      return false;
    } else if (phoneEmail == "") {
      $("#form_order-an-logo_tel-emeil").css("background-color", "red");
      return false;
    }

    $.ajax({
      url: 'ajax/form.php',
      type: 'POST',
      cache: false,
      data: { 'name': name, 'phoneEmail': phoneEmail, 'idButton':idButton, },
      dataType: 'html',
      beforeSend: function () {
        $("#form_order-an-logo_button").prop("disabled", true);
      },
      success: function(data) {
        if(!data)
        alert("ERROR");
        else
        $('#form-order-an-logo').trigger("reset");
        $("#form_order-an-logo_button").text("Отправлена").css("color", "gray");
    }
    });

  });


  //FORM QUESTION SITE DEVELOPMENT


    $("#form-question-sd-button").on("click", function (){

      var idButton = $(this).attr("id");
      var answerState1 = $("input[name='site-development__answer-1']:checked").val();
      var answerState2 = $("input[name='site-development__answer-2']:checked").val();
      var answerState3 = $("input[name='site-development__answer-3']:checked").val();
      var answerState4 = $("input[name='site-development__answer-4']:checked").val();
      var answerState5 = $("input[name='site-development__answer-5']:checked").val();

        $(".question-1, .question-2, .question-3, .question-4, .question-5").css("color", "#171717");
        if(!answerState1) {
          $(".question-1").css("color", "red");
          return false;
        } else if (!answerState2) {
          $(".question-2").css("color", "red");
          return false;
        } else if (!answerState3) {
          $(".question-3").css("color", "red");
          return false;
        } else if (!answerState4) {
          $(".question-4").css("color", "red");
          return false;
        } else if (!answerState5) {
          $(".question-5").css("color", "red");
          return false;
        } else {
          $("#form-contacts").show("1000");
        }

        $("#form_contacts_button").on("click", function (){

          var name = $("#form_contacts_name").val().trim();
          var phoneEmail = $("#form_contacts_tel-emeil").val().trim();

          $("#form_contacts_name, #form_contacts_tel-emeil").css("background-color", "#fff");
          if (name == "") {
            $("#form_contacts_name").css("background-color", "red");
            return false;
          } else if (phoneEmail == "") {
            $("#form_contacts_tel-emeil").css("background-color", "red");
            return false;
          }

          $.ajax({
            url: 'ajax/form.php',
            type: 'POST',
            cache: false,
            data: { 'idButton':idButton,
                    'answerState1': answerState1,
                    'answerState2': answerState2,
                    'answerState3': answerState3,
                    'answerState4': answerState4,
                    'answerState5': answerState5,
                    'name': name,
                    'phoneEmail': phoneEmail
                  },
            dataType: 'html',
            beforeSend: function () {
              $("#form_contacts_button").prop("disabled", true);
            },
            success: function(data) {
              if(!data)
              alert("ERROR");
              else
              $("#form_contacts_button").prop("disabled", false);
              $('#site-development-poll').trigger("reset");
              $("#form-question-sd-button").text("Отправлена").css("color", "gray");
              $("#form-contacts").hide("1000");
          }

        });

      });

    });

  //FORM ORDER AN AUDIT

  $("#form_order-an-audit_button").on("click", function (){

    var idButton = $(this).attr("id");
    var phoneEmail = $("#form_order-an-audit_tel-emeil").val().trim();

    $("#form_order-an-audit_tel-emeil").css("background-color", "#fff");
    if (phoneEmail == "") {
      $("#form_order-an-audit_tel-emeil").css("background-color", "red");
      return false;
    }

    $.ajax({
      url: 'ajax/form.php',
      type: 'POST',
      cache: false,
      data: { 'idButton':idButton, 'phoneEmail': phoneEmail },
      dataType: 'html',
      beforeSend: function () {
        $("#form_order-an-audit_button").prop("disabled", true);
      },
      success: function(data) {
        if(!data)
        alert("ERROR");
        else
        $('#form-order-an-audit').trigger("reset");
        $("#form_order-an-audit_button").text("Отправлена").css("color", "gray");
    }
    });

  });

// FORM ORDER CONTACTS SITE DEVELOPMENT


  $("#corporate-site-order, #landing-page-send, #online-store-send").on("click", function (){
    var idButton = $(this).attr("id");

    $(".form__order-contacts").show("1000");

      $("#form_order_contacts_button").on("click", function (){

        var name = $("#form_order_contacts_name").val().trim();
        var phoneEmail = $("#form_order_contacts_tel-emeil").val().trim();

        $("#form_order_contacts_name, #form_order_contacts_tel-emeil").css("background-color", "#fff");
        if (name == "") {
          $("#form_order_contacts_name").css("background-color", "red");
          return false;
        } else if (phoneEmail == "") {
          $("#form_order_contacts_tel-emeil").css("background-color", "red");
          return false;
        }

        $.ajax({
          url: 'ajax/form.php',
          type: 'POST',
          cache: false,
          data: { 'name': name,
                  'phoneEmail': phoneEmail,
                  'idButton':idButton, },
          dataType: 'html',
          beforeSend: function () {
            $("#form_order_contacts_button").prop("disabled", true);
          },
          success: function(data) {
            if(!data)
            alert("ERROR");
            else
            $("#form_order_contacts_button").prop("disabled", false);
            $('.form__order-contacts').trigger("reset").hide("1000");
            if (idButton == "corporate-site-order") {
              $("#corporate-site-order").text("Отправлена").prop('disabled', true).css("color", "gray");
            } else if (idButton == "landing-page-send") {
              $("#landing-page-send").text("Отправлена").prop('disabled', true).css("color", "gray");
            } else {
              $("#online-store-send").text("Отправлена").prop('disabled', true).css("color", "gray");
            }
            idButton = "";

        }
        });

      });

    });

    // FORM ORDER CONTACTS WEBSITE PROMOTION


    $("#search-advertising-order, #promotion-in__send, #display-ad-send").on("click", function (){
      var idButton = $(this).attr("id");

      $(".form__order-contacts").show("1000");

        $("#form_order_contacts_button").on("click", function (){

          var name = $("#form_order_contacts_name").val().trim();
          var phoneEmail = $("#form_order_contacts_tel-emeil").val().trim();

          $("#form_order_contacts_name, #form_order_contacts_tel-emeil").css("background-color", "#fff");
          if (name == "") {
            $("#form_order_contacts_name").css("background-color", "red");
            return false;
          } else if (phoneEmail == "") {
            $("#form_order_contacts_tel-emeil").css("background-color", "red");
            return false;
          }

          $.ajax({
            url: 'ajax/form.php',
            type: 'POST',
            cache: false,
            data: { 'name': name,
                    'phoneEmail': phoneEmail,
                    'idButton': idButton, },
            dataType: 'html',
            beforeSend: function () {
              $("#form_order_contacts_button").prop("disabled", true);
            },
            success: function(data) {
              if(!data)
              alert("ERROR");
              else
              $("#form_order_contacts_button").prop("disabled", false);
              $('.form__order-contacts').trigger("reset").hide("1000");

              if (idButton == "search-advertising-order") {
                $("#search-advertising-order").text("Отправлена").prop('disabled', true).css("color", "gray");
              } else if (idButton == "promotion-in__send") {
                $("#promotion-in__send").text("Отправлена").prop('disabled', true).css("color", "gray");
              } else {
                $("#display-ad-send").text("Отправлена").prop('disabled', true).css("color", "gray");
              }
              idButton = "";
          }
          });

        });

      });


      //FORM QUESTION FORM STYLE


        $("#form-question-fs-button").on("click", function (){

          var idButton = $(this).attr("id");
          var answerState1 = $("input[name='form-style__answer-1']:checked").val();
          var answerState2 = $("input[name='form-style__answer-2']:checked").val();
          var answerState3 = $("input[name='form-style__answer-3']:checked").val();
          var answerState4 = $("input[name='form-style__answer-4']:checked").val();
          var answerState5 = $("input[name='form-style__answer-5']:checked").val();

            $(".question-1, .question-2, .question-3, .question-4, .question-5").css("color", "#171717");
            if(!answerState1) {
              $(".question-1").css("color", "red");
              return false;
            } else if (!answerState2) {
              $(".question-2").css("color", "red");
              return false;
            } else if (!answerState3) {
              $(".question-3").css("color", "red");
              return false;
            } else if (!answerState4) {
              $(".question-4").css("color", "red");
              return false;
            } else if (!answerState5) {
              $(".question-5").css("color", "red");
              return false;
            } else {
              $("#form-contacts").show("1000");
            }

            $("#form_contacts_button").on("click", function (){

              var name = $("#form_contacts_name").val().trim();
              var phoneEmail = $("#form_contacts_tel-emeil").val().trim();

              $("#form_contacts_name, #form_contacts_tel-emeil").css("background-color", "#fff");
              if (name == "") {
                $("#form_contacts_name").css("background-color", "red");
                return false;
              } else if (phoneEmail == "") {
                $("#form_contacts_tel-emeil").css("background-color", "red");
                return false;
              }

              $.ajax({
                url: 'ajax/form.php',
                type: 'POST',
                cache: false,
                data: { 'idButton':idButton,
                        'answerState1': answerState1,
                        'answerState2': answerState2,
                        'answerState3': answerState3,
                        'answerState4': answerState4,
                        'answerState5': answerState5,
                        'name': name,
                        'phoneEmail': phoneEmail
                      },
                dataType: 'html',
                beforeSend: function () {
                  $("#form_contacts_button").prop("disabled", true);
                },
                success: function(data) {
                  if(!data)
                  alert("ERROR");
                  else
                  $("#form_contacts_button").prop("disabled", false);
                  $('#form-style-poll').trigger("reset");
                  $("#form-question-fs-button").text("Отправлена").css("color", "gray");
                  $("#form-contacts").hide("1000");
              }

            });

          });

        });

        //FORM QUESTION LOGO DEVELOPMENT


          $("#form-question-ld-button").on("click", function (){

            var idButton = $(this).attr("id");
            var answerState1 = $("input[name='logo-development__answer-1']:checked").val();
            var answerState2 = $("input[name='logo-development__answer-2']:checked").val();
            var answerState3 = $("input[name='logo-development__answer-3']:checked").val();
            var answerState4 = $("input[name='logo-development__answer-4']:checked").val();
            var answerState5 = $("input[name='logo-development__answer-5']:checked").val();

              $(".question-1, .question-2, .question-3, .question-4, .question-5").css("color", "#171717");
              if(!answerState1) {
                $(".question-1").css("color", "red");
                return false;
              } else if (!answerState2) {
                $(".question-2").css("color", "red");
                return false;
              } else if (!answerState3) {
                $(".question-3").css("color", "red");
                return false;
              } else if (!answerState4) {
                $(".question-4").css("color", "red");
                return false;
              } else if (!answerState5) {
                $(".question-5").css("color", "red");
                return false;
              } else {
                $("#form-contacts").show("1000");
              }

              $("#form_contacts_button").on("click", function (){

                var name = $("#form_contacts_name").val().trim();
                var phoneEmail = $("#form_contacts_tel-emeil").val().trim();

                $("#form_contacts_name, #form_contacts_tel-emeil").css("background-color", "#fff");
                if (name == "") {
                  $("#form_contacts_name").css("background-color", "red");
                  return false;
                } else if (phoneEmail == "") {
                  $("#form_contacts_tel-emeil").css("background-color", "red");
                  return false;
                }

                $.ajax({
                  url: 'ajax/form.php',
                  type: 'POST',
                  cache: false,
                  data: { 'idButton':idButton,
                          'answerState1': answerState1,
                          'answerState2': answerState2,
                          'answerState3': answerState3,
                          'answerState4': answerState4,
                          'answerState5': answerState5,
                          'name': name,
                          'phoneEmail': phoneEmail
                        },
                  dataType: 'html',
                  beforeSend: function () {
                    $("#form_contacts_button").prop("disabled", true);
                  },
                  success: function(data) {
                    if(!data)
                    alert("ERROR");
                    else
                    $("#form_contacts_button").prop("disabled", false);
                    $('#logo-development-poll').trigger("reset");
                    $("#form-question-ld-button").text("Отправлена").css("color", "gray");
                    $("#form-contacts").hide("1000");
                }

              });

            });

          });



});
