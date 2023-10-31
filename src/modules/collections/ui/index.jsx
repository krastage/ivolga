/**
 * Страница "Коллекции"
 */

import '../../../styles/pages/Collections.scss';
import AnimatedPage from '../../../utils/AnimatedPage';
import Footer from '../../footer/ui';
import CollectionsElement from './components/collection';
import CollectionsList from './components/list';

const Collections = () => {
  return (
    <AnimatedPage>
      <>
        <main className='collections-content'>
          <CollectionsList
            title={null}
            elements={[
              <CollectionsElement
                link={'/collections/collection'}
                imageSource={'/assets/img/collections/product1.png'}
                title={'Весна/Лето 2024, Лукбук'}
              />,
              <CollectionsElement
                link={'/collections/collection'}
                imageSource={'/assets/img/collections/product2.png'}
                title={'Весна/Лето 2024, Лукбук'}
              />,
              <CollectionsElement
                link={'/collections/collection'}
                imageSource={'/assets/img/collections/product3.png'}
                title={'Весна/Лето 2024, Лукбук'}
              />,
              <CollectionsElement
                link={'/collections/collection'}
                imageSource={'/assets/img/collections/product4.png'}
                title={'Весна/Лето 2024, Лукбук'}
              />,
              <CollectionsElement
                link={'/collections/collection'}
                imageSource={'/assets/img/collections/product5.png'}
                title={'Весна/Лето 2024, Лукбук'}
              />,
              <CollectionsElement
                link={'/collections/collection'}
                imageSource={'/assets/img/collections/product6.png'}
                title={'Весна/Лето 2024, Лукбук'}
              />,
            ]}
          />
        </main>
        <Footer />
      </>
    </AnimatedPage>
  );
};

export default Collections;
