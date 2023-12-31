/**
 * Навигация (хэдер)
 */

import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../../../styles/global/_settings.scss';
import '../../../styles/Navigation.scss';
import Auth from '../../ud-ui/modals/auth/ui';
import Basket from '../../ud-ui/modals/basket';
import Search from '../../ud-ui/modals/search';

const NavigationItem = ({ to, location, label }) => {
  return (
    <li>
      <NavLink to={to} className={location.pathname === to ? 'nav-link-active' : 'nav-link'}>
        {label}
      </NavLink>
    </li>
  );
};

const Navigation = () => {
  const location = useLocation();

  const [searchActive, setSearchActive] = useState(false);
  const [basketActive, setBasketActive] = useState(false);
  const [authActive, setAuthActive] = useState(false);
  const [isNavFixed, setIsNavFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsNavFixed(true);
    } else {
      setIsNavFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`main-header ${isNavFixed ? 'fixed container' : ''}`}>
      <div className='main-header__logo'>
        <NavLink to={'/home'}>
          <img src='/assets/img/icons/logo.svg' alt='logo' />
        </NavLink>
      </div>

      <nav className='main-header__nav'>
        <ul className='main-header__list'>
          <NavigationItem to='/catalog' label='Каталог' location={location} />
          <NavigationItem to='/looks' label='Образы' location={location} />
          <NavigationItem to='/collections' label='Коллекции' location={location} />
          <NavigationItem to='/broadcasts' label='Прямые эфиры' location={location} />
        </ul>
      </nav>

      <div className='main-header__buttons'>
        <ul className='main-header__buttons-list'>
          <li className='main-header__buttons-item'>
            <button className='main-header__button' onClick={() => setSearchActive(true)}>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <g id='Icon'>
                  <g id='Group 35'>
                    <circle id='Ellipse 5' cx='8.57171' cy='8.57114' r='5.21429' stroke='black' />
                    <line
                      id='Line 41'
                      x1='11.7823'
                      y1='12.5033'
                      x2='17.4965'
                      y2='18.2176'
                      stroke='black'
                    />
                  </g>
                </g>
              </svg>
            </button>
          </li>
          <li className='main-header__buttons-item'>
            <button className='main-header__button' onClick={() => setBasketActive(true)}>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <g id='Icon'>
                  <path
                    id='Ellipse 7'
                    d='M12.8569 7.14279C12.8569 5.56483 11.5777 4.28564 9.99972 4.28564C8.42176 4.28564 7.14258 5.56483 7.14258 7.14279'
                    stroke='black'
                  />
                  <rect
                    id='Rectangle 153'
                    x='3.35742'
                    y='7.64282'
                    width='13.2857'
                    height='9'
                    fill='white'
                    stroke='black'
                  />
                </g>
              </svg>
            </button>
          </li>
          <li className='main-header__buttons-item'>
            <button className='main-header__button' onClick={() => setAuthActive(true)}>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <g id='Icon' clipPath='url(#clip0_903_1614)'>
                  <circle id='Ellipse 6' cx='9.99958' cy='7.14289' r='3.78571' stroke='black' />
                  <rect
                    id='Rectangle 152'
                    x='3.35742'
                    y='13.3572'
                    width='13.2857'
                    height='14.7143'
                    rx='3.78571'
                    stroke='black'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_903_1614'>
                    <rect width='20' height='20' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </li>
        </ul>
      </div>
      <Search searchActive={searchActive} setSearchActive={setSearchActive} />
      <Basket basketActive={basketActive} setBasketActive={setBasketActive} />
      <Auth authActive={authActive} setAuthActive={setAuthActive} />
    </header>
  );
};

export default Navigation;
