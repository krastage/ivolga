/**
 * Модальное окно ввода кода из смс (верификация)
 */

import React from 'react';

const VerificationModal = ({
  authActive,
  setAuthActive,
  toggleVerification,
  sentPhoneNumber,
  isCodeValid,
  verificationCode,
  verificationCodeHandle,
  resendTimer,
  isButtonActive,
  submitVerificationCode,
  isResendButtonActive,
  resendCodeHandle,
}) => {
  return (
    <div
      className={authActive ? 'modal-right active' : 'modal-right'}
      onClick={() => setAuthActive(false)}>
      <div className='modal-right-content' onClick={(e) => e.stopPropagation()}>
        <div className='modal-right-heading'>
          <button className='back-button' onClick={toggleVerification}>
            <img src='/assets/img/icons/arrow-left.svg' alt='' />
            <p>Назад</p>
          </button>
          <button onClick={() => setAuthActive(false)}>
            <img
              src='/assets/img/icons/close.svg'
              alt='close'
              className='modal-right-heading__button'
            />
          </button>
        </div>
        <div className='auth-modal-title'>
          <h1 className='auth-modal-title__heading'>Подтвердите номер</h1>
          <p>Мы отправили код на номер {sentPhoneNumber}</p>
        </div>

        <div className='auth-modal-login__input'>
          <p>Код из SMS</p>
          <input
            type='text'
            className={`input ${isCodeValid ? '' : 'input-error'}`}
            placeholder='----'
            value={verificationCode}
            onChange={verificationCodeHandle}
            maxLength='4'
          />
          {!isCodeValid && <p className='error-message'>Неверный код</p>}
          <p className='auth-modal-login__input-info'>
            Код отправлен, запросить повторный код можно через {resendTimer} сек.
          </p>
        </div>

        <div className='auth-modal-buttons'>
          <button
            className='auth-modal-buttons__auth'
            disabled={!isButtonActive || verificationCode.length !== 4}
            onClick={submitVerificationCode}>
            Подтвердить телефон
          </button>
          <button
            className='auth-modal-buttons__auth'
            disabled={isResendButtonActive || resendTimer > 0}
            onClick={resendCodeHandle}>
            Получить код повторно
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerificationModal;
