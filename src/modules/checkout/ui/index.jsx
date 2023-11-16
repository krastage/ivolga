/**
 * Страница оформления заказа
 */

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import '../../../styles/Checkout.scss';
import PrimaryButton from '../../ud-ui/buttons/PrimaryButton';
import CheckboxInput from '../../ud-ui/inputs/checkboxes/CheckboxInput';
import AnimatedPage from '../../utils/AnimatedPage';
import Footer from '../../footer/ui';
import ProductCard from '../../ud-ui/layouts/products/product-card';
import ProductsCardList from '../../ud-ui/layouts/products/product-card-list';
import AddressAndShipping from './components/address-and-shipping';
import PaymentCheckout from './components/payment';
import Recipient from './components/recipient';

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

              <PrimaryButton
                type={'button'}
                disabled={!isValid}
                onClick={() => onSubmit()}
                label={'Подтвердить заказ'}
              />
            </div>
          </div>

          <div className='checkout-order-container'>
            <div className='order-info'>
              <h1 className='order-info__title'>Ваш заказ</h1>
              <ul className='order-info__list'>
                <li className='order-info__item'>
                  <p>2 товара</p>
                  <p>50 000&nbsp;₽</p>
                </li>
                <li className='order-info__item'>
                  <p>Доставка</p>
                  <p>570&nbsp;₽</p>
                </li>
                <li className='order-info__item'>
                  <p>Итого</p>
                  <p>50 570&nbsp;₽</p>
                </li>
              </ul>
            </div>
            <div className='orders'>
              <ProductsCardList
                title={null}
                filterButton={false}
                itemsPerRow={2}
                children={[
                  <ProductCard
                    size='medium'
                    link={'/product'}
                    title={'Топ черный из кашемира'}
                    price={25_000}
                    imageSource={'/assets/img/products/product.png'}
                  />,
                  <ProductCard
                    size='medium'
                    link={'/product'}
                    title={'Топ черный из кашемира'}
                    price={25_000}
                    imageSource={'/assets/img/products/product.png'}
                  />,
                ]}
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
