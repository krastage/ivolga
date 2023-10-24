/**
 * Домашняя страница
 */

import { Link } from 'react-router-dom';
import AnimatedPage from '../../utils/AnimatedPage';
import Footer from '../../components/Footer';
import ProductCard from '../../layouts/ProductCard';
import ProductsCardList from '../../layouts/ProductsCardList';
import '../../styles/global/_settings.scss';
import '../../styles/pages/Home.scss';

const Home = () => {
  return (
    <AnimatedPage>
      <>
        <main className='content'>
          <div className='home-collection'>
            <div className='home__hero body-hero'>
              <div className='home__description'>
                <article className='home__article'>
                  <p>Новая коллекция</p>
                  <h1>Осень / Зима 2023 - 2024</h1>
                </article>
                <div>
                  <Link to='/catalog'>Перейти к покупкам</Link>
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
                  price={25_000}
                  imageSource={'/assets/img/products/product.png'}
                  key={0}
                />,
                <ProductCard
                  size='big'
                  link={'/product'}
                  title={'Топ черный из кашемира'}
                  price={25_000}
                  imageSource={'/assets/img/products/product.png'}
                  key={1}
                />,
                <ProductCard
                  size='big'
                  link={'/product'}
                  title={'Топ черный из кашемира'}
                  price={25_000}
                  imageSource={'/assets/img/products/product.png'}
                  key={2}
                />,
                <ProductCard
                  size='big'
                  link={'/product'}
                  title={'Топ черный из кашемира'}
                  price={25_000}
                  imageSource={'/assets/img/products/product.png'}
                  key={3}
                />,
              ]}
            />
          </div>

          <div className='home-collection'>
            <div className='home__hero house-hero'>
              <div className='home__description'>
                <article className='home__article'>
                  <p>Новая коллекция</p>
                  <h1>Осень / Зима 2023 - 2024</h1>
                </article>
                <div>
                  <Link to='/catalog'>Перейти к покупкам</Link>
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
                  price={25_000}
                  imageSource={'/assets/img/products/product2.png'}
                  key={1}
                />,
                <ProductCard
                  size='big'
                  link={'/product'}
                  title={'Топ черный из кашемира'}
                  price={25_000}
                  imageSource={'/assets/img/products/product3.png'}
                  key={2}
                />,
                <ProductCard
                  size='big'
                  link={'/product'}
                  title={'Топ черный из кашемира'}
                  price={25_000}
                  imageSource={'/assets/img/products/product4.png'}
                  key={3}
                />,
                <ProductCard
                  size='big'
                  link={'/product'}
                  title={'Топ черный из кашемира'}
                  price={25_000}
                  imageSource={'/assets/img/products/product5.png'}
                  key={4}
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

export default Home;
