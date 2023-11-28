/**
 * Страница подраздела профиля с настройками (настройки)
 */

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import '../../../../../styles/_forms.scss';
import AnimatedPage from '../../../../utils/AnimatedPage';
import PrimaryButton from '../../../../ud-ui/buttons/PrimaryButton';
import CheckboxInput from '../../../../ud-ui/inputs/checkboxes/CheckboxInput';
import DateInput from '../../../../ud-ui/inputs/date/DateInput';
import EmailInput from '../../../../ud-ui/inputs/text/EmailInput';
import ReadonlyInput from '../../../../ud-ui/inputs/text/ReadonlyInput';
import TextInput from '../../../../ud-ui/inputs/text/TextInput';
import SuccessMessage from '../../../../ud-ui/messages/SuccessMessage';
import ProfileLayout from '../../index';

const Settings = () => {
  const [showMessage, setShowMessage] = useState(false);
  const {
    handleSubmit, register, formState: { errors, isValid }, reset,
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

  const content = (<AnimatedPage>
    {showMessage && <SuccessMessage />}
    <div className='right-container'>
      <div className='settings-container'>
        <h1 className='common-profile-title'>Настройки профиля</h1>

        <form className='form'
              onSubmit={handleSubmit(onSubmit)}>
          <div className='form__container'>
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

            <ReadonlyInput
              title={'Телефон'}
              placeholder={'+7 (977) 184-20-72'}
            />

          </div>

          <div className='form__bottom-container'>
            <div className='form-checkbox'>
              <CheckboxInput
                name={'personal-agreement'}
                text={'Я даю согласие на обработку персональных данных'}
                errors={errors}
                register={register}
              />
            </div>

            <PrimaryButton
              type={'submit'}
              disabled={!isValid}
              label={'Сохранить'}
            />

          </div>
        </form>
      </div>
    </div>
  </AnimatedPage>);

  return <ProfileLayout content={content} />;
};

export default Settings;
