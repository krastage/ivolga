const saveAddressCheckbox = document.querySelector('#address-save');

if (saveAddressCheckbox) {
  saveAddressCheckbox.addEventListener('click', () => {
    document.querySelector('.address-save__input').readOnly = !saveAddressCheckbox.checked;
    document.querySelector('.address-save__button').disabled = !saveAddressCheckbox.checked;
  });
}

const chapterButtons = document.querySelectorAll('.configuration');
if (chapterButtons.length > 0) {
  chapterButtons.forEach((chapterButton) => {
    chapterButton.addEventListener('click', () => {
      const container = chapterButton.closest('.checkout-config');
      if (container.classList.contains('active')) {
        container.classList.remove('active');
        return;
      }
      
      setTimeout(() => {
        window.scrollTo({
          top: chapterButton.offsetTop - (document.querySelector('.main-header').offsetHeight + 10),
          behavior: 'smooth' // Добавляем smooth для плавной прокрутки
        });
      }, document.querySelector('.checkout-config.active') ? 400 : 100);
      document.querySelector('.checkout-config.active')?.classList.remove('active');
      container.classList.add('active');

      
    });
  });
}

const orderTypeButtons = document.querySelectorAll('.delivery-button');

if (orderTypeButtons.length > 0) {
  orderTypeButtons.forEach((orderTypeButton) => {
    orderTypeButton.addEventListener('click', (evt) => {
      evt.preventDefault();

      if (orderTypeButton.classList.contains('active')) {
        return;
      }
      const type = orderTypeButton.dataset.type;
      const container = document.querySelector('.configuration-content');
      removeAllClassesExceptOne(container, 'configuration-content');
      container.classList.add(type);
      document.querySelector('.delivery-button.active').classList.remove('active');
      orderTypeButton.classList.add('active');
    });
  });
}

function removeAllClassesExceptOne(element, classToKeep) {
  // Получаем список всех классов элемента
  const classes = element.classList;

  // Преобразуем список классов в массив для удобства обработки
  const classesArray = Array.from(classes);

  // Итерируем по массиву классов и удаляем все классы, кроме classToKeep
  classesArray.forEach((className) => {
    if (className !== classToKeep) {
      element.classList.remove(className);
    }
  });
}

const viewTypeButtons = document.querySelectorAll('.address-content__controller');

if (viewTypeButtons.length > 0) {
    viewTypeButtons.forEach((viewTypeButton) => {
        viewTypeButton.addEventListener('click', (evt) => {
            evt.preventDefault();
            const activeEl = document.querySelector('.address-content__controller.active');
            const viewType = evt.target.dataset.viewType;
            const container = document.querySelector('.address-right .modal-right-content');
            activeEl.classList.remove('active');
            evt.target.classList.add('active');

            removeAllClassesExceptOne(container, 'modal-right-content');

            container.classList.add(viewType);
        });
    });
}