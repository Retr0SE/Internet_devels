$(document).ready(function(){
  $('.slider').slick({
      infinite: true,
      dots: false,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 1500,
      prevArrow: $('.prev-arrow'),
      nextArrow: $('.next-arrow')
  });
});
/* Зворотній зв'язок */
document.addEventListener('DOMContentLoaded', function() {
  const feedbackLink = document.querySelector('.feedback');
  const formContainer = document.getElementById('contact-form-container');

  if (!feedbackLink || !formContainer) {
    console.error('Не знайдено кнопку або контейнер форми.');
    return;
  }

  feedbackLink.addEventListener('click', function(event) {
    event.preventDefault();

    if (formContainer.innerHTML.trim() !== '') {
      formContainer.style.display = 'flex';
      return;
    }

    const form = document.createElement('form');
    form.className = 'contact-form';

    const heading = document.createElement('h2');
    heading.textContent = 'Зворотній зв`язок';
    form.appendChild(heading);

    const fields = [
      { placeholder: "Ваше ім'я", type: 'text', className: 'contact-form__input' },
      { placeholder: 'Телефон', type: 'text', className: 'contact-form__input' },
      { placeholder: 'Email', type: 'email', className: 'contact-form__input' }
    ];

    fields.forEach(field => {
      const input = document.createElement('input');
      input.type = field.type;
      input.placeholder = field.placeholder;
      input.className = field.className;
      form.appendChild(input);
    });

    const textarea = document.createElement('textarea');
    textarea.placeholder = 'Повідомлення';
    textarea.rows = 4;
    textarea.className = 'contact-form__textarea';
    form.appendChild(textarea);

    const button = document.createElement('button');
    button.type = 'submit';
    button.textContent = 'ВІДПРАВИТИ';
    button.className = 'contact-form__button';
    form.appendChild(button);

    // Ваша власна кнопка закриття з картинкою
    const customCloseButton = document.createElement('button');
    customCloseButton.className = 'contact-form__close';
    
    // Створюємо елемент <img> для кнопки закриття
    const closeImage = document.createElement('img');
    closeImage.src = 'img/icon_close.svg'; // Вкажіть шлях до вашої картинки
    closeImage.alt = 'Закрити';
    closeImage.style.width = '10px'; // Ви можете задати бажаний розмір
    closeImage.style.height = '10px'; // Ви можете задати бажаний розмір
    customCloseButton.appendChild(closeImage);

    // Позиціювання кнопки, щоб вона виходила за межі
    customCloseButton.style.position = 'absolute';
    customCloseButton.style.top = '-20px';
    customCloseButton.style.right = '-20px'; // Виводимо кнопку за межі
    customCloseButton.style.cursor = 'pointer';
    customCloseButton.style.border = 'none'; // Виглядає краще без рамки
    customCloseButton.style.background ='#ccc'; // Прозорий фон для кнопки
    form.appendChild(customCloseButton);

    customCloseButton.addEventListener('click', function() {
      formContainer.style.display = 'none';
    });

    formContainer.appendChild(form);
    formContainer.style.display = 'flex';
  });
});

/* Бургер меню */
const burger = document.querySelector('.burger-menu');
const menuList = document.querySelector('.menu-list');

burger.addEventListener('click', () => {
  menuList.classList.toggle('active');
});

// Закрити меню при кліку на пункт
document.querySelectorAll('.menu-item a').forEach(link => {
  link.addEventListener('click', () => {
    menuList.classList.remove('active');
  });
});

// Закрити меню при кліку поза меню
document.addEventListener('click', (e) => {
  if (!e.target.closest('.menu') && menuList.classList.contains('active')) {
    menuList.classList.remove('active');
  }
});
// Підсписок
document.addEventListener('DOMContentLoaded', function () {
  const categories = document.querySelectorAll('.category');

  categories.forEach(category => {
    category.addEventListener('click', function () {
      const subCategory = this.querySelector('.sub-category');
      if (subCategory.style.display === 'block') {
        subCategory.style.display = 'none'; // Закриваємо підкатегорії
      } else {
        subCategory.style.display = 'block'; // Відкриваємо підкатегорії
      }
    });
  });
});
