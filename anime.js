document.querySelectorAll('.faq__questions').forEach((faq) => {
    const toggleButton = faq.querySelector('.faq__toggle-button');
    toggleButton.addEventListener('click', () => {
        faq.classList.toggle('open'); // Добавляем/убираем класс "open"
    });
});