/**
 * Модальное окно ввода номера телефона
 */

import React from 'react';
import { useForm } from 'react-hook-form';
import PhoneInput from '../../../ui/inputs/PhoneInput';

const PhoneInputModal = ({ authActive, setAuthActive, sendVerificationCode }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = (data) => {
    console.log(data);
  };

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

        <form className='form' onSubmit={handleSubmit(onSubmit)}>
          <div className='form__container'>
            <div className='auth-modal-login__input'>
              <PhoneInput
                title={'Ваш номер телефона'}
                name={'phone'}
                errors={errors}
                register={register}
              />
            </div>

            <button
              className='settings-submit__button'
              type='submit'
              disabled={!isValid}
              onClick={sendVerificationCode}>
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PhoneInputModal;
