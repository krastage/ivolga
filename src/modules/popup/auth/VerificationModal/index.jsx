/**
 * Модальное окно ввода кода из смс (верификация)
 */

import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../../../ui/buttons/BackButton';
import CloseButton from '../../../../ui/buttons/CloseButton';
import PrimaryButton from '../../../../ui/buttons/PrimaryButton';
import CodeInput from '../../../../ui/inputs/number/CodeInput';

const VerificationModal = ({
  authActive,
  setAuthActive,
  toggleVerification,
  sentPhoneNumber,
  resendTimer,
  isResendButtonActive,
  resendCodeHandle,
  setIsAuthorized,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onSubmit' });
  const navigation = useNavigate();

  const onSubmit = () => {
    navigation('/profile');
    setAuthActive(false);
    setIsAuthorized(true);
  };

  return (
    <div
      className={authActive ? 'modal-right active' : 'modal-right'}
      onClick={() => setAuthActive(false)}>
      <div className='modal-right-content' onClick={(e) => e.stopPropagation()}>
        <div className='modal-right-heading'>
          <BackButton onClick={toggleVerification} />
          <CloseButton onClick={() => setAuthActive(false)} />
        </div>
        <div className='auth-modal-title'>
          <h1 className='auth-modal-title__heading'>Подтвердите номер</h1>
          <p>Мы отправили код на номер {sentPhoneNumber}</p>
        </div>

        <form className='form form--gap' onSubmit={handleSubmit(onSubmit)}>
          <CodeInput
            title={'Код из SMS'}
            name={'verificationCode'}
            errors={errors}
            register={register}
          />

          <div className='auth-modal-buttons'>
            <PrimaryButton type={'submit'} disabled={!isValid} label={'Подтвердить телефон'} />

            <PrimaryButton
              type={'button'}
              disabled={isResendButtonActive || resendTimer > 0}
              onClick={resendCodeHandle}
              label={'Получить код повторно'}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerificationModal;
