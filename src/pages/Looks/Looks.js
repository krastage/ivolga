import '../../styles/global/settings.scss';
import './Looks.scss';
import { ProductsCardList } from '../../layouts/ProductsCard/ProductsCardList';
import { ProductsCard } from '../../layouts/ProductsCard/ProductsCard';
import { Footer } from '../../components/Footer/Footer';
import { AnimatedPage } from '../../components/AnimatedPage';

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
              <ProductsCard
                link={'/catalog/product'}
                title={'Топ черный из кашемира'}
                price={25000}
                imageSource={'/assets/img/looks/medium/look1.png'} />,
              <ProductsCard
                link={'/catalog/product'}
                title={'Топ черный из кашемира'}
                price={25000}
                imageSource={'/assets/img/looks/medium/look2.png'} />,
              <ProductsCard
                link={'/catalog/product'}
                title={'Топ черный из кашемира'}
                price={25000}
                imageSource={'/assets/img/looks/medium/look3.png'} />,
              <ProductsCard
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
                <ProductsCard
                  link={'/catalog/product'}
                  title={'Топ черный из кашемира'}
                  price={25000}
                  imageSource={'/assets/img/looks/medium/look1.png'} />,
                <ProductsCard
                  link={'/catalog/product'}
                  title={'Топ черный из кашемира'}
                  price={25000}
                  imageSource={'/assets/img/looks/medium/look2.png'} />,
                <ProductsCard
                  link={'/catalog/product'} title={'Топ черный из кашемира'}
                  price={25000}
                  imageSource={'/assets/img/looks/medium/look3.png'} />,
                <ProductsCard
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
