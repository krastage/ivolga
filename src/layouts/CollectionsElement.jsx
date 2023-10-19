/**
 * Шаблон карточки коллекции
 */

import { Link } from "react-router-dom";

export const CollectionsElement = ({ link, imageSource, title }) => {
  return (
    <li className="collections-item">
      <Link to={link} className="collections-item__link">
        <img
          src={imageSource}
          alt="product"
          className="collections-item__img"
        />
        <p className="collections-item__title">{title}</p>
      </Link>
    </li>
  );
};
