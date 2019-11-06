$(document).ready(function(){

  // CHANGE NUMBER FILTER CATALOG

  var catalogListTea = $('.catalog__item-tea').length;
  $('#catalog__list_number-tea').text(catalogListTea);

  var catalogListYagody = $('.catalog__item-yagody').length;
  $('#catalog__list_number-yagody').text(catalogListYagody);

  var catalogListChaga = $('.catalog__item-chaga').length;
  $('#catalog__list_number-chaga').text(catalogListChaga);

  var catalogListHerbs = $('.catalog__item-herbs').length;
  $('#catalog__list_number-herbs').text(catalogListHerbs);

  var catalogListSets = $('.catalog__item-sets').length;
  $('#catalog__list_number-sets').text(catalogListSets);

  $(".catalog_btn").click(function() {
  $(".catalog_btn").removeClass('active');
  $(this).addClass('active');

  $('.catalog__list').removeClass('catalog__list-active');
  $($(this).attr('data-class')).addClass('catalog__list-active');
  });
  $('#filter_btn-show-all').on('click', function(){
    $('.catalog__list').addClass('catalog__list-active');
});

  // SLIDER

  $('.slider__list').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth:true,
        infinity:true,
        speed: 300,
        arrows: false,
        asNavFor: '.slider__list-text',

  });

  $('.slider__list-text').slick({
        slidesToShow: 1,
        slidesToScroll: 3,
        adaptiveHeight:true,
        variableWidth:true,
        infinity:true,
        speed: 300,
        arrows: true,
        asNavFor: '.slider__list',
        nextArrow: $(".slider_btn-next"),
        prevArrow: $(".slider_btn-prev"),
  });



  // ABOUT technology

  $('.about-production_btn-certificate').on('click', function(){
    $('.technology').hide();
    $('.certificate').show();
  });
  $('.about-production_btn-technology').on('click', function(){
    $('.technology').show();
    $('.certificate').hide();
  });

  // LIST ITEM FADE AND SHOW

  $('.change__address__sub-a').click(function(){
    $('.change__address__list_item').slideUp();
     if ($(this).next().is(":visible")){
         $(this).next().slideUp();
     } else {
     $(this).next().slideToggle();
     }
    return false;
  });
  $('.change__address__item > a').click(function(){
    $('.change__address__item > a, change__address__sub-a').removeClass('active');
    $(this).addClass('active');
  }),
  $('.change__address__list_item li').click(function(){
    $('.change__address__list_item li').removeClass('active');
    $(this).addClass('active');
  });

  // SHOW FORM ABOUT PRODUCTS

  $('.catalog__item_btn').click(function(){
    $('.background-black').removeClass('background-black-active');
    $($(this).attr('data-id')).addClass('background-black-active');
  });

  // FORM ABOUT PRODUCTS

  $('.form_close').click(function(){
    $('.background-black').removeClass('background-black-active');
    $('.form__order').removeClass('form__order-active');
    $('.raz').attr("value", "1");
  });
  $('.card-product_btn').click(function(){
    $('.form__order').addClass('form__order-active');
  });

  // FILTER BTN

  $('.second_button').click(function(){
    $('.second_button').removeClass('active');
    $(this).addClass('active');
    });

  // map
  mapboxgl.accessToken = 'pk.eyJ1Ijoic2wxbWVuZXQiLCJhIjoiY2syYzZ2MnoxMDJ3azNvcWJoY2N0c2FrOSJ9.w0PEr3iSc-e84IafDBe1Ew';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [50.8220, 61.6650],
    zoom: 12,

  });



//  DIV markers
  var geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [50.8220, 61.6650]
    },
    properties: {
      title: 'Mapbox',
      description: 'Washington, D.C.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [50.8320, 61.6650]
    },
    properties: {
      title: 'Mapbox',
      description: 'San Francisco, California'
    }
  }]
};


// add markers to map
geojson.features.forEach(function(marker) {

// create a HTML element for each feature
var el = document.createElement('div');
el.className = 'marker';

// make a marker for each feature and add to the map
new mapboxgl.Marker(el)
  .setLngLat(marker.geometry.coordinates)
  .addTo(map);
});


});
