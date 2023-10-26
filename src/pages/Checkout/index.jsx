/**
 * Страница оформления заказа
 */

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AddressAndShipping from '../../components/CheckoutDetails/AddressAndShipping';
import PaymentCheckout from '../../components/CheckoutDetails/PaymentCheckout';
import Recipient from '../../components/CheckoutDetails/Recipient';
import Footer from '../../components/Footer';
import ProductCard from '../../layouts/ProductCard';
import '../../styles/pages/Checkout.scss';
import CheckboxInput from '../../ui/inputs/CheckboxInput';
import AnimatedPage from '../../utils/AnimatedPage';

const Checkout = () => {
  const [showAddressAndShipping, setShowAddressAndShipping] = useState(true);
  const [showRecipient, setShowRecipient] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [activeBlock, setActiveBlock] = useState('AddressAndShipping');

  const navigation = useNavigate();

  const {
    register,
    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur' });

  const handleBlockActivation = (block) => {
    if (block === activeBlock) {
      setActiveBlock(null);
      setShowAddressAndShipping(false);
      setShowRecipient(false);
      setShowPayment(false);
    } else {
      setActiveBlock(block);
      setShowAddressAndShipping(block === 'AddressAndShipping');
      setShowRecipient(block === 'Recipient');
      setShowPayment(block === 'Payment');
    }
  };

  const onSubmit = () => {
    navigation('/checkout/success');
  };

  return (
    <AnimatedPage>
      <>
        <main className='checkout-content'>
          <div className='checkout-config-container'>
            <div>
              <button
                className='configuration'
                onClick={() => handleBlockActivation('AddressAndShipping')}>
                <div className='configuration-head'>
                  <h1>Адрес и доставка</h1>
                  <img
                    src={
                      activeBlock === 'AddressAndShipping'
                        ? '/assets/img/icons/checkout-block-active.svg'
                        : '/assets/img/icons/checkout-block-inactive.svg'
                    }
                    alt=''
                  />
                </div>
              </button>
              {showAddressAndShipping && <AddressAndShipping />}
            </div>

            <div>
              <button className='configuration' onClick={() => handleBlockActivation('Recipient')}>
                <div className='configuration-head'>
                  <h1>Получатель</h1>
                  <img
                    src={
                      activeBlock === 'Recipient'
                        ? '/assets/img/icons/checkout-block-active.svg'
                        : '/assets/img/icons/checkout-block-inactive.svg'
                    }
                    alt=''
                  />
                </div>
              </button>
              {showRecipient && <Recipient />}
            </div>

            <div>
              <button className='configuration' onClick={() => handleBlockActivation('Payment')}>
                <div className='configuration-head'>
                  <h1>Оплата</h1>
                  <img
                    src={
                      activeBlock === 'Payment'
                        ? '/assets/img/icons/checkout-block-active.svg'
                        : '/assets/img/icons/checkout-block-inactive.svg'
                    }
                    alt=''
                  />
                </div>
              </button>
              {showPayment && <PaymentCheckout />}
            </div>

            <div className='form__bottom-container'>
              <div className='form-checkbox'>
                <CheckboxInput
                  name={'agreement'}
                  text={'Я согласен с условиями интернет-магазина Ivolga'}
                  errors={errors}
                  register={register}
                />
              </div>

              <button
                className='settings-submit__button'
                type='button'
                disabled={!isValid}
                onClick={() => onSubmit()}>
                Подтвердить заказ
              </button>
            </div>
          </div>

          <div className='checkout-order-container'>
            <div className='order-info'>
              <h1 className='order-info__title'>Ваш заказ</h1>
              <ul className='order-info__list'>
                <li className='order-info__item'>
                  <p>2 товара</p>
                  <p>50 000 ₽</p>
                </li>
                <li className='order-info__item'>
                  <p>Доставка</p>
                  <p>570 ₽</p>
                </li>
                <li className='order-info__item'>
                  <p>Итого</p>
                  <p>50 570 ₽</p>
                </li>
              </ul>
            </div>
            <div className='orders'>
              <ProductCard
                size='big'
                link={'/product'}
                title={'Топ черный из кашемира'}
                price={25_000}
                imageSource={'/assets/img/products/product.png'}
              />
              <ProductCard
                size='big'
                link={'/product'}
                title={'Топ черный из кашемира'}
                price={25_000}
                imageSource={'/assets/img/products/product.png'}
              />
            </div>
          </div>
        </main>
      </>
      <Footer />
    </AnimatedPage>
  );
};

export default Checkout;
