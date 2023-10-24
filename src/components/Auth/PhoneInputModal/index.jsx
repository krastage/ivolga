/**
 * Модальное окно ввода номера телефона
 */

import React from 'react';
import InputMask from 'react-input-mask';

const PhoneInputModal = ({
  authActive,
  setAuthActive,
  phoneNumber,
  phoneNumberHandle,
  isButtonActive,
  sendVerificationCode,
}) => {
  return (
    <div
      className={authActive ? 'modal-right active' : 'modal-right'}
      onClick={() => setAuthActive(false)}>
      <div className='modal-right-content' onClick={(e) => e.stopPropagation()}>
        <div className='modal-right-heading'>
          <p>Вход в аккаунт</p>
          <button onClick={() => setAuthActive(false)}>
            <img
              src='/assets/img/icons/close.svg'
              alt='close'
              className='modal-right-heading__button'
            />
          </button>
        </div>
        <div className='auth-modal-title'>
          <h1 className='auth-modal-title__heading'>Войти или зарегистрироваться</h1>
          <p>Мы отправим на номер SMS-сообщение с кодом подтверждения.</p>
        </div>

        <div className='auth-modal-login__input'>
          <p>Ваш номер телефона</p>
          <InputMask
            mask='+7 (999) 999-99-99'
            type='text'
            className='input'
            placeholder='+7 (___) ___-__-__'
            value={phoneNumber}
            onChange={phoneNumberHandle}
          />
        </div>

        <button
          className='auth-modal-buttons__auth'
          disabled={!isButtonActive}
          onClick={sendVerificationCode}>
          Получить код
        </button>
      </div>
    </div>
  );
};

export default PhoneInputModal;
