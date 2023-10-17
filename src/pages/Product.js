import '../styles/pages/Product.scss';
import { AnimatedPage } from '../components/AnimatedPage';
import { Footer } from '../components/Footer';
import { ProductsCardList } from '../layouts/ProductsCardList';
import { ProductsCardBig } from '../layouts/ProductsCardBig';
import { ProductLayout } from '../layouts/ProductLayout';
import { RelevantLooks } from '../layouts/RelevantLooks';

export const Product = () => {
  return (
    <AnimatedPage>
      <>
        <main className="product-content">

          <ProductLayout
            imgSource={[
              '/assets/img/product/product1.png',
              '/assets/img/product/product2.png',
              '/assets/img/product/product3.png'
            ]}
            configTitle="Топ вязанный из кашемира нежно бежевого цвета"
            price={30000}
            detailButtonTitle={'Топ голубого цвета в клетку, лён'}
            size={[56, 56, 56, 56]}
            colorSource={[
              '/assets/img/icons/color-pick1.svg',
              '/assets/img/icons/color-pick2.svg',
              '/assets/img/icons/color-pick3.svg'
            ]}
            color={'Бежевый'}
          />

          <ProductsCardList title={'Бестселлеры'} filterButton={false} elements={[
            <ProductsCardBig
              link={'/catalog/product'}
              title={'Топ черный из кашемира'}
              price={25000}
              imageSource={'/assets/img/products/product2.png'} />,
            <ProductsCardBig
              link={'/catalog/product'}
              title={'Топ черный из кашемира'} price={25000}
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

          <RelevantLooks
            imageSource={[
              '/assets/img/relevant-looks/look1.png',
              '/assets/img/relevant-looks/look2.png',
              '/assets/img/relevant-looks/look3.png'
            ]} />

        </main>
        <Footer />
      </>
    </AnimatedPage>
  );
};
