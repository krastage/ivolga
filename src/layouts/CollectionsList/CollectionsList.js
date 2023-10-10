/**
 * Список коллекций
 */

import './CollectionsList.scss';

export const CollectionsList = ({ title, elements }) => {
  return (
    <>
      <h2 style={{ display: title === null ? 'none' : 'block' }}>{title}</h2>
      <ul className="collections-list container">
        {elements}
      </ul>
    </>
  );
};
