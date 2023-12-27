import { startPhoneMask } from '../plugins/PENGUIN-mask/penguin-mask';

const body = document.querySelector('body');

const paddingTop = `${document.querySelector('.main-header').offsetHeight}px`;
body.style.paddingTop = paddingTop;
root.style.setProperty('--padding-top', paddingTop);

const modalButtons = body.querySelectorAll('.modal-button');
const closeButtons = body.querySelectorAll('.close-button');

modalButtons.forEach((modalButton) => {
  modalButton.addEventListener('click', () => {
    const modal = body.querySelector(modalButton.dataset.src);

    if (modalButton.classList.contains('nav-mobile-btn')) {
      console.log(3);
      if (modal.classList.contains('active')) {
        modal.classList.remove('active');
        body.classList.remove('modal-open');
      } else {
        body.querySelector('.modal-right.active')?.classList.remove('active');
        modal.classList.add('active');
        body.classList.add('modal-open');
      }
      modalButton.classList.toggle('active');
      return;
    }

    if (modal.classList.contains('active')) {
      return;
    }
    body.querySelector('.modal-right.active')?.classList.remove('active');
    modal.classList.add('active');
    body.classList.add('modal-open');
  });
});

closeButtons.forEach((closeButton) => {
  closeButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    closeButton.closest('.modal-right').classList.remove('active');
    body.classList.remove('modal-open');
  });
});

window.addEventListener('click', (evt) => {
  const target = evt.target;

  if (target.closest('.modal-right-content') || target.closest('.modal-button')) {
    return;
  }

  body.querySelector('.modal-right.active')?.classList.remove('active');
  body.classList.remove('modal-open');
});

document.querySelector('.auth-modal-buttons .primary-button').addEventListener('click', () => {
  body.querySelector('.modal-right.active')?.classList.remove('active');
  body.classList.remove('modal-open');
});

document
  .querySelector('.auth-modal-buttons .primary-button-active')
  .addEventListener('click', () => {
    document.querySelector('.profile-modal__step--1').classList.add('hide');
    document.querySelector('.profile-modal__step--2').classList.remove('hide');
  });

startPhoneMask();

const mobileProfileInput = document.querySelector('.mobile-phone-input');
mobileProfileInput.addEventListener('input', () => {
  mobileProfileInput.closest('form').querySelector('.primary-button').disabled =
    !mobileProfileInput.classList.contains('validated');
});

mobileProfileInput
  .closest('form')
  .querySelector('.primary-button')
  .addEventListener('click', (evt) => {
    evt.preventDefault();
    document.querySelector('.profile-modal__step--2').classList.add('hide');
    document.querySelector('.profile-modal__step--3').classList.remove('hide');
  });

document.querySelector('.profile-modal .back-button').addEventListener('click', () => {
  document.querySelector('.profile-modal__step--3').classList.add('hide');
  document.querySelector('.profile-modal__step--2').classList.remove('hide');
});

const codeProfileInput = document.querySelector('#verificationCode');
codeProfileInput.addEventListener('input', () => {
  if (codeProfileInput.value == '1234') {
    codeProfileInput.closest('form').querySelector('.primary-button').classList.remove('disabled');
  } else {
    codeProfileInput.closest('form').querySelector('.primary-button').classList.add('disabled');
  }
});

const agreeCheckbox = document.querySelector('#personal-agreement');
if (agreeCheckbox) {
  agreeCheckbox.addEventListener('click', () => {
    agreeCheckbox.closest('form').querySelector('button[type=submit]').disabled =
      !agreeCheckbox.checked;
  });
}

const addAddressInputs = document.querySelectorAll('.address-add-container .text-field');
const addAddressButton = document.querySelector('.address-add-container button[type=submit]');
if (addAddressInputs.length > 0) {
  addAddressInputs.forEach((addAddressInput) => {
    addAddressInput.addEventListener('input', () => {
      const errors = [];
      addAddressInputs.forEach((el) => {
        if (!el.value) {
          errors.push('1');
        }
      });

      addAddressButton.disabled = errors.length > 0;
    });
  });
}

