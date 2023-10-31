/**
 * Модальное окно поиска
 */

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import '../../../../styles/Search.scss';
import CloseButton from '../../../../ui/buttons/CloseButton';
import SearchButton from '../../../../ui/buttons/SearchButton';
import SearchInput from '../../../../ui/inputs/search/SearchInput';

const Search = ({ searchActive, setSearchActive }) => {
  const { handleSubmit } = useForm();

  useEffect(() => {
    document.body.style.overflow = searchActive ? 'hidden' : '';
  }, [searchActive]);

  const onSubmit = () => {
    return true;
  };

  return (
    <div
      className={searchActive ? 'modal-right active' : 'modal-right'}
      onClick={() => setSearchActive(false)}>
      <div className='modal-right-content' onClick={(e) => e.stopPropagation()}>
        <div className='modal-right-heading'>
          <p>Поиск</p>
          <CloseButton onClick={() => setSearchActive(false)} />
        </div>

        <form className='form' onSubmit={handleSubmit(onSubmit)}>
          <div className='search-container'>
            <SearchInput placeholder={'Поиск по каталогу'} />
            <SearchButton color={'black'}/>
          </div>
        </form>

        <div className='search-modal-recommendations'>
          <p>Рекомендации</p>
          <ul>
            <li>
              <Link to='/catalog' className='primary-button' onClick={() => setSearchActive(false)}>
                Fable of Dirty
              </Link>
            </li>
            <li>
              <Link to='/catalog' className='primary-button' onClick={() => setSearchActive(false)}>
                Футболки
              </Link>
            </li>
            <li>
              <Link to='/catalog' className='primary-button' onClick={() => setSearchActive(false)}>
                Пуховики
              </Link>
            </li>
            <li>
              <Link to='/catalog' className='primary-button' onClick={() => setSearchActive(false)}>
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
