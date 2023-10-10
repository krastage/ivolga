import './Collection.scss';
import { AnimatedPage } from '../../components/AnimatedPage';
import { Footer } from '../../components/Footer/Footer';

export const Collection = () => {
  return (
    <AnimatedPage>
      <>
        <main className="collection-content">

          <ul className="collection-list container">
            <li className="collection-item--vertical">
              <img src="/assets/img/collection/collection1.png" alt="collection" />
              <p>Для съёмки нашей осенней коллекции мы отправились <br /> на Кольский полуостров – уникальное
                место <br /> с невероятной природой.</p>
            </li>
            <li className="collection-item--horizontal">
              <img src="/assets/img/collection/river.png" alt="collection" />
              <p>Новая осенняя коллекция очень тактильная – мягкий объемный <br /> трикотаж, широкое пальто из шерсти, в
                которое хочется <br /> укутаться, костюмы тройки в двух цветах – цвета северного <br /> моря и песочного
                пляжа, все новые модели созвучны природе <br /> севера во всем ее многообразии.</p>
            </li>
            <li className="collection-item--space-between">
              <div className="collection-item--space-between__title">
                <img src="/assets/img/collection/collection2.png" alt="collection" />
                <p>Кольский полуостров – это широкая зона тундры, живописные скалы.</p>
              </div>
              <img src="/assets/img/collection/collection3.png" alt="collection"
                   className="collection-item--space-between__title-img" />
            </li>
            <li className="collection-item--horizontal">
              <img src="/assets/img/collection/collection4.png" alt="collection" />
              <p>Новая осенняя коллекция очень тактильная – мягкий объемный <br /> трикотаж, широкое пальто из шерсти, в
                которое хочется <br /> укутаться, костюмы тройки в двух цветах – цвета северного <br />моря и песочного
                пляжа, все новые модели созвучны природе <br /> севера во всем ее многообразии.</p>
            </li>
          </ul>

        </main>
        <Footer />
      </>
    </AnimatedPage>
  );
};
