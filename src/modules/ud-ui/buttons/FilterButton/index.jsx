/**
 * Кнопка Фильтр+
 * @param filterButton пропс получаемый из списка карточек товаров
 * @returns {JSX.Element|null}
 */

import { useState } from 'react';
import Filter from '../../modals/filter';

const FilterButton = ({ filterButton, handleFilterChange, resetFilter }) => {
  const [filterActive, setFilterActive] = useState(false);

  if (filterButton === false) {
    return null;
  }

  return (
    <>
      <button onClick={() => setFilterActive(true)} className='filter-button'>
        <h1>Фильтр+</h1>
      </button>
      <Filter
        filterActive={filterActive}
        setFilterActive={setFilterActive}
        handleFilterChange={handleFilterChange}
        resetFilter={resetFilter}
      />
    </>
  );
};

export default FilterButton;
