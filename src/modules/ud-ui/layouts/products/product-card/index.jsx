/**
 * Шаблон карточки товара с 3 размерами
 */

import { Link } from 'react-router-dom';
import '../../../../../styles/ProductsCardSettings.scss';
import { useState } from 'react';

const ProductCard = ({ size, link, imageSource, price, title, type, isCounter = false }) => {
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
  const [ counter, setCounter ] = useState(1);

  function onPlusButtonClick() {
    setCounter(Number(counter) + 1);
  }

  function onMinusButtonClick() {
    if (counter > 1) {
      setCounter(Number(counter) - 1);
    }
  }

  const handleChange = (event) => {
    setCounter(event.target.value);
  };

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
        <div className='products-card-color-small'>
          <div></div>
        </div>
      </div>
      {isCounter && <div className='products-card__bottom-row'>
        <div className='products-card__counter'>
          <button onClick={onMinusButtonClick} className='products-card__counter-button products-card__counter-minus'>
            <svg
              width='9'
              height='1'
              viewBox='0 0 9 1'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path d='M0.847656 0.0166016H8.87891V1.00879H0.847656V0.0166016Z' fill='#8C8C8C' />
            </svg>
          </button>
          <input type='number' className='products-card__counter-input' min="1" onChange={handleChange} value={counter}/>
          <button onClick={onPlusButtonClick} className='products-card__counter-button products-card__counter-plus'>
            <svg
              width='11'
              height='11'
              viewBox='0 0 11 11'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M0.847656 5.0166H5.18359V0.680664H6.17578V5.0166H10.5117V6.00879H6.17578V10.3447H5.18359V6.00879H0.847656V5.0166Z'
                fill='#8C8C8C'
              />
            </svg>
          </button>
        </div>
        <button className='products-card__delete'>Удалить</button>
      </div>}
      
    </li>
  );
};

export default ProductCard;
