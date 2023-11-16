/**
 * Страница профиля
 */

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import '../../../../../styles/Profile.scss';
import AnimatedPage from '../../../../utils/AnimatedPage';
import PrimaryButton from '../../../../ud-ui/buttons/PrimaryButton';
import CheckboxInput from '../../../../ud-ui/inputs/checkboxes/CheckboxInput';
import SuccessMessage from '../../../../ud-ui/messages/SuccessMessage';
import ProfileLayout from '../../index';

const Profile = () => {
  const [showMessage, setShowMessage] = useState(false);
  const {
    reset, register, handleSubmit, formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data) => {
    setShowMessage(true);
    reset();
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
      <div className='profile-container'>
        <div className='profile-info'>
          <h1 className='common-profile-title'>Ольга Малюга</h1>
          <div className='profile-info__loyalty'>
            <p>Программа лояльности</p>
            <p>№32542552</p>
          </div>
          <div className='profile-info__discount'>
            <p>Скидка по программе</p>
            <p>-5%</p>
          </div>
        </div>

        <div className='profile-news'>
          <h1 className='profile-news__title'>Новостная рассылка</h1>
          <p className='profile-news__description'>
            Получайте новости об актуальный акциях и специальных коллекциях
            бренда Ivolga
          </p>
        </div>

        <form
          className='form form--gap'
          onSubmit={handleSubmit(onSubmit)}>

          <CheckboxInput
            name={'agreement'}
            text={'Я не хочу получать новостную рассылку от магазина Ivolga'}
            errors={errors}
            register={register}
          />

          <PrimaryButton
            type={'submit'}
            disabled={!isValid}
            label={'Отписаться'}
          />

        </form>
      </div>
    </div>
  </AnimatedPage>);

  return <ProfileLayout content={content} />;
};

export default Profile;
