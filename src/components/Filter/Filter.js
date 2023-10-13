/**
 * Модальное окно фильтра товаров
 */

import "./Filter.scss";
import { useEffect } from "react";

export const Filter = ({ filterActive, setFilterActive }) => {
  useEffect(() => {
    if (filterActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [filterActive]);

  return (
    <div
      className={filterActive ? "filter-modal active" : "filter-modal"}
      onClick={() => setFilterActive(false)}
    >
      <div
        className="filter-modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="filter-modal-heading">
          <button onClick={() => setFilterActive(false)}>
            <img
              src="/assets/img/icons/close.svg"
              alt="close"
              className="filter-modal-heading__button"
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
