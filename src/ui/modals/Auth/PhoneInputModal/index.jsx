/**
 * Модальное окно ввода номера телефона
 */

import React from 'react';
import { useForm } from 'react-hook-form';
import CloseButton from '../../../buttons/CloseButton';
import PrimaryButton from '../../../buttons/PrimaryButton';
import PhoneInput from '../../../inputs/number/PhoneInput';

const PhoneInputModal = ({ authActive, setAuthActive, setIsVerificationComponentActive }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = () => {
    setIsVerificationComponentActive(true);
  };

  return (
    <div
      className={authActive ? 'modal-right active' : 'modal-right'}
      onClick={() => setAuthActive(false)}>
      <div className='modal-right-content' onClick={(e) => e.stopPropagation()}>
        <div className='modal-right-heading'>
          <p>Вход в аккаунт</p>
          <CloseButton onClick={() => setAuthActive(false)} />
        </div>
        <div className='auth-modal-title'>
          <h1 className='auth-modal-title__heading'>Войти или зарегистрироваться</h1>
          <p>Мы отправим на номер SMS-сообщение с кодом подтверждения.</p>
        </div>

        <form className='form form--gap' onSubmit={handleSubmit(onSubmit)}>
          <PhoneInput
            title={'Ваш номер телефона'}
            name={'phone'}
            errors={errors}
            register={register}
          />

          <PrimaryButton type={'submit'} disabled={!isValid} label={'Сохранить'} />
        </form>
      </div>
    </div>
  );
};

export default PhoneInputModal;
