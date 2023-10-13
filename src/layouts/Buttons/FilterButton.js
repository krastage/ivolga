import { useState } from "react";
import { Filter } from "../../components/Filter/Filter";

/**
 * Кнопка Фильтр+
 * @param filterButton пропс получаемый из списка карточек товаров
 * @returns {JSX.Element|null}
 */
export const FilterButton = ({ filterButton }) => {
  const [filterActive, setFilterActive] = useState(false);

  if (filterButton === false) {
    return null;
  }

  return (
    <>
      <button onClick={() => setFilterActive(true)}>
        <img src="/assets/img/icons/filter.svg" alt="filter" />
      </button>
      <Filter filterActive={filterActive} setFilterActive={setFilterActive} />
    </>
  );
};
