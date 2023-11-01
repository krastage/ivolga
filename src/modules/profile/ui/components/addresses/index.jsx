/**
 * Страница подраздела профиля с информацией об адресах (адресная книга)
 */

import { Link } from 'react-router-dom';
import ProfileLayout from '../../index';
import AnimatedPage from '../../../../utils/AnimatedPage';

const Addresses = () => {
  const content = (<AnimatedPage>
    <div className='right-container'>
      <div className='addresses-container'>
        <h1 className='common-profile-title'>Адресная книга</h1>
        <ul className='addresses-list'>
          <li className='addresses-item'>
            <p>Дом</p>
            <p>ул. Большая Дмитровка, 17, кв. 4</p>
            <Link
              to={''}
              className='primary-button'>Изменить</Link>
          </li>
          <li className='addresses-item'>
            <p>Дом</p>
            <p>ул. Ордынка, 11, офис. 5</p>
            <Link
              to={''}
              className='primary-button'>Изменить</Link>
          </li>
        </ul>

        <Link
          className='primary-button'
          to={'/profile/addresses/add'}>
          Добавить новый адрес
        </Link>
      </div>
    </div>

  </AnimatedPage>);

  return <ProfileLayout content={content} />;
};

export default Addresses;
