$(document).ready(function(){
  $('.slider').slick({
      infinite: true,
      dots: true,
      autoplay: false,
      autoplaySpeed: 1500,
      arrows:false,
      customPaging: function(slider, i){
        return '<button class="custom-dot"></button>';
      }
  });
});