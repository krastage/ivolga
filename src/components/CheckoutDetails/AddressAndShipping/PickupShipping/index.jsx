import React from 'react';
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
          <button className='settings-submit__button' type='button'>
            Изменить адрес
          </button>
        </div>
      </AnimatedPage>
    </>
  );
};

export default PickupShipping;
