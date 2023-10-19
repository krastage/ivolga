/**
 * Шаблон списка коллекций
 */

import "../styles/layouts/CollectionsList.scss";

export const CollectionsList = ({ title, elements }) => {
  return (
    <>
      <h2
        style={{ display: title === null ? "none" : "" }}
        className="collections-list__title"
      >
        {title}
      </h2>
      <ul className="collections-list container">{elements}</ul>
    </>
  );
};
