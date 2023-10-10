/**
 * Страница с коллекциями
 */

import './Collections.scss';
import { Footer } from '../../components/Footer/Footer';
import { CollectionsList } from '../../layouts/CollectionsList/CollectionsList';
import { CollectionsElement } from '../../layouts/CollectionsList/CollectionsElement';
import { AnimatedPage } from '../../components/AnimatedPage';

export const Collections = () => {
  return (
    <AnimatedPage>
      <>
        <main className="collections-content">

          <CollectionsList
            title={null}
            elements={[
              <CollectionsElement
                link={'/collections/collection'}
                imageSource={'/assets/img/collections/product1.png'}
                title={'Весна/Лето 2024, Лукбук'} />,
              <CollectionsElement
                link={'/collections/collection'}
                imageSource={'/assets/img/collections/product2.png'}

                title={'Весна/Лето 2024, Лукбук'} />,
              <CollectionsElement
                link={'/collections/collection'}
                imageSource={'/assets/img/collections/product3.png'}
                title={'Весна/Лето 2024, Лукбук'} />,
              <CollectionsElement
                link={'/collections/collection'}
                imageSource={'/assets/img/collections/product4.png'}
                title={'Весна/Лето 2024, Лукбук'} />,
              <CollectionsElement
                link={'/collections/collection'}
                imageSource={'/assets/img/collections/product5.png'}
                title={'Весна/Лето 2024, Лукбук'} />,
              <CollectionsElement
                link={'/collections/collection'}
                imageSource={'/assets/img/collections/product6.png'}
                title={'Весна/Лето 2024, Лукбук'} />,
            ]} />

        </main>
        <Footer />
      </>
    </AnimatedPage>
  );
};
