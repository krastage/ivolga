/**
 * Блок оплаты
 */

import React from 'react';
import { useForm } from 'react-hook-form';
import PrimaryButton from '../../../ui/buttons/PrimaryButton';
import RadioInput from '../../../ui/inputs/radio/RadioInput';
import MultiInputNotRequired from '../../../ui/inputs/text/MultiInputNotRequired';
import AnimatedPage from '../../../utils/AnimatedPage';
import ScrollToTop from '../../../utils/ScrollToTop';

const PaymentCheckout = () => {
  const { handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <ScrollToTop />
      <AnimatedPage>
        <form className='form payment-checkout' onSubmit={handleSubmit(onSubmit)}>
          <div className='form__container'>
            <RadioInput name={'option1'} text={'Онлайн оплата картой'} />

            <RadioInput name={'option2'} text={'Оплата наличными курьеру'} />

            <RadioInput name={'option3'} text={'Оплата Долями (от Tinkoff)'} />
          </div>

          <div className='payment-promo'>
            <MultiInputNotRequired title={null} placeholder={'Промокод'} name={'promo'} />
            <PrimaryButton type={'submit'} label={'Применить'} />
          </div>
        </form>
      </AnimatedPage>
    </>
  );
};

export default PaymentCheckout;
