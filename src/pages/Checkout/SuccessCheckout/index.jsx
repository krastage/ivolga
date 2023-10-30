/**
 * Страница успешного заказа
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../../ui/buttons/PrimaryButton';
import AnimatedPage from '../../../utils/AnimatedPage';

const SuccessCheckout = () => {
  const navigation = useNavigate();

  const handleButton = () => {
    navigation('/catalog');
  };

  return (
    <>
      <AnimatedPage>
        <div className='checkout-status'>
          <h1>Заказ #00005 оплачен</h1>
          <p>
            Благодарим вас за покупку в интернет-магазине Ivolga! Ваш заказ успешно оплачен и
            размещен. Отследить статус заказа можно в личном кабинете. Номер вашего заказа #00005
          </p>
          <PrimaryButton
            type={'button'}
            onClick={() => handleButton()}
            label={'Перейти в каталог'}
          />
        </div>
      </AnimatedPage>
    </>
  );
};

export default SuccessCheckout;
