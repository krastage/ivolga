/**
 * Кнопка Фильтр+
 * @param filterButton пропс получаемый из списка карточек товаров
 * @returns {JSX.Element|null}
 */
export const FilterButton = ({ filterButton }) => {
  if (filterButton === false) {
    return null;
  }

  return (
    <button>
      <img src="/assets/img/icons/filter.svg" alt="filter" />
    </button>
  );
};
