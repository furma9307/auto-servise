// Бургер-меню
const burgerBtn = document.getElementById('burgerBtn');
const nav = document.getElementById('nav');

if (burgerBtn) {
  burgerBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}

// Интерактивный калькулятор стоимости
const checkboxes = document.querySelectorAll('.calc-checkbox');
const totalPriceElem = document.getElementById('totalPrice');
const orderBtn = document.getElementById('orderBtn');

if (checkboxes.length > 0) {
  function calculateTotal() {
    let total = 0;
    checkboxes.forEach(box => {
      if (box.checked) {
        total += Number(box.value);
      }
    });
    totalPriceElem.textContent = total.toLocaleString() + ' ₽';
  }

  checkboxes.forEach(box => {
    box.addEventListener('change', calculateTotal);
  });
}

if (orderBtn) {
  orderBtn.addEventListener('click', () => {
    alert('Спасибо! Ваша заявка принята, мы свяжемся с вами для подтверждения записи.');
  });
}

// Формы контактов
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Заявка на звонок отправлена!');
    contactForm.reset();
  });
}