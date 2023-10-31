/**
 * Блок получатель
 */

import React from 'react';
import { useForm } from 'react-hook-form';
import CheckboxInput from '../../../../../ui/inputs/checkbox/CheckboxInput';
import PhoneInput from '../../../../../ui/inputs/number/PhoneInput';
import EmailInput from '../../../../../ui/inputs/text/EmailInput';
import TextInput from '../../../../../ui/inputs/text/TextInput';
import AnimatedPage from '../../../../../utils/AnimatedPage';
import ScrollToTop from '../../../../../utils/ScrollToTop';

const Recipient = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <ScrollToTop />
      <AnimatedPage>
        <form onSubmit={handleSubmit(onSubmit)}>
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

            <EmailInput
              title={'Эл. почта'}
              name={'email'}
              placeholder={'olga@ivolga.com'}
              errors={errors}
              register={register}
            />

            <PhoneInput
              title={'Ваш номер телефона'}
              name={'phone'}
              errors={errors}
              register={register}
            />

            <CheckboxInput
              name={'agreement'}
              text={'Я даю согласие на обработку персональных данных'}
              errors={errors}
              register={register}
            />
          </div>
        </form>
      </AnimatedPage>
    </>
  );
};

export default Recipient;
