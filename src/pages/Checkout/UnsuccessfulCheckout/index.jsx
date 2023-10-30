/**
 * Страница не успешного заказа
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../../ui/buttons/PrimaryButton';
import AnimatedPage from '../../../utils/AnimatedPage';

const UnsuccessfulCheckout = () => {
  const navigation = useNavigate();

  const handleButton = () => {
    navigation('/checkout');
  };

  return (
    <>
      <AnimatedPage>
        <div className='checkout-status'>
          <h1>Заказ #00005 не оплачен</h1>
          <p>
            Возникли проблемы с оплатой заказа на стороне банка. Пожалуйста, обратитесь в ваш банк.
          </p>
          <PrimaryButton type={'button'} onClick={() => handleButton()} label={'Повторить заказ'} />
        </div>
      </AnimatedPage>
    </>
  );
};

export default UnsuccessfulCheckout;
