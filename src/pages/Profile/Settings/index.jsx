/**
 * Страница подраздела профиля с настройками (настройки)
 */

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ProfileLayout from '../../../layouts/ProfileLayout';
import CheckboxInput from '../../../ui/inputs/CheckboxInput';
import DateInput from '../../../ui/inputs/DateInput';
import EmailInput from '../../../ui/inputs/EmailInput';
import ReadonlyInput from '../../../ui/inputs/ReadonlyInput';
import TextInput from '../../../ui/inputs/TextInput';
import SuccessMessage from '../../../ui/messages/SuccessMessage';
import AnimatedPage from '../../../utils/AnimatedPage';

const Settings = () => {
  const [showMessage, setShowMessage] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: 'onBlur' });

  const onSubmit = (data) => {
    setShowMessage(true);
    reset();
    console.log(data);
  };

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  const content = (
    <AnimatedPage>
      {showMessage && <SuccessMessage />}
      <div className='settings-container'>
        <h1 className='common-profile-title'>Настройки профиля</h1>

        <form className='form' onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            title={'Имя'}
            placeholder={'Имя'}
            name={'firstName'}
            errors={errors}
            register={register}
          />
          <TextInput
            title={'Фамилия'}
            placeholder={'Фамилия'}
            name={'lastName'}
            errors={errors}
            register={register}
          />
          <DateInput
            title={'Дата рождения'}
            name={'dateOfBirth'}
            errors={errors}
            register={register}
          />
          <EmailInput
            title={'Эл. почта'}
            name={'email'}
            placeholder={'olga@ivolga.com'}
            errors={errors}
            register={register}
          />

          <ReadonlyInput title={'Телефон'} placeholder={'+7 (977) 184-20-72'} />

          <div className='form-checkbox'>
            <CheckboxInput
              name={'agreement'}
              text={'Я даю согласие на обработку персональных данных'}
              errors={errors}
              register={register}
            />
          </div>

          <button className='settings-submit__button' type='submit' disabled={!isValid}>
            Сохранить
          </button>
        </form>
      </div>
    </AnimatedPage>
  );

  return <ProfileLayout content={content} />;
};

export default Settings;
