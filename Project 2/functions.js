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

  document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Запобігаємо перезавантаженню сторінки

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && subject && message) {
    this.style.display = 'none'; // Ховаємо форму
  }
});
