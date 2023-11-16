/**
 * Шаблон списка коллекций
 */

import '../../../../../styles/CollectionsList.scss';

const CollectionsList = ({ title, elements }) => {
  return (
    <>
      <h2 style={{ display: title === null ? 'none' : '' }} className='collections-list__title'>
        {title}
      </h2>
      <ul className='collections-list container'>{elements}</ul>
    </>
  );
};

export default CollectionsList;
