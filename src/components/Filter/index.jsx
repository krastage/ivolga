/* eslint-disable no-unused-vars */
/**
 * Модальное окно фильтра товаров
 */

import { useEffect, useState } from 'react';
import '../../styles/components/Filter.scss';

const Filter = ({
  filterActive,
  setFilterActive,
  handleFilterChange,
  resetFilter,
  filtersActivated,
}) => {
  const [activeFilterIndex, setActiveFilterIndex] = useState(null);
  const [buttonColor, setButtonColor] = useState('');
  const [activeButtons, setActiveButtons] = useState([]);

  const handleButtonClick = (index) => {
    if (activeFilterIndex === index) {
      setActiveFilterIndex(null);
      setButtonColor('');
      resetFilter();
      resetActiveButtons();
      resetFilterAndActiveButtons();
      return;
    }
    setActiveFilterIndex(index);
    setButtonColor('active');
    handleFilterChange(index);
    addActiveButtons(index);
  };

  const addActiveButtons = (index) => {
    setActiveButtons((prevActiveButtons) => {
      if (!prevActiveButtons.includes(index)) {
        return [...prevActiveButtons, index];
      }
      return prevActiveButtons;
    });
  };

  const resetActiveButtons = () => {
    setActiveButtons([]);
  };

  const resetFilterAndActiveButtons = () => {
    resetFilter();
    setActiveFilterIndex(null);
    resetActiveButtons();
    setFilterActive(false);
  };

  useEffect(() => {
    document.body.style.overflow = filterActive ? 'hidden' : '';
  }, [filterActive]);

  return (
    <div
      className={filterActive ? 'modal-top active' : 'modal-top'}
      onClick={() => setFilterActive(false)}>
      <div className='modal-top-content' onClick={(e) => e.stopPropagation()}>
        <div className='modal-top-heading'>
          <button onClick={() => setFilterActive(false)}>
            <img
              src='/assets/img/icons/close.svg'
              alt='close'
              className='modal-top-heading__button'
            />
          </button>
        </div>

        <div className='filter-modal-content'>
          <ul className='filter-modal-content__list'>
            <li>
              <button
                className={`filter-modal-content__button ${
                  activeFilterIndex === 0 ? 'active' : ''
                } ${activeButtons.includes(0) ? 'active' : ''}`}
                onClick={() => handleButtonClick(0)}>
                Топы
              </button>
            </li>
            <li>
              <button
                className={`filter-modal-content__button ${
                  activeFilterIndex === 1 ? 'active' : ''
                } ${activeButtons.includes(1) ? 'active' : ''}`}
                onClick={() => handleButtonClick(1)}>
                Пуховики
              </button>
            </li>
            <li>
              <button
                className={`filter-modal-content__button ${
                  activeFilterIndex === 2 ? 'active' : ''
                } ${activeButtons.includes(2) ? 'active' : ''}`}
                onClick={() => handleButtonClick(2)}>
                Пиджаки
              </button>
            </li>
            <li>
              <button
                className={`filter-modal-content__button ${
                  activeFilterIndex === 3 ? 'active' : ''
                } ${activeButtons.includes(3) ? 'active' : ''}`}
                onClick={() => handleFilterChange(3)}>
                Жилеты
              </button>
            </li>
            <li>
              <button
                className={`filter-modal-content__button ${
                  activeFilterIndex === 4 ? 'active' : ''
                } ${activeButtons.includes(4) ? 'active' : ''}`}
                onClick={() => handleFilterChange(4)}>
                Брюки
              </button>
            </li>
            <li>
              <button
                className='filter-modal-content__button-reset'
                onClick={resetFilterAndActiveButtons}
                disabled={!filtersActivated}>
                Сбросить фильтр
              </button>
            </li>
          </ul>

          <ul className='filter-modal-content__list'>
            <li>
              <button
                className={`filter-modal-content__button ${
                  activeFilterIndex === 5 ? 'active' : ''
                } ${activeButtons.includes(5) ? 'active' : ''}`}
                onClick={() => handleFilterChange(5)}>
                Лонгсливы
              </button>
            </li>
            <li>
              <button
                className={`filter-modal-content__button ${
                  activeFilterIndex === 6 ? 'active' : ''
                } ${activeButtons.includes(6) ? 'active' : ''}`}
                onClick={() => handleFilterChange(6)}>
                Шорты
              </button>
            </li>
            <li>
              <button
                className={`filter-modal-content__button ${
                  activeFilterIndex === 7 ? 'active' : ''
                } ${activeButtons.includes(7) ? 'active' : ''}`}
                onClick={() => handleFilterChange(7)}>
                Сумки
              </button>
            </li>
            <li>
              <button
                className={`filter-modal-content__button ${
                  activeFilterIndex === 8 ? 'active' : ''
                } ${activeButtons.includes(8) ? 'active' : ''}`}
                onClick={() => handleFilterChange(8)}>
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
