/**
 * Домашняя страница
 */

import { Link } from 'react-router-dom';

import '../../../styles/Home.scss';
import AnimatedPage from '../../utils/AnimatedPage';
import Footer from '../../footer/ui';
import ProductCard from '../../ud-ui/layouts/products/product-card';
import ProductsCardList from '../../ud-ui/layouts/products/product-card-list';

function Home() {
  return (
    <AnimatedPage>
      <>
        
        <main className='content'>
          <div className='home-collection'>
            <div className='home__hero body-hero'>
              <div className='home__description'>
                <article className='home__article'>
                  <p className='home__article-text'>Новая коллекция</p>
                  <h1 className='title'>Осень / Зима 2023 - 2024</h1>
                </article>
                <div>
                  <Link to='/catalog' className='home-link'>
                    Перейти к покупкам
                  </Link>
                </div>
              </div>
            </div>
            <ProductsCardList
              title={'Бестселлеры'}
              filterButton={false}
              itemsPerRow={4}
              children={[
                <ProductCard
                  size='big'
                  link={'/product'}
                  title={'Топ черный из кашемира'}
                  price={'25 000'}
                  imageSource={'/assets/img/products/product.png'}
                  key={0} />,
                <ProductCard
                  size='big'
                  link={'/product'}
                  title={'Топ черный из кашемира'}
                  price={'25 000'}
                  imageSource={'/assets/img/products/product.png'}
                  key={1} />,
                <ProductCard
                  size='big'
                  link={'/product'}
                  title={'Топ черный из кашемира'}
                  price={'25 000'}
                  imageSource={'/assets/img/products/product.png'}
                  key={2} />,
                <ProductCard
                  size='big'
                  link={'/product'}
                  title={'Топ черный из кашемира'}
                  price={'25 000'}
                  imageSource={'/assets/img/products/product.png'}
                  key={3} />,
              ]} />
          </div>

          <div className='home-collection'>
            <div className='home__hero house-hero'>
              <div className='home__description'>
                <article className='home__article'>
                  <p className='home__article-text'>Новая коллекция</p>
                  <h1 className='title'>Осень / Зима 2023 - 2024</h1>
                </article>
                <div>
                  <Link to='/catalog' className='home-link'>
                    Перейти к покупкам
                  </Link>
                </div>
              </div>
            </div>
            <ProductsCardList
              title={'Бестселлеры'}
              filterButton={false}
              children={[
                <ProductCard
                  size='big'
                  link={'/product'}
                  title={'Топ черный из кашемира'}
                  price={'25 000'}
                  imageSource={'/assets/img/products/product2.png'}
                  key={1} />,
                <ProductCard
                  size='big'
                  link={'/product'}
                  title={'Топ черный из кашемира'}
                  price={'25 000'}
                  imageSource={'/assets/img/products/product3.png'}
                  key={2} />,
                <ProductCard
                  size='big'
                  link={'/product'}
                  title={'Топ черный из кашемира'}
                  price={'25 000'}
                  imageSource={'/assets/img/products/product4.png'}
                  key={3} />,
                <ProductCard
                  size='big'
                  link={'/product'}
                  title={'Топ черный из кашемира'}
                  price={'25 000'}
                  imageSource={'/assets/img/products/product5.png'}
                  key={4} />,
              ]} />
          </div>
        </main>
        <Footer />
      </>
    </AnimatedPage>
  );
}

export default Home;
