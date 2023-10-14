/**
 * Модальное окно корзины
 */

import './Basket.scss';
import { Link } from 'react-router-dom';
import { ProductsCard } from '../../layouts/ProductsCard/ProductsCard';
import { useEffect } from 'react';

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
      className={basketActive ? 'basket-modal active' : 'basket-modal'}
      onClick={() => setBasketActive(false)}>
      <div
        className='basket-modal-content'
        onClick={(e) => e.stopPropagation()}>
        <div className='basket-modal-heading'>
          <p>Корзина</p>
          <button onClick={() => setBasketActive(false)}>
            <img
              src='/assets/img/icons/close.svg'
              alt='close'
              className='basket-modal-heading__button'
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
          <ProductsCard
            link={'/catalog/product'}
            title={'Топ черный из кашемира'}
            price={25000}
            imageSource={'/assets/img/broadcast/product.png'}
          />
          <ProductsCard
            link={'/catalog/product'}
            title={'Топ черный из кашемира'}
            price={25000}
            imageSource={'/assets/img/broadcast/product.png'}
          />
          <ProductsCard
            link={'/catalog/product'}
            title={'Топ черный из кашемира'}
            price={25000}
            imageSource={'/assets/img/broadcast/product.png'}
          />
          <ProductsCard
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
