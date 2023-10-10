/**
 * Карточка товара
 */

import './ProductsCardSettings.scss';
import { Link } from 'react-router-dom';

export const ProductsCard = ({ link, imageSource, price, title }) => {
  return (
    <li className="products-card">
      <Link to={link} className="products-card__link">
        <img src={imageSource} alt="product" />
        <div className="products-card__title">
          <p className="products-card__product">{title}</p>
          <p className="products-card__price">{price} ₽</p>
        </div>
      </Link>
      <div className="products-card__colors">
        <img src="/assets/img/icons/rectangle.png" alt="rectangle-color" className="products-card__color" />
      </div>
    </li>
  );
};
