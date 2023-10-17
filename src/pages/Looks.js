import '../styles/global/_settings.scss';
import '../styles/pages/Looks.scss';
import { ProductsCardList } from '../layouts/ProductsCardList';
import { ProductsCardBig } from '../layouts/ProductsCardBig';
import { Footer } from '../components/Footer';
import { AnimatedPage } from '../components/AnimatedPage';

export const Looks = () => {
  return (
    <AnimatedPage>
      <>
        <main className="looks-content">

          <div className="looks-products">
            <div className="looks-posters container">
              <img src="/assets/img/looks/big/look1.png" alt="look" />
              <img src="/assets/img/looks/big/look2.png" alt="look" />
            </div>
            <ProductsCardList
              filterButton={false}
              elements={[
              <ProductsCardBig
                link={'/catalog/product'}
                title={'Топ черный из кашемира'}
                price={25000}
                imageSource={'/assets/img/looks/medium/look1.png'} />,
              <ProductsCardBig
                link={'/catalog/product'}
                title={'Топ черный из кашемира'}
                price={25000}
                imageSource={'/assets/img/looks/medium/look2.png'} />,
              <ProductsCardBig
                link={'/catalog/product'}
                title={'Топ черный из кашемира'}
                price={25000}
                imageSource={'/assets/img/looks/medium/look3.png'} />,
              <ProductsCardBig
                link={'/catalog/product'}
                title={'Топ черный из кашемира'}
                price={25000}
                imageSource={'/assets/img/looks/medium/look4.png'} />
            ]} />
          </div>

          <div className="looks-products">
            <div className="looks-posters">
              <img src="/assets/img/looks/big/look3.png" alt="look" />
              <img src="/assets/img/looks/big/look4.png" alt="look" />
            </div>
            <ProductsCardList
              filterButton={false}
              elements={[
                <ProductsCardBig
                  link={'/catalog/product'}
                  title={'Топ черный из кашемира'}
                  price={25000}
                  imageSource={'/assets/img/looks/medium/look1.png'} />,
                <ProductsCardBig
                  link={'/catalog/product'}
                  title={'Топ черный из кашемира'}
                  price={25000}
                  imageSource={'/assets/img/looks/medium/look2.png'} />,
                <ProductsCardBig
                  link={'/catalog/product'} title={'Топ черный из кашемира'}
                  price={25000}
                  imageSource={'/assets/img/looks/medium/look3.png'} />,
                <ProductsCardBig
                  link={'/catalog/product'} title={'Топ черный из кашемира'}
                  price={25000}
                  imageSource={'/assets/img/looks/medium/look4.png'} />
              ]} />
          </div>
        </main>
        <Footer />
      </>
    </AnimatedPage>
  );
};
