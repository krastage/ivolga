/**
 * Шаблон блока Profile
 */

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/layouts/Profile.scss';

const ProfileLayout = ({ content }) => {
  const location = useLocation();

  const LinkItem = ({ to, location, label }) => {
    return (
      <li>
        <Link to={to} className={location.pathname === to ? 'profile-link-active' : 'profile-link'}>
          {label}
        </Link>
      </li>
    );
  };

  return (
    <main className='profile'>
      <div className='profile-menu'>
        <h1 className='profile-menu__title'>Личный кабинет</h1>
        <ul className='profile-menu__links'>
          <li>
            <LinkItem to='/profile' label='Профиль' location={location} />
          </li>
          <li>
            <LinkItem to='/profile/wishlist' label='Вишлист' location={location} />
          </li>
          <li>
            <LinkItem to='/profile/orders' label='История заказов' location={location} />
          </li>
          <li>
            <LinkItem to='/profile/addresses' label='Адресная книга' location={location} />
          </li>
          <li>
            <LinkItem to='/profile/settings' label='Настройки' location={location} />
          </li>
        </ul>
      </div>
      <React.Fragment>{content}</React.Fragment>
    </main>
  );
};

export default ProfileLayout;
