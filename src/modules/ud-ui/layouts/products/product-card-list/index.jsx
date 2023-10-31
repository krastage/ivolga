/**
 * Шаблон списка карточек товаров
 */

import '../../../../../styles/ProductsCardSettings.scss';
import FilterButton from '../../../../../ui/buttons/FilterButton';
import AnimatedPage from '../../../../../utils/AnimatedPage';

const ProductsCardList = ({
  title,
  children,
  filterButton,
  handleFilterChange,
  resetFilter,
  filtersActivated,
  itemsPerRow,
}) => {
  return (
    <div className='container'>
      <div
        className={
          filterButton
            ? 'products-card-head--space-between container'
            : 'products-card-head--centered container'
        }
        style={{ display: title === null ? 'none' : '' }}>
        <h2 style={{ display: title === null ? 'none' : '' }}>{title}</h2>
        <FilterButton
          filterButton={filterButton}
          handleFilterChange={handleFilterChange}
          resetFilter={resetFilter}
          filtersActivated={filtersActivated}
        />
      </div>
      <AnimatedPage>
        <div className='products-card-container__content'>
          <ul className={`products-card-list products-card-list--${itemsPerRow}`}>{children}</ul>
        </div>
      </AnimatedPage>
    </div>
  );
};

export default ProductsCardList;
