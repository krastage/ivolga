/**
 * Страница конкретного продукта, строится на основе шаблона ProductLayout
 */

import Footer from '../../../ui/layouts/Footer';
import ProductCard from '../../../ui/layouts/ProductCard';
import ProductLayout from '../../../ui/layouts/ProductLayout';
import ProductsCardList from '../../../ui/layouts/ProductsCardList';
import RelevantLooks from '../../../ui/layouts/RelevantLooks';
import '../../../styles/pages/Product.scss';
import AnimatedPage from '../../../utils/AnimatedPage';

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
