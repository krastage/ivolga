/**
 * Блок курьерской доставки
 */

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import AnimatedPage from '../../../../../../utils/AnimatedPage';
import PrimaryButton from '../../../../../../ud-ui/buttons/PrimaryButton';
import CheckboxInputNotRequired
  from '../../../../../../ud-ui/inputs/checkboxes/CheckboxInputNotRequired';
import MultiInput from '../../../../../../ud-ui/inputs/text/MultiInput';
import ReadonlyInput from '../../../../../../ud-ui/inputs/text/ReadonlyInput';
import TextAreaInput from '../../../../../../ud-ui/inputs/text/TextAreaInput';

const CourierShipping = () => {
  const [isAddressNameActive, setIsAddressNameActive] = useState(false);

  const handleCheckbox = () => {
    setIsAddressNameActive(!isAddressNameActive);
  };

  const {
    register,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  return (
    <>
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

            <CheckboxInputNotRequired
              name={'address-save'}
              text={'Сохранить адрес'}
              onChange={handleCheckbox}
            />

            {isAddressNameActive ? (
              <MultiInput
                title={'Название адреса'}
                placeholder={'Дом, работа...'}
                name={'address-name'}
                errors={errors}
                register={register}
              />
            ) : (
              <ReadonlyInput
                title={'Название адреса'}
                placeholder={'Дом, работа...'}
                name={'address-name'}
                errors={errors}
                register={register}
              />
            )}
            <PrimaryButton type={'button'} label={'Сохранить'} disabled={!isAddressNameActive} />
          </div>
        </form>
      </AnimatedPage>
    </>
  );
};

export default CourierShipping;
