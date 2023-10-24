/**
 * Страница подраздела профиля с информацией об историях заказов (история заказов)
 */

import { Link } from 'react-router-dom';
import AnimatedPage from '../../../utils/AnimatedPage';
import ProfileLayout from '../../../layouts/ProfileLayout';

const Orders = () => {
  const content = (
    <AnimatedPage>
      <div className='orders-container'>
        <h1 className='common-profile-title'>История заказов</h1>
        <ul className='orders-list'>
          <li className='orders-item'>
            <p>#00004</p>
            <p>5 000 ₽</p>
            <p>24.09.2022</p>
            <Link to={'/profile/orders/order'} className='orders-item__button'>
              Детали
            </Link>
          </li>
          <li className='orders-item'>
            <p>#00004</p>
            <p>5 000 ₽</p>
            <p>24.09.2022</p>
            <Link to={'/profile/orders/order'} className='orders-item__button'>
              Детали
            </Link>
          </li>
          <li className='orders-item'>
            <p>#00004</p>
            <p>5 000 ₽</p>
            <p>24.09.2022</p>
            <Link to={'/profile/orders/order'} className='orders-item__button'>
              Детали
            </Link>
          </li>
        </ul>
      </div>
    </AnimatedPage>
  );

  return <ProfileLayout content={content} />;
};

export default Orders;
