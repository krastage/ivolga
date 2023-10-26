import React from 'react';
import { useForm } from 'react-hook-form';
import CheckboxInputNotRequired from '../../../../ui/inputs/CheckboxInputNotRequired';
import MultiInput from '../../../../ui/inputs/MultiInput';
import TextAreaInput from '../../../../ui/inputs/TextAreaInput';
import AnimatedPage from '../../../../utils/AnimatedPage';
import ScrollToTop from '../../../../utils/ScrollToTop';

const CourierShipping = () => {
  const {
    register,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  return (
    <>
      <ScrollToTop />
      <AnimatedPage>
        <form>
          <div className='shipping-content'>
            <MultiInput
              title={'Адрес'}
              placeholder={'Улица Большая Никитская, 2, кв. 21'}
              name={'address'}
              errors={errors}
              register={register}
            />

            <TextAreaInput
              title={'Комментарий к заказу'}
              placeholder={'Позвоните за 2 часа, этаж 2, домофон 54667457'}
              name={'comment'}
              errors={errors}
              register={register}
            />

            <CheckboxInputNotRequired name={'address-save'} text={'Сохранить адрес'} />

            <MultiInput
              title={'Название адреса'}
              placeholder={'Дом, работа...'}
              name={'address-name'}
              errors={errors}
              register={register}
            />

            <button className='settings-submit__button' type='button'>
              Сохранить
            </button>
          </div>
        </form>
      </AnimatedPage>
    </>
  );
};

export default CourierShipping;
