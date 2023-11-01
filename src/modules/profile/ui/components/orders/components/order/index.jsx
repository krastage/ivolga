import { Link } from 'react-router-dom';
import ProductCard from '../../../../../../ud-ui/layouts/products/product-card';
import AnimatedPage from '../../../../../../utils/AnimatedPage';
import ProfileLayout from '../../../../index';

const Order = () => {
  const content = (
    <AnimatedPage>
      <div className='right-container'>
        <div className='orders-details-container'>
          <Link to={'/profile/orders'} className='back-button'>
            <img src='/assets/img/icons/arrow-left.svg' alt='' />
            <p>Назад</p>
          </Link>

          <h1 className='orders-details-title'>Заказ #00004</h1>

          <ul className='orders-details-items'>
            <ProductCard
              size='small'
              link={'/product'}
              title={'Топ черный из кашемира'}
              price={25_000}
              imageSource={'/assets/img/broadcast/product.png'}
            />
          </ul>

          <ul className='orders-details-list'>
            <li className='orders-detail'>
              <p>Стоимость доставки</p>
              <p>0&nbsp;₽</p>
            </li>
            <li className='orders-detail'>
              <p>Итого</p>
              <p>10 000&nbsp;₽</p>
            </li>
            <li className='orders-detail'>
              <p>Статус заказа</p>
              <p>Доставлен: 24.09.2022</p>
            </li>
            <li className='orders-detail'>
              <p>Способ оплаты</p>
              <p>Онлайн</p>
            </li>
            <li className='orders-detail'>
              <p>Способ доставки</p>
              <p>Самовывоз</p>
            </li>
            <li className='orders-detail'>
              <p>Адрес</p>
              <p>Пункт самовывозы: Магазин Ivolga</p>
            </li>
          </ul>
        </div>
      </div>
    </AnimatedPage>
  );

  return <ProfileLayout content={content} />;
};

export default Order;
