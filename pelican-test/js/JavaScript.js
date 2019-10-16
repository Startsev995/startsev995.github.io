$(document).ready(function(){

  // При наведение меняется иконка меню

  $(".header__menu, .index__header__menu").hover(function (){
    $(this).attr("src", "img/svg/header_menu_open.svg")
  }, function (){
    $(".header__menu").attr("src", "img/svg/header-menu.svg")
    $(".index__header__menu").attr("src", "img/svg/index_header_menu.svg")
  });

  // При нажатие на иконку меню открывается блок с меню

  $(".header__menu, .index__header__menu").on("click", function (){
    $(this).hide();
    $(".header__menu__hide").show();
    $(".header__menu__open").show("1000");
  });
  $(".header__menu__hide").on("click", function (){
    $(".header__menu").show();
    $(".index__header__menu").show();
    $(this).hide();
    $(".header__menu__open").hide("1000");
  });

  // При уходе мышки с меню закрывается
  $(".header__menu__open").hover(function (){},
  function (){
    $(".header__menu__hide").hide();
    $(".index__header__menu").show();
    $(".header__menu").show();
    $(this).hide("1000");
  });


  // При наведение на ссылку в меню навигации появляеться надпись с номером и подсвечевается ссылки
  // надпись с номером ссылки появляется надпись под intro

  $(".main__navigation__item").on("click", function (){
    $(".active").removeClass("active");
    $(this).addClass("active");
  });

  $("#website-development").on("click", function (){
    $("#link__image__shadow").addClass("website-development");
    $("#nav__namber").html("<h4>01/<span>04</span></h4>");
    $(".intro__link a").text("Узнать подробнее о разработке сайтов").attr("href", "site_development.html");
    $(".intro__link").show();
    $("#link__image__shadow").removeClass("website-promotion || form-style-img || logo-development");
});

  $("#website-promotion").on("click", function (){
    $("#link__image__shadow").addClass("website-promotion");
    $("#nav__namber").html("<h4>02/<span>04</span></h4>");
    $(".intro__link a").text("Узнать подробнее о продвижение сайтов").attr("href", "website_promotion.html");
    $(".intro__link").show();
    $("#link__image__shadow").removeClass("website-development || form-style-img || logo-development");
  });

  $("#form-style-img").on("click", function (){
    $("#link__image__shadow").addClass("form-style-img");
    $("#nav__namber").html("<h4>03/<span>04</span></h4>");
    $(".intro__link a").text("Узнать подробнее о фирменном стиле").attr("href", "form_style.html");
    $(".intro__link").show();
    $("#link__image__shadow").removeClass("website-development || website-promotion || logo-development");
  });

  $("#logo-development").on("click", function (){
    $("#link__image__shadow").addClass("logo-development");
    $("#nav__namber").html("<h4>04/<span>03</span></h4>");
    $(".intro__link a").text("Узнать подробнее о разработке логотипа").attr("href", "logo_development.html");
    $(".intro__link").show();
    $("#link__image__shadow").removeClass("website-development || website-promotion || form-style-img");
  });

  // Открытие формы вам перезвонить

  $("#header__send__button, #main__send__link").on("click", function (){
    $("#form-call-back").show("1000");
  });
  $(".close_form").on("click", function (){
    $("#form-call-back").hide("1000");
  });

  // Подчеркивание текста под проектом

  $(".project").hover(function (){
    $(this).find("~ h4").css("text-decoration", "underline")
  }, function (){
    $(this).find("~ h4").css("text-decoration", "none")
  });

  $(".project").hover(function (){
    $(this).find("~ a").css("text-decoration", "underline")
  }, function (){
    $(this).find("~ a").css("text-decoration", "none")
  });

  // Меняеться вектор при наведение
  $(".project__all__link").hover(function (){
    $(".vector-right").hide();
    $(".vector-right-color").show();
  }, function (){
    $(".vector-right-color").hide();
    $(".vector-right").show();
  });

  //Убираем текст с формы проекта при нажатие

  $("#form_send_project_name, #form_send_project_tel-emeil").focus(function (){
    $(this).val(" ");
  });

  // form-style выпадающий список

    $('.sub-a').click(function(){
      $('.submenu').slideUp();
       if ($(this).next().is(":visible")){
           $(this).next().slideUp();
       } else {
       $(this).next().slideToggle();
       }
      return false;
    });
       $('.form-style__item > a').click(function(){
	   $('.form-style__item > a, .sub-a').removeClass('active');
	   $(this).addClass('active');
	}),
       $('.submenu li').click(function(){
	   $('.submenu li').removeClass('active');
	   $(this).addClass('active');
	});

  // Кнопка переключения города

  $(".button__petersburg").click(function (){
    $(".address__syktyvkar").hide();
    $(".address__petersburg").show();
    $(".button__syktyvkar").removeClass("active");
    $(".button__petersburg").addClass("active");
    $(".town__button__petersburg").css("z-index", "0");
  });
  $(".button__syktyvkar").click(function (){
    $(".address__syktyvkar").show();
    $(".address__petersburg").hide();
    $(".button__syktyvkar").addClass("active");
    $(".button__petersburg").removeClass("active");
    $(".town__button__petersburg").css("z-index", "-1")
  });

  // При наведение на сойиальные сети

  $(".instagram").hover(function (){
    $(".instagram").attr("src", "img/instagram-hover.png");
  },function (){
    $(".instagram").attr("src", "img/instagram.png");
  });
  $(".vk").hover(function (){
    $(".vk").attr("src", "img/vk-hover.png");
  },function (){
    $(".vk").attr("src", "img/vk.png");
  });

  // Маска для телефона

  $(function(){
    $("#form-request-phone").mask("+7(999) 999-9999");
  });

});
