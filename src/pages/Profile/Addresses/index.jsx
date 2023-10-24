/**
 * Страница подраздела профиля с информацией об адресах (адресная книга)
 */

import { Link } from 'react-router-dom';
import AnimatedPage from '../../../utils/AnimatedPage';
import ProfileLayout from '../../../layouts/ProfileLayout';

const Addresses = () => {
  const content = (
    <AnimatedPage>
      <div className="right-container">
        <div className='addresses-container'>
        <h1 className='common-profile-title'>Адресная книга</h1>
        <ul className='addresses-list'>
          <li className='addresses-item'>
            <p>Дом</p>
            <p>ул. Большая Дмитровка, 17, кв. 4</p>
            <button className='addresses-item__button'>Изменить</button>
          </li>
          <li className='addresses-item'>
            <p>Дом</p>
            <p>ул. Ордынка, 11, офис. 5</p>
            <button className='addresses-item__button'>Изменить</button>
          </li>
        </ul>

        <Link className='addresses__add-button' to={'/profile/addresses/add'}>
          Добавить новый адрес
        </Link>
      </div>
      </div>
      
    </AnimatedPage>
  );

  return <ProfileLayout content={content} />;
};

export default Addresses;
