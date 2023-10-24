/**
 * Модальное окно поиска
 */

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/Search.scss';

const Search = ({ searchActive, setSearchActive }) => {
  useEffect(() => {
    document.body.style.overflow = searchActive ? 'hidden' : '';
  }, [searchActive]);

  return (
    <div
      className={searchActive ? 'modal-right active' : 'modal-right'}
      onClick={() => setSearchActive(false)}
    >
      <div className='modal-right-content'
           onClick={(e) => e.stopPropagation()}>
        <div className='modal-right-heading'>
          <p>Поиск</p>
          <button onClick={() => setSearchActive(false)}>
            <img
              src='/assets/img/icons/close.svg'
              alt='close'
              className='modal-right-heading__button'
            />
          </button>
        </div>

        <div className='search-modal-input-container'>
          <input
            type='text'
            placeholder='Поиск по каталогу'
            className='search-modal-input'
          />
          <button className='search-modal-input__button'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='28'
              height='21'
              viewBox='0 0 28 21'
              fill='none'
            >
              <g clipPath='url(#clip0_1128_3180)'>
                <line x1='1'
                      y1='9.69238'
                      x2='26'
                      y2='9.69238'
                      stroke='black' />
                <path
                  d='M17.5435 18.1938L26.0293 9.70801L17.5435 1.22223'
                  stroke='black'
                />
              </g>
              <defs>
                <clipPath id='clip0_1128_3180'>
                  <rect
                    width='28'
                    height='20'
                    fill='white'
                    transform='matrix(-1 0 0 -1 28 20.1924)'
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>

        <div className='search-modal-recommendations'>
          <p className='search-modal-recommendations__title'>Рекомендации</p>
          <ul className='search-modal-recommendations__list'>
            <li>
              <Link
                to='/catalog'
                className='search-modal-recommendations__item'
                onClick={() => setSearchActive(false)}
              >
                Fable of Dirty
              </Link>
            </li>
            <li>
              <Link
                to='/catalog'
                className='search-modal-recommendations__item'
                onClick={() => setSearchActive(false)}
              >
                Футболки
              </Link>
            </li>
            <li>
              <Link
                to='/catalog'
                className='search-modal-recommendations__item'
                onClick={() => setSearchActive(false)}
              >
                Пуховики
              </Link>
            </li>
            <li>
              <Link
                to='/catalog'
                className='search-modal-recommendations__item'
                onClick={() => setSearchActive(false)}
              >
                Sale
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Search;
