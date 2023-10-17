/**
 * Модальное окно корзины
 */

import '../styles/components/Basket.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import {ProductsCardMedium} from '../layouts/ProductsCardMedium';

export const Basket = ({ basketActive, setBasketActive }) => {
  useEffect(() => {
    if (basketActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [basketActive]);

  return (
    <div
      className={basketActive ? 'modal-right active' : 'modal-right'}
      onClick={() => setBasketActive(false)}>
      <div
        className='modal-right-content'
        onClick={(e) => e.stopPropagation()}>
        <div className='modal-right-heading'>
          <p>Корзина</p>
          <button onClick={() => setBasketActive(false)}>
            <img
              src='/assets/img/icons/close.svg'
              alt='close'
              className='modal-right-heading__button'
            />
          </button>
        </div>

        <div className='basket-modal-order'>
          <h1 className='basket-modal-order__title'>Ваш заказ</h1>

          <ul className='basket-modal-order__list'>
            <li className='basket-modal-order__item'>
              <p>2 товара</p>
              <p>50 000 ₽</p>
            </li>
            <li className='basket-modal-order__item'>
              <p>Итого</p>
              <p>50 570 ₽</p>
            </li>
          </ul>

          <p className='basket-modal-order__description'>
            Стоимость доставки будет рассчитана при оформлении заказа
          </p>
        </div>

        <Link
          to='/order'
          className='basket-modal-order__link'
          onClick={() => setBasketActive(false)}>
          Оформить заказ
        </Link>

        <ul className='basket-modal-orders__list'
            onClick={() => setBasketActive(false)}>
          <ProductsCardMedium
            link={'/catalog/product'}
            title={'Топ черный из кашемира'}
            price={25000}
            imageSource={'/assets/img/broadcast/product.png'}
          />
          <ProductsCardMedium
            link={'/catalog/product'}
            title={'Топ черный из кашемира'}
            price={25000}
            imageSource={'/assets/img/broadcast/product.png'}
          />
          <ProductsCardMedium
            link={'/catalog/product'}
            title={'Топ черный из кашемира'}
            price={25000}
            imageSource={'/assets/img/broadcast/product.png'}
          />
          <ProductsCardMedium
            link={'/catalog/product'}
            title={'Топ черный из кашемира'}
            price={25000}
            imageSource={'/assets/img/broadcast/product.png'}
          />
        </ul>
      </div>
    </div>
  );
};