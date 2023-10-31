/**
 * Страница конкретного продукта, строится на основе шаблона product
 */

import '../../../styles/pages/Product.scss';
import AnimatedPage from '../../../utils/AnimatedPage';
import Footer from '../../footer/ui';
import RelevantLooks from '../../looks/ui/components/relevant-looks';
import ProductLayout from './components/product';
import ProductCard from './components/product-card';
import ProductsCardList from './components/product-card/components/list';

const Product = () => {
  return (
    <AnimatedPage>
      <>
        <main className='product-content'>
          <ProductLayout
            imgSource={[
              '/assets/img/product/product1.png',
              '/assets/img/product/product2.png',
              '/assets/img/product/product3.png',
            ]}
            configTitle='Топ вязанный из кашемира нежно бежевого цвета'
            price={30_000}
            detailButtonTitle={'Топ голубого цвета в клетку, лён'}
            size={[56, 56, 56, 56]}
            colors={[0, 1, 2]}
          />

          <ProductsCardList
            title={'Бестселлеры'}
            filterButton={false}
            itemsPerRow={4}
            children={[
              <ProductCard
                size='big'
                link={'/product'}
                title={'Топ черный из кашемира'}
                price={25_000}
                imageSource={'/assets/img/products/product2.png'}
              />,
              <ProductCard
                size='big'
                link={'/product'}
                title={'Топ черный из кашемира'}
                price={25_000}
                imageSource={'/assets/img/products/product3.png'}
              />,
              <ProductCard
                size='big'
                link={'/product'}
                title={'Топ черный из кашемира'}
                price={25_000}
                imageSource={'/assets/img/products/product4.png'}
              />,
              <ProductCard
                size='big'
                link={'/product'}
                title={'Топ черный из кашемира'}
                price={25_000}
                imageSource={'/assets/img/products/product5.png'}
              />,
            ]}
          />

          <RelevantLooks
            imageSource={[
              '/assets/img/relevant-looks/look1.png',
              '/assets/img/relevant-looks/look2.png',
              '/assets/img/relevant-looks/look3.png',
            ]}
          />
        </main>
        <Footer />
      </>
    </AnimatedPage>
  );
};

export default Product;
