import React from 'react';
import { useForm } from 'react-hook-form';
import MultiInput from '../../../ui/inputs/MultiInput';
import RadioInput from '../../../ui/inputs/RadioInput';
import AnimatedPage from '../../../utils/AnimatedPage';
import ScrollToTop from '../../../utils/ScrollToTop';

const PaymentCheckout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <ScrollToTop />
      <AnimatedPage>
        <form className='form payment-checkout' onSubmit={handleSubmit(onSubmit)}>
          <div className='form__container'>
            <RadioInput
              name={'option1'}
              text={'Онлайн оплата картой'}
              errors={errors}
              register={register}
            />

            <RadioInput
              name={'option2'}
              text={'Оплата наличными курьеру'}
              errors={errors}
              register={register}
            />

            <RadioInput
              name={'option3'}
              text={'Оплата Долями (от Tinkoff)'}
              errors={errors}
              register={register}
            />
          </div>

          <div className='payment-promo'>
            <MultiInput
              title={null}
              placeholder={'Промокод'}
              name={'promo'}
              errors={errors}
              register={register}
            />
            <button className='settings-submit__button' type='button'>
              Применить
            </button>
          </div>
        </form>
      </AnimatedPage>
    </>
  );
};

export default PaymentCheckout;
