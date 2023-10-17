import '../styles/global/_settings.scss';
import '../styles/pages/Home.scss';
import { Footer } from '../components/Footer';
import { ProductsCardBig } from '../layouts/ProductsCardBig';
import { ProductsCardList } from '../layouts/ProductsCardList';
import { AnimatedPage } from '../components/AnimatedPage';
import {Link} from 'react-router-dom';

export const Home = () => {
  return (
    <AnimatedPage>
      <>
        <main className="home-content">

          <div className="home-collection">
            <div className="home__hero body-hero">
              <div className="home__description">
                <article className="home__article">
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
              elements={[
                <ProductsCardBig
                  link={'/catalog/product'}
                  title={'Топ черный из кашемира'}
                  price={25000}
                  imageSource={'/assets/img/products/product.png'} />,
                <ProductsCardBig
                  link={'/catalog/product'}
                  title={'Топ черный из кашемира'}
                  price={25000}
                  imageSource={'/assets/img/products/product.png'} />,
                <ProductsCardBig
                  link={'/catalog/product'}
                  title={'Топ черный из кашемира'}
                  price={25000}
                  imageSource={'/assets/img/products/product.png'} />,
                <ProductsCardBig
                  link={'/catalog/product'}
                  title={'Топ черный из кашемира'}
                  price={25000}
                  imageSource={'/assets/img/products/product.png'} />
              ]} />
          </div>

          <div className="home-collection">
            <div className="home__hero house-hero">
              <div className="home__description">
                <article className="home__article">
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
              elements={[
                <ProductsCardBig
                  link={'/catalog/product'}
                  title={'Топ черный из кашемира'}
                  price={25000}
                  imageSource={'/assets/img/products/product2.png'} />,
                <ProductsCardBig
                  link={'/catalog/product'}
                  title={'Топ черный из кашемира'}
                  price={25000}
                  imageSource={'/assets/img/products/product3.png'} />,
                <ProductsCardBig
                  link={'/catalog/product'}
                  title={'Топ черный из кашемира'}
                  price={25000}
                  imageSource={'/assets/img/products/product4.png'} />,
                <ProductsCardBig
                  link={'/catalog/product'}
                  title={'Топ черный из кашемира'}
                  price={25000}
                  imageSource={'/assets/img/products/product5.png'} />
              ]} />
          </div>
        </main>
        <Footer />
      </>
    </AnimatedPage>
  );
};
