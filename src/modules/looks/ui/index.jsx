/**
 * Страница "Образы"
 */

import '../../../styles/global/_settings.scss';
import '../../../styles/pages/Looks.scss';
import AnimatedPage from '../../../utils/AnimatedPage';
import Footer from '../../footer/ui';
import ProductCard from '../../products/ui/components/product-card';
import ProductsCardList
  from '../../products/ui/components/product-card/components/list';

const Looks = () => {
  return (
    <AnimatedPage>
      <>
        <main className='content'>
          <div className='looks-products'>
            <div className='looks-posters container'>
              <img src='/assets/img/looks/big/look1.png' alt='look' />
              <img src='/assets/img/looks/big/look2.png' alt='look' />
            </div>
            <ProductsCardList
              filterButton={false}
              itemsPerRow={4}
              children={[
                <ProductCard
                  size='big'
                  link={'/product'}
                  title={'Топ черный из кашемира'}
                  price={25_000}
                  imageSource={'/assets/img/looks/medium/look1.png'}
                />,
                <ProductCard
                  size='big'
                  link={'/product'}
                  title={'Топ черный из кашемира'}
                  price={25_000}
                  imageSource={'/assets/img/looks/medium/look2.png'}
                />,
                <ProductCard
                  size='big'
                  link={'/product'}
                  title={'Топ черный из кашемира'}
                  price={25_000}
                  imageSource={'/assets/img/looks/medium/look3.png'}
                />,
                <ProductCard
                  size='big'
                  link={'/product'}
                  title={'Топ черный из кашемира'}
                  price={25_000}
                  imageSource={'/assets/img/looks/medium/look4.png'}
                />,
              ]}
            />
          </div>

          <div className='looks-products'>
            <div className='looks-posters'>
              <img src='/assets/img/looks/big/look3.png' alt='look' />
              <img src='/assets/img/looks/big/look4.png' alt='look' />
            </div>
            <ProductsCardList
              filterButton={false}
              children={[
                <ProductCard
                  size='big'
                  link={'/product'}
                  title={'Топ черный из кашемира'}
                  price={25_000}
                  imageSource={'/assets/img/looks/medium/look1.png'}
                />,
                <ProductCard
                  size='big'
                  link={'/product'}
                  title={'Топ черный из кашемира'}
                  price={25_000}
                  imageSource={'/assets/img/looks/medium/look2.png'}
                />,
                <ProductCard
                  size='big'
                  link={'/product'}
                  title={'Топ черный из кашемира'}
                  price={25_000}
                  imageSource={'/assets/img/looks/medium/look3.png'}
                />,
                <ProductCard
                  size='big'
                  link={'/product'}
                  title={'Топ черный из кашемира'}
                  price={25_000}
                  imageSource={'/assets/img/looks/medium/look4.png'}
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

export default Looks;
