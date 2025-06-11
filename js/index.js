document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.filter-tabs__btn');
  const products = document.querySelectorAll('.products__card');

  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.header__nav');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('header__nav--active');
  });

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('filter-tabs__btn--active'));
      tab.classList.add('filter-tabs__btn--active');

      const filter = tab.getAttribute('data-filter');

      products.forEach((prod) => {
        const categories = prod.getAttribute('data-category').split(' ');

        if (filter === 'all') {
          prod.style.display = 'block';
        } else {
          prod.style.display = categories.includes(filter) ? 'block' : 'none';
        }
      });
    });
  });

  document.querySelectorAll('.products__colors').forEach((colorGroup) => {
    const buttons = colorGroup.querySelectorAll('.products__color');

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        buttons.forEach((btn) =>
          btn.classList.remove('products__color--active')
        );
        button.classList.add('products__color--active');
      });
    });
  });

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 3000, // время между слайдами в мс (здесь 3 секунды)
      disableOnInteraction: false, // не останавливать после взаимодействия
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});
