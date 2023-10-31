/**
 * Модальное окно входа
 */

import React from 'react';
import CloseButton from '../../../buttons/CloseButton';
import PrimaryButton from '../../../buttons/PrimaryButton';
import PrimaryButtonActive from '../../../buttons/PrimaryButtonActive';

const LoginModal = ({ authActive, setAuthActive, toggleLogin }) => {
  return (
    <div
      className={authActive ? 'modal-right active' : 'modal-right'}
      onClick={() => setAuthActive(false)}>
      <div className='modal-right-content' onClick={(e) => e.stopPropagation()}>
        <div className='modal-right-heading'>
          <p>Вход</p>
          <CloseButton onClick={() => setAuthActive(false)} />
        </div>

        <div className='auth-modal-title'>
          <h1 className='auth-modal-title__heading'>Войдите в аккаунт или продолжите как гость</h1>
          <p>
            Зарегистрируйтесь или войдите в свой аккаунт, чтобы воспользоваться программой
            лояльности
          </p>
        </div>

        <div className='auth-modal-buttons'>
          <PrimaryButtonActive onClick={toggleLogin} label={'Войти / Зарегистрироваться'} />

          <PrimaryButton onClick={() => setAuthActive(false)} label={'Продолжить как гость'} />
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
