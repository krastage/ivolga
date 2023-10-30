/**
 * Модальное окно корзины
 */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../layouts/ProductCard';
import ProductsCardList from '../../layouts/ProductsCardList';
import '../../styles/components/Basket.scss';
import CloseButton from '../../ui/buttons/CloseButton';

const Basket = ({ basketActive, setBasketActive }) => {
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
      <div className='modal-right-content' onClick={(e) => e.stopPropagation()}>
        <div className='modal-right-heading'>
          <p>Корзина</p>
          <CloseButton onClick={() => setBasketActive(false)} />
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

        <Link to='/checkout' className='primary-button' onClick={() => setBasketActive(false)}>
          Оформить заказ
        </Link>

        <ProductsCardList
          title={null}
          filterButton={false}
          itemsPerRow={2}
          children={[
            <ProductCard
              key={1}
              size='medium'
              link={'/product'}
              title={'Топ черный из кашемира'}
              price={25_000}
              imageSource={'/assets/img/products/product.png'}
            />,
            <ProductCard
              key={2}
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
  );
};

export default Basket;
