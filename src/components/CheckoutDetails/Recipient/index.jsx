import React from 'react';
import { useForm } from 'react-hook-form';
import CheckboxInput from '../../../ui/inputs/CheckboxInput';
import EmailInput from '../../../ui/inputs/EmailInput';
import PhoneInput from '../../../ui/inputs/PhoneInput';
import TextInput from '../../../ui/inputs/TextInput';
import AnimatedPage from '../../../utils/AnimatedPage';
import ScrollToTop from '../../../utils/ScrollToTop';

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
