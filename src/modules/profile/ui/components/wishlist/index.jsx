/**
 * Страница подраздела профиля с информацией об избранных товарах (вишлист)
 */

import AnimatedPage from '../../../../../utils/AnimatedPage';
import ProductCard from '../../../../ud-ui/layouts/products/product-card';
import ProductsCardList
  from '../../../../ud-ui/layouts/products/product-card-list';
import ProfileLayout from '../../index';

const Wishlist = () => {
  const content = (
    <AnimatedPage>
      <div className='right-container'>
        <div className='wishlist-container'>
          <ProductsCardList
            title={null}
            filterButton={true}
            itemsPerRow={4}
            children={[
              <ProductCard
                size='medium'
                link={'/product'}
                title={'Топ черный из кашемира'}
                price={25_000}
                imageSource={'/assets/img/products/product.png'}
                key={1}
              />,
              <ProductCard
                size='medium'
                link={'/product'}
                title={'Топ черный из кашемира'}
                price={25_000}
                imageSource={'/assets/img/products/product.png'}
                key={2}
              />,
              <ProductCard
                size='medium'
                link={'/product'}
                title={'Топ черный из кашемира'}
                price={25_000}
                imageSource={'/assets/img/products/product.png'}
                key={3}
              />,
              <ProductCard
                size='medium'
                link={'/product'}
                title={'Топ черный из кашемира'}
                price={25_000}
                imageSource={'/assets/img/products/product.png'}
                key={4}
              />,
              <ProductCard
                size='medium'
                link={'/product'}
                title={'Топ черный из кашемира'}
                price={25_000}
                imageSource={'/assets/img/products/product.png'}
                key={5}
              />,
              <ProductCard
                size='medium'
                link={'/product'}
                title={'Топ черный из кашемира'}
                price={25_000}
                imageSource={'/assets/img/products/product.png'}
                key={6}
              />,
              <ProductCard
                size='medium'
                link={'/product'}
                title={'Топ черный из кашемира'}
                price={25_000}
                imageSource={'/assets/img/products/product.png'}
                key={7}
              />,
              <ProductCard
                size='medium'
                link={'/product'}
                title={'Топ черный из кашемира'}
                price={25_000}
                imageSource={'/assets/img/products/product.png'}
                key={8}
              />,
            ]}
          />
        </div>
      </div>
    </AnimatedPage>
  );

  return <ProfileLayout content={content} />;
};

export default Wishlist;
