/**
 * Шаблон кнопки Фильтр+
 * @param filterButton пропс получаемый из списка карточек товаров
 * @returns {JSX.Element|null}
 */

import { useState } from 'react';
import Filter from '../../components/Filter';

const FilterButton = ({ filterButton, handleFilterChange, resetFilter, filtersActivated }) => {
  const [filterActive, setFilterActive] = useState(false);

  if (filterButton === false) {
    return null;
  }

  return (
    <>
      <button onClick={() => setFilterActive(true)}>
        <img src='/assets/img/icons/filter.svg' alt='filter' />
      </button>
      <Filter
        filterActive={filterActive}
        setFilterActive={setFilterActive}
        handleFilterChange={handleFilterChange}
        resetFilter={resetFilter}
        filtersActivated={filtersActivated}
      />
    </>
  );
};

export default FilterButton;