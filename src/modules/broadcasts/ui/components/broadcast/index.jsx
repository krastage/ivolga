/**
 *  Страница прямого эфира
 */

import '../../../../../styles/Broadcast.scss';
import AnimatedPage from '../../../../utils/AnimatedPage';
import Footer from '../../../../footer/ui';
import ProductCard from '../../../../ud-ui/layouts/products/product-card';
import ProductsCardList from '../../../../ud-ui/layouts/products/product-card-list';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';

const Broadcast = () => {
  return (
    <AnimatedPage>
      <>
        <main className='broadcast-content container'>
          <div className='broadcast'>
            <div className='broadcast-poster'>
              <img src='/assets/img/broadcast/broadcast1.png' alt='' className='broadcast-video' />
              <div className='broadcast-elements'>
                <p className='broadcast-state'>Запись</p>
                <article className='broadcast-article'>
                  <h1 className='title'>Готовим образы к осени</h1>
                  <p>23 Июля</p>
                </article>
                <div className='broadcast-tools'>
                  <img src='/assets/img/icons/line-translation.png' alt='' />
                  <p>02:14 / 10:17</p>
                </div>
              </div>

              <Swiper modules={[FreeMode]} slidesPerView={3} spaceBetween={10} freeMode={true}>
                <SwiperSlide>
                  <ProductCard
                    size='small'
                    link={'/product'}
                    title={'Топ черный из кашемира'}
                    price={'25 000'}
                    imageSource={'/assets/img/broadcast/product.png'}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductCard
                    size='small'
                    link={'/product'}
                    title={'Топ черный из кашемира'}
                    price={'25 000'}
                    imageSource={'/assets/img/broadcast/product.png'}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductCard
                    size='small'
                    link={'/product'}
                    title={'Топ черный из кашемира'}
                    price={'25 000'}
                    imageSource={'/assets/img/broadcast/product.png'}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductCard
                    size='small'
                    link={'/product'}
                    title={'Топ черный из кашемира'}
                    price={'25 000'}
                    imageSource={'/assets/img/broadcast/product.png'}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className='broadcast-products'>
            <ProductsCardList
              title={'Товары из трансляции'}
              filterButton={false}
              itemsPerRow={2}
              children={[
                <ProductCard
                  size='small'
                  link={'/product'}
                  title={'Топ черный из кашемира'}
                  price={'25 000'}
                  imageSource={'/assets/img/broadcast/product.png'}
                />,
                <ProductCard
                  size='small'
                  link={'/product'}
                  title={'Топ черный из кашемира'}
                  price={'25 000'}
                  imageSource={'/assets/img/broadcast/product.png'}
                />,
                <ProductCard
                  size='small'
                  link={'/product'}
                  title={'Топ черный из кашемира'}
                  price={'25 000'}
                  imageSource={'/assets/img/broadcast/product.png'}
                />,
                <ProductCard
                  size='small'
                  link={'/product'}
                  title={'Топ черный из кашемира'}
                  price={'25 000'}
                  imageSource={'/assets/img/broadcast/product.png'}
                />,
              ]}
            />
          </div>
        </main>
        <Footer />
      </>
    </AnimatedPage>
  );
};

export default Broadcast;
