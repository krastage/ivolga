/**
 * Список карточек товаров
 */

import '../styles/layouts/ProductsCardSettings.scss';
import { FilterButton } from './FilterButton';

export const ProductsCardList = ({ title, elements, filterButton }) => {
  return (
    <div className="container">
      <div className={filterButton ? 'products-card-head--space-between container' : 'products-card-head--centered container'} style={{ display: title === null ? 'none' : '' }}>
        <h2>{title}</h2>
        <FilterButton filterButton={filterButton} />
      </div>
      <div className="products-card-container__content">
        <ul className="products-card-list">
          {elements}
        </ul>
      </div>
    </div>
  );
};
