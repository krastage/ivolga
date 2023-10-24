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
                  price={25000}
                  imageSource={'/assets/img/products/product.png'}
                />,
                <ProductCard
                  size='big'
                  link={'/product'}
                  title={'Топ черный из кашемира'}
                  price={25000}
                  imageSource={'/assets/img/products/product.png'}
                />,
                <ProductCard
                  size='big'
                  link={'/product'}
                  title={'Топ черный из кашемира'}
                  price={25000}
                  imageSource={'/assets/img/products/product.png'}
                />,
                <ProductCard
                  size='big'
                  link={'/product'}
                  title={'Топ черный из кашемира'}
                  price={25000}
                  imageSource={'/assets/img/products/product.png'}
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
                  price={25000}
                  imageSource={'/assets/img/products/product2.png'}
                />,
                <ProductCard
                  size='big'
                  link={'/product'}
                  title={'Топ черный из кашемира'}
                  price={25000}
                  imageSource={'/assets/img/products/product3.png'}
                />,
                <ProductCard
                  size='big'
                  link={'/product'}
                  title={'Топ черный из кашемира'}
                  price={25000}
                  imageSource={'/assets/img/products/product4.png'}
                />,
                <ProductCard
                  size='big'
                  link={'/product'}
                  title={'Топ черный из кашемира'}
                  price={25000}
                  imageSource={'/assets/img/products/product5.png'}
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
