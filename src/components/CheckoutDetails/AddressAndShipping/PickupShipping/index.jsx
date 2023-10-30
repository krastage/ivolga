/**
 * Блок самовывоза
 */

import React from 'react';
import PrimaryButton from '../../../../ui/buttons/PrimaryButton';
import AnimatedPage from '../../../../utils/AnimatedPage';

const PickupShipping = () => {
  return (
    <>
      <AnimatedPage>
        <div className='pickup-shipping'>
          <div className='pickup-shipping__title'>
            <p>СДЭК</p>
            <p className='pickup-shipping__title-address'>
              Шоу-рум Fable, Дизайн-завод Флакон, Большая Новодмитровская ул., 36
            </p>
          </div>
          <PrimaryButton type={'button'} label={'Изменить адрес'} />
        </div>
      </AnimatedPage>
    </>
  );
};

export default PickupShipping;
