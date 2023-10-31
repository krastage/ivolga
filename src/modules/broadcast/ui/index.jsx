/**
 *  Страница прямого эфира
 */

import Footer from '../../../ui/layouts/Footer';
import ProductCard from '../../../ui/layouts/ProductCard';
import ProductsCardList from '../../../ui/layouts/ProductsCardList';
import '../../../styles/pages/Broadcasts/Broadcast.scss';
import AnimatedPage from '../../../utils/AnimatedPage';

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
                  <h1>Готовим образы к осени</h1>
                  <p>23 Июля</p>
                </article>
                <div className='broadcast-tools'>
                  <img src='/assets/img/icons/line-translation.png' alt='' />
                  <p>02:14 / 10:17</p>
                </div>
              </div>
            </div>
          </div>

          <div className='broadcast-products'>
            <ProductsCardList
              title={'Товары из трансляции'}
              filterButton={false}
              itemsPerRow={1}
              children={[
                <ProductCard
                  size='small'
                  link={'/product'}
                  title={'Топ черный из кашемира'}
                  price={25_000}
                  imageSource={'/assets/img/broadcast/product.png'}
                />,
                <ProductCard
                  size='small'
                  link={'/product'}
                  title={'Топ черный из кашемира'}
                  price={25_000}
                  imageSource={'/assets/img/broadcast/product.png'}
                />,
                <ProductCard
                  size='small'
                  link={'/product'}
                  title={'Топ черный из кашемира'}
                  price={25_000}
                  imageSource={'/assets/img/broadcast/product.png'}
                />,
                <ProductCard
                  size='small'
                  link={'/product'}
                  title={'Топ черный из кашемира'}
                  price={25_000}
                  imageSource={'/assets/img/broadcast/product.png'}
                />,
                <ProductCard
                  size='small'
                  link={'/product'}
                  title={'Топ черный из кашемира'}
                  price={25_000}
                  imageSource={'/assets/img/broadcast/product.png'}
                />,
                <ProductCard
                  size='small'
                  link={'/product'}
                  title={'Топ черный из кашемира'}
                  price={25_000}
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
