/**
 * Модальное окно фильтра товаров
 */

import '../styles/components/Filter.scss';
import {useEffect} from 'react';

export const Filter = ({filterActive, setFilterActive}) => {
  useEffect(() => {
    if (filterActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [filterActive]);

  return (
    <div
      className={filterActive ? 'modal-top active' : 'modal-top'}
      onClick={() => setFilterActive(false)}
    >
      <div
        className="modal-top-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-top-heading">
          <button onClick={() => setFilterActive(false)}>
            <img
              src="/assets/img/icons/close.svg"
              alt="close"
              className="modal-top-heading__button"
            />
          </button>
        </div>

        <div className="filter-modal-content">
          <ul className="filter-modal-content__list">
            <li>Топы</li>
            <li>Пуховики</li>
            <li>Пиджаки</li>
            <li>Жилеты</li>
            <li>Брюки</li>
          </ul>

          <ul className="filter-modal-content__list">
            <li>Лонгсливы</li>
            <li>Шорты</li>
            <li>Сумки</li>
            <li>Аксессуары</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
