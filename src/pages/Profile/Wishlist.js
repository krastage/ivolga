import { ProfileLayout } from '../../layouts/Profile/ProfileLayout';
import { AnimatedPage } from '../../components/AnimatedPage';
import { ProductsCardList } from '../../layouts/ProductsCard/ProductsCardList';
import { ProductsCard } from '../../layouts/ProductsCard/ProductsCard';

export const Wishlist = () => {
  const content = (
    <AnimatedPage>
      <div className="wishlist-container">
        <ProductsCardList
          title={null}
          filterButton={true}
          elements={[
            <ProductsCard
              link={'/catalog/product'}
              title={'Топ черный из кашемира'}
              price={25000}
              imageSource={'/assets/img/products/product.png'} />,
            <ProductsCard
              link={'/catalog/product'}
              title={'Топ черный из кашемира'}
              price={25000}
              imageSource={'/assets/img/products/product.png'} />,
            <ProductsCard
              link={'/catalog/product'}
              title={'Топ черный из кашемира'}
              price={25000}
              imageSource={'/assets/img/products/product.png'} />,
            <ProductsCard
              link={'/catalog/product'}
              title={'Топ черный из кашемира'}
              price={25000}
              imageSource={'/assets/img/products/product.png'} />,
            <ProductsCard
              link={'/catalog/product'}
              title={'Топ черный из кашемира'}
              price={25000}
              imageSource={'/assets/img/products/product.png'} />,
            <ProductsCard
              link={'/catalog/product'}
              title={'Топ черный из кашемира'}
              price={25000}
              imageSource={'/assets/img/products/product.png'} />,
            <ProductsCard
              link={'/catalog/product'}
              title={'Топ черный из кашемира'}
              price={25000}
              imageSource={'/assets/img/products/product.png'} />,
            <ProductsCard
              link={'/catalog/product'}
              title={'Топ черный из кашемира'}
              price={25000}
              imageSource={'/assets/img/products/product.png'} />,
          ]} />
      </div>
    </AnimatedPage>
  );

  return (
    <ProfileLayout content={content}/>
  );
};
