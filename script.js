const faqItem = document.querySelectorAll('.faq__item__title');

faqItem.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
    if (item.classList.contains('active')) {
      item.nextElementSibling.style.maxHeight = item.nextElementSibling.scrollHeight + 'px';
    } else {
      item.nextElementSibling.style.maxHeight = 0;
    }
  });
});