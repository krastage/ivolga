/**
 * Модальное окно фильтра товаров
 */

import { useEffect, useState } from 'react';
import '../../../../styles/Filter.scss';
import CloseButton from '../../../../ui/buttons/CloseButton';

const Filter = ({
  filterActive,
  setFilterActive,
  handleFilterChange,
  resetFilter,

}) => {
  const handleButtonClick = (evt) => {
    const target = evt.target;
    target.classList.toggle('active');
    const resetButton = document.querySelector('.filter-modal-content__button-reset');
    resetButton.disabled = document.querySelectorAll('.filter-modal-content__button.active').length === 0;
    handleFilterChange(target.dataset.index);
  };

  const resetActiveButtons = () => {
    document.querySelectorAll('.filter-modal-content__button.active').forEach(el => el.classList.remove('active'));
  };

  const resetFilterAndActiveButtons = () => {
    
    resetFilter();
    resetActiveButtons();
    setFilterActive(false);
  };

  useEffect(() => {
    document.body.style.overflow = filterActive ? 'hidden' : '';
    const resetButton = document.querySelector('.filter-modal-content__button-reset');
    resetButton.disabled = document.querySelectorAll('.filter-modal-content__button.active').length === 0;
  }, [filterActive]);

  return (
    <div
      className={filterActive ? 'modal-top active' : 'modal-top'}
      onClick={() => setFilterActive(false)}>
      <div className='modal-top-content'
           onClick={(e) => e.stopPropagation()}>
        <div className='modal-top-heading'>
          <CloseButton onClick={() => setFilterActive(false)} />
        </div>

        <div className='filter-modal-content'>
          <ul className='filter-modal-content__list'>
            <li>
              <button
                className={`filter-modal-content__button`}
                onClick={handleButtonClick}
                data-index={0}>
                Топы
              </button>
            </li>
            <li>
              <button
                className={`filter-modal-content__button`}
                onClick={handleButtonClick}
                data-index={1}>
                Пуховики
              </button>
            </li>
            <li>
              <button
                className={`filter-modal-content__button`}
                onClick={handleButtonClick}
                data-index={2}>
                Пиджаки
              </button>
            </li>
            <li>
              <button
                className={`filter-modal-content__button`}
                onClick={handleButtonClick}
                data-index={3}>
                Жилеты
              </button>
            </li>
            <li>
              <button
                className={`filter-modal-content__button`}
                onClick={handleButtonClick}
                data-index={4}>
                Брюки
              </button>
            </li>
            <li>
              <button
                className='filter-modal-content__button-reset'
                onClick={resetFilterAndActiveButtons}>
                Сбросить фильтр
              </button>
            </li>
          </ul>

          <ul className='filter-modal-content__list'>
            <li>
              <button
                className={`filter-modal-content__button`}
                onClick={handleButtonClick}
                data-index={5}>
                Лонгсливы
              </button>
            </li>
            <li>
              <button
                className={`filter-modal-content__button`}
                onClick={handleButtonClick}
                data-index={6}>
                Шорты
              </button>
            </li>
            <li>
              <button
                className={`filter-modal-content__button`}
                onClick={handleButtonClick}
                data-index={7}>
                Сумки
              </button>
            </li>
            <li>
              <button
                className={`filter-modal-content__button `}
                onClick={handleButtonClick}
                data-index={8}>
                Аксессуары
              </button>
            </li>
          </ul>

          <div>
            <img
              src='/assets/img/products/filter-img.png'
              alt=''
              className='filter-modal-content__img'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
