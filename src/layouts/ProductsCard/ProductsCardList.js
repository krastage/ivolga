/**
 * Список карточек товаров
 */

import './ProductsCardSettings.scss';
import { FilterButton } from '../Buttons/FilterButton';

export const ProductsCardList = ({ title, elements, filterButton }) => {
  return (
    <div className="products-card-container">
      <div className={filterButton ? 'products-card-head--space-between container' : 'products-card--centered container'} style={{ display: title === null ? 'none' : '' }}>
        <h2>{title}</h2>
        <FilterButton filterButton={filterButton} />
      </div>
      <div className="products-card-container__content">
        <ul className="products-list">
          {elements}
        </ul>
      </div>
    </div>
  );
};
