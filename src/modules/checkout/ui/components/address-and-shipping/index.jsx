/**
 * Блок адреса и доставки
 */

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from '../../../../ud-ui/inputs/select/Select';
import AnimatedPage from '../../../../utils/AnimatedPage';
import CourierShipping from './components/courier';
import PickupShipping from './components/pickup';

const AddressAndShipping = () => {
  const [activeButton, setActiveButton] = useState('courier');
  const [showCourierShipping, setShowCourierShipping] = useState(true);
  const [showPickupShipping, setShowPickupShipping] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleCourierButton = () => {
    setActiveButton('courier');
    setShowCourierShipping(true);
    setShowPickupShipping(false);
  };

  const handlePickupButton = () => {
    setActiveButton('pickup');
    setShowPickupShipping(true);
    setShowCourierShipping(false);
  };

  return (
    <>
      <AnimatedPage>
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
          <div className='configuration-content'>
            {showCourierShipping && (
              <Select
                title={'Город'}
                name={'city'}
                errors={errors}
                register={register}
                options={['Москва', 'Санкт-Петербург', 'Казань']}
              />
            )}

            <div className='configuration-buttons'>
              <div className='configuration-buttons__wrapper'>
                <button
                  className={`delivery-button ${activeButton === 'courier' ? 'active' : ''}`}
                  onClick={handleCourierButton}>
                  <div className='delivery-header__title'>
                    <p>Курьер</p>
                    <p>
                      <span>Курьерская доставка</span>
                    </p>
                  </div>
                  <div className='delivery-header__price'>
                    <p>500&nbsp;₽</p>
                  </div>
                </button>
              </div>

              <div className='configuration-buttons__wrapper'>
                <button
                  className={`delivery-button ${activeButton === 'pickup' ? 'active' : ''}`}
                  onClick={handlePickupButton}>
                  <div className='delivery-header__title'>
                    <p>Самовывоз</p>
                    <p>
                      <span>Дизайн-завод Флакон</span>
                    </p>
                  </div>
                  <div className='delivery-header__price'>
                    <p>Бесплатно</p>
                  </div>
                </button>
              </div>
            </div>
            {showCourierShipping && <CourierShipping />}
            {showPickupShipping && <PickupShipping />}
          </div>
        </form>
      </AnimatedPage>
    </>
  );
};

export default AddressAndShipping;
