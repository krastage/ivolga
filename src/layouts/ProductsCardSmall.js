/**
 * Карточка товара (маленький вариант)
 */

import '../styles/layouts/ProductsCardSettings.scss';
import { Link } from 'react-router-dom';

export const ProductsCardSmall = ({ link, imageSource, price, title }) => {
  return (
    <li className="products-card--small">
      <Link to={link} className="products-card__link">
        <img src={imageSource} alt="product" />
        <div className="products-card-title--small">
          <p className="products-card-title__product">{title}</p>
          <p className="products-card-title__price">{price} ₽</p>
        </div>
      </Link>
      <div className="products-card-small__colors">
        <img src="/assets/img/icons/rectangle.png" alt="rectangle-color" className="products-card-color-small" />
      </div>
    </li>
  );
};
