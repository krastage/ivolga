/**
 * Шаблон списка карточек товаров
 */

import '../../styles/layouts/ProductsCardSettings.scss';
import AnimatedPage from '../../utils/AnimatedPage';
import FilterButton from '../FilterButton';

const ProductsCardList = ({
  title,
  children,
  filterButton,
  handleFilterChange,
  resetFilter,
  filtersActivated,
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
        <h2>{title}</h2>
        <FilterButton
          filterButton={filterButton}
          handleFilterChange={handleFilterChange}
          resetFilter={resetFilter}
          filtersActivated={filtersActivated}
        />
      </div>
      <AnimatedPage>
        <div className='products-card-container__content'>
          <ul className='products-card-list'>{children}</ul>
        </div>
      </AnimatedPage>
    </div>
  );
};

export default ProductsCardList;
