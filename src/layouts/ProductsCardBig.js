/**
 * Карточка товара (большой вариант)
 */

import '../styles/layouts/ProductsCardSettings.scss';
import { Link } from 'react-router-dom';

export const ProductsCardBig = ({ link, imageSource, price, title }) => {
  return (
    <li className="products-card--big">
      <Link to={link} className="products-card__link">
        <img src={imageSource} alt="product" />
        <div className="products-card-title--big">
          <p className="products-card-title__product">{title}</p>
          <p className="products-card-title__price">{price} ₽</p>
        </div>
      </Link>
      <div className="products-card__colors">
        <img src="/assets/img/icons/rectangle.png" alt="rectangle-color" className="products-card-color-big" />
      </div>
    </li>
  );
};
