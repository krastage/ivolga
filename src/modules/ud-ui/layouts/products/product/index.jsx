/**
 * Шаблон страницы товара, продукта
 */

import { useEffect, useState } from 'react';
import '../../../../../styles/ProductLayout.scss';
import PrimaryButtonActive from '../../../buttons/PrimaryButtonActive';
import SizeGuide from '../../../modals/size-guide';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const ProductLayout = ({
  imgSource,
  configTitle,
  price,
  detailButtonTitle,
  size,
  colors,
}) => {
  const [sizeGuideActive, setSizeGuideActive] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showExchange, setShowExchange] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isExchangeOpen, setIsExchangeOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const toggleDetails = () => {
    setShowDetails(!showDetails);
    setIsDetailsOpen(!isDetailsOpen);
  };

  const togglePayment = () => {
    setShowPayment(!showPayment);
    setIsPaymentOpen(!isPaymentOpen);
  };

  const toggleExchange = () => {
    setShowExchange(!showExchange);
    setIsExchangeOpen(!isExchangeOpen);
  };

  const details = (
    <div
      className={`product-config-details-button__details ${
        showDetails ? 'product-config-details-button__details active' : ''
      }`}>
    </div>
  );

  const payment = (
    <div
      className={`product-config-details-button__details ${
        showPayment ? 'product-config-details-button__details active' : ''
      }`}>
      <p>Информация об оплате и доставке</p>
    </div>
  );

  const exchange = (
    <div
      className={`product-config-details-button__details ${
        showExchange ? 'product-config-details-button__details active' : ''
      }`}>
      <p>Информация о возврате</p>
    </div>
  );

  const colorsData = [
    {
      name: 'Бежевый',
      img: '/assets/img/icons/color-pick1.svg',
    },
    {
      name: 'Белый',
      img: '/assets/img/icons/color-pick2.svg',
    },
    {
      name: 'Зеленый',
      img: '/assets/img/icons/color-pick3.svg',
    },
  ];

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [windowWidth])

  return (
    <>
      <div className='product'>
        <div className='product-common'>
      {windowWidth <= 760 ?
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        loop={true}
        pagination
        style={{maxWidth: '400px', width: '100vw', paddingBottom: '40px'}}
      >
        {imgSource.map((imgSource, index) => (
          <SwiperSlide>
            <img width={'100%'} src={imgSource}
              alt='pick'
              key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
      :
      
          
          <div className='product-images'>
            {imgSource.map((imgSource, index) => (
              <img src={imgSource}
                   alt='pick'
                   key={index} />
            ))}
          </div>
      }

          <div className='product-config'>
            <div className='product-config__head'>
              <p className='product-config__title'>{configTitle}</p>
              <p>{price}&nbsp;₽</p>
            </div>
            <div className='product-config__params'>
              <div>
                <button className='product-config-detail-button'>
                  <p>{detailButtonTitle}</p>
                  <div className='product-config-detail-button__arrow'>
                    <img src='/assets/img/icons/arrow.svg'
                         alt='' />
                    <p>Детали</p>
                  </div>
                </button>
              </div>

              <div className='product-config__size'>
                <ul className='product-config__size-list'>
                  {size.map((value, index) => (
                    <li key={index}>
                      <button className='product-config__size-button'>{value}</button>
                    </li>
                  ))}
                </ul>
                <button
                  className='product-config__size-guide-button'
                  onClick={() => setSizeGuideActive(true)}>
                  Гид по размерам
                </button>
              </div>

              <div className='product-config__colors'>
                <ul className='product-config__colors-list'>
                  {colors.map((colorIndex, index) => (
                    <li key={index}>
                      <button
                        className='product-config__colors-button'
                        onClick={() => setSelectedColor(colorIndex)}>
                        <img src={colorsData[colorIndex].img}
                             alt='pick' />
                      </button>
                    </li>
                  ))}
                </ul>
                <p>{colorsData[colors[selectedColor]]?.name}</p>
              </div>

              <PrimaryButtonActive label={'Купить'} />

              <ul className='product-config__info-list'>
                <li className='product-config__info-item'>
                  <button className='product-config__button'
                          onClick={toggleDetails}>
                    <div className='product-config__button-title'>
                      <p>Детали и уход</p>
                      {isDetailsOpen ? <p>-</p> : <p>+</p>}
                    </div>
                    {details}
                  </button>
                </li>
                <li className='product-config__info-item'>
                  <button className='product-config__button'
                          onClick={togglePayment}>
                    <div className='product-config__button-title'>
                      <p>Оплата и доставка</p>
                      {isPaymentOpen ? <p>-</p> : <p>+</p>}
                    </div>
                    {payment}
                  </button>
                </li>
                <li className='product-config__info-item'>
                  <button className='product-config__button'
                          onClick={toggleExchange}>
                    <div className='product-config__button-title'>
                      <p>Возврат</p>
                      {isExchangeOpen ? <p>-</p> : <p>+</p>}
                    </div>
                    {exchange}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <SizeGuide sizeGuideActive={sizeGuideActive}
                 setSizeGuideActive={setSizeGuideActive} />
    </>
      
  );
};

export default ProductLayout;
