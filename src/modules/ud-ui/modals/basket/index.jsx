/**
 * Модальное окно корзины
 */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../../../styles/Basket.scss';
import CloseButton from '../../buttons/CloseButton';
import ProductCard from '../../layouts/products/product-card';
import ProductsCardList from '../../layouts/products/product-card-list';

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
      <div className='modal-right-content basket-container' onClick={(e) => e.stopPropagation()}>
        <div className='modal-right-heading'>
          <p>Корзина</p>
          <CloseButton onClick={() => setBasketActive(false)} />
        </div>

        <div className='basket-modal-order'>
          <h1 className='basket-modal-order__title'>Ваш заказ</h1>

          <ul className='basket-modal-order__list'>
            <li className='basket-modal-order__item'>
              <p>2 товара</p>
              <p>50 000&nbsp;₽</p>
            </li>
            <li className='basket-modal-order__item'>
              <p>Итого</p>
              <p>50 570&nbsp;₽</p>
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
              price={'25 000'}
              imageSource={'/assets/img/products/product.png'}
              isCounter={true}
            />,
            <ProductCard
              key={2}
              size='medium'
              link={'/product'}
              title={'Топ черный из кашемира'}
              price={'25 000'}
              imageSource={'/assets/img/products/product.png'}
              isCounter={true}
            />,
          ]}
        />
      </div>
    </div>
  );
};

export default Basket;
