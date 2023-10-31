/**
 * Шаблон карточки товара с 3 размерами
 */

import { Link } from 'react-router-dom';
import '../../../styles/layouts/ProductsCardSettings.scss';

const ProductCard = ({ size, link, imageSource, price, title, type }) => {
  const cardStyles = {
    big: {
      className: 'products-card--big',
      titleClassName: 'products-card-title--big',
      colorClassName: 'products-card-color-big',
    },
    medium: {
      className: 'products-card--medium',
      titleClassName: 'products-card-title--medium',
      colorClassName: 'products-card-color-small',
    },
    small: {
      className: 'products-card--small',
      titleClassName: 'products-card-title--small',
      colorClassName: 'products-card-color-small',
    },
  };

  const { className, titleClassName, colorClassName } = cardStyles[size];

  const productTypes = [
    'Топы',
    'Пуховики',
    'Пиджаки',
    'Жилеты',
    'Брюки',
    'Лонгсливы',
    'Шорты',
    'Сумки',
    'Аксессуары',
  ];
  const productType = productTypes[type];

  return (
    <li className={className}>
      <Link to={link} className='products-card__link'>
        <img src={imageSource} alt='product' />
        <div className={titleClassName} type={productType}>
          <p className='products-card-title__product'>{title}</p>
          <p className='products-card-title__price'>{price}&nbsp;₽</p>
        </div>
      </Link>
      <div className='products-card__colors'>
        <img
          src='/assets/img/icons/rectangle.png'
          alt='rectangle-color'
          className={colorClassName}
        />
      </div>
    </li>
  );
};

export default ProductCard;
