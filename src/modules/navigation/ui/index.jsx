/**
 * Навигация (хэдер)
 */

import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import '../../../styles/Navigation.scss';
import Auth from '../../ud-ui/modals/auth/ui';
import Basket from '../../ud-ui/modals/basket';
import Search from '../../ud-ui/modals/search';

const NavigationItem = ({ to, location, label, onClick }) => {
  return (
    <li>
      <NavLink onClick={onClick} to={to} className={location.pathname === to ? 'nav-link-active' : 'nav-link'}>
        {label}
      </NavLink>
    </li>
  );
};

const Navigation = () => {

  
  
  const location = useLocation();
  
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [nav, setNav] = useState(false)
  const [searchActive, setSearchActive] = useState(false);
  const [basketActive, setBasketActive] = useState(false);
  const [authActive, setAuthActive] = useState(false);

  const handleScroll = () => {
    console.log(`${document.querySelector('.main-header').offsetHeight}px`);
    document.querySelector('body').style.paddingTop = `${document.querySelector('.main-header').offsetHeight}px`;
  };
  
  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }
  
  const handleNav = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
      easing: 'ease-in-out',
    });
    setNav(!nav)
  }

  useEffect(() => {
    if (document.readyState === 'complete') {
      handleScroll();
  } else {
      window.addEventListener('load', handleScroll);
  }

    return () => {
      window.removeEventListener('load', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth]);

  return (
    <>
      <header className={
        `
        main-header
        
        fixed container'
        
        ${windowWidth >= 820 && 'mobile'}
        `}
      >
        <>
          <div className='main-header__logo'>
            <NavLink to={'/home'}>
              <img src='/assets/img/icons/logo.svg' alt='logo' />
            </NavLink>
          </div>

          {windowWidth >= 820 &&
            <nav className='main-header__nav'>
              <ul className='main-header__list'>
                <NavigationItem to='/catalog' label='Каталог' location={location} />
                <NavigationItem to='/looks' label='Образы' location={location} />
                <NavigationItem to='/collections' label='Коллекции' location={location} />
                <NavigationItem to='/broadcasts' label='Прямые эфиры' location={location} />
              </ul>
            </nav>
          }

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
                <button
                  className='main-header__button'
                  onClick={() => setAuthActive(true)}
                >
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
              {windowWidth <= 820 &&
                <li className='main-header__buttons-item'>
                  <div
                    className={nav ? 'nav-mobile-btn-active' : 'nav-mobile-btn'}
                    onClick={handleNav}
                  >
                    <div className='mobile-line'></div>
                    <div className='mobile-line'></div>
                  </div>
                </li>
              }
            </ul>
          </div>
        </>
        
      <Search searchActive={searchActive} setSearchActive={setSearchActive} />
      <Basket basketActive={basketActive} setBasketActive={setBasketActive} />
      <Auth authActive={authActive} setAuthActive={setAuthActive} />
    </header>
      <nav className={nav ? 'mobile-header__nav-active' : 'mobile-header__nav'}>
        <ul className='mobile-header__list'>
          <NavigationItem to='/catalog' label='Каталог' location={location} onClick={handleNav}/>
          <NavigationItem to='/looks' label='Образы' location={location} onClick={handleNav} />
          <NavigationItem to='/collections' label='Коллекции' location={location} onClick={handleNav} />
          <NavigationItem to='/broadcasts' label='Прямые эфиры' location={location} onClick={handleNav} />
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
