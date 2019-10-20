$(document).ready(function(){

  // NAVIGATION MENU

  $('.nav_sub').hover(
  	function(){
  		if ($('> a',this).attr('class') != 'active'){
  		$('.nav_sub ul').slideUp();
  		$('a',this).next().slideToggle();
  		$('.header_nav > ul > li > a').removeClass('active');
  		$('> a',this).addClass('active');
  		}
  	},
  	function(){
  		$('.nav_sub ul').slideUp();
  		$('.nav_sub_link > a').removeClass('active');
  	});
  $('.nav_sub_link > a').click(function(){
    $('.nav_sub_link > a').removeClass('active');
    $(this).addClass('active');
  });


  // SHOW AND HIDE FEEDBACK


  $("#show_feedback, .btn-footer").on('click', function () {
    $(".form_feedback, .background-dark").show();
  });
  $(".close_img").on('click', function () {
    $(".form_feedback, .background-dark").hide();
  });


  // NAVIGATION IN THE PRICE

  $(".link-price-1").on('click', function(){
    $(this).addClass("active");
    $(".link-price-2, .link-price-3, .link-price-4, .link-price-5").removeClass('active')
    $('.price-1').show();
    $('.price-2, .price-3, .price-4').hide();
  });
  $(".link-price-2").on('click', function(){
    $(this).addClass("active");
    $(".link-price-1, .link-price-3, .link-price-4, .link-price-5").removeClass('active')
    $('.price-2').show();
    $('.price-1, .price-3, .price-4').hide();
  });
  $(".link-price-3").on('click', function(){
    $(this).addClass("active");
    $(".link-price-1, .link-price-2, .link-price-4, .link-price-5").removeClass('active')
    $('.price-2').show();
    $('.price-1, .price-3, .price-4').hide();
  });
  $(".link-price-4").on('click', function(){
    $(this).addClass("active");
    $(".link-price-1, .link-price-2, .link-price-3, .link-price-5").removeClass('active')
    $('.price-3').show();
    $('.price-1, .price-2, .price-4').hide();
  });
  $(".link-price-5").on('click', function(){
    $(this).addClass("active");
    $(".link-price-1, .link-price-2, .link-price-3, .link-price-4").removeClass('active')
    $('.price-4').show();
    $('.price-1, .price-2, .price-3').hide();
  });

  // SHOW AND HIDE ORDER

  $(".btn-price").on('click', function () {
    $(".form_order, .background-dark").show();
  });
    $(".close_img").on('click', function () {
  $(".form_order, .background-dark").hide();
  });

});
