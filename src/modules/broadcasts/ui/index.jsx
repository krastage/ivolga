/**
 * Страница "Прямые эфиры"
 */

import { Link } from 'react-router-dom';
import AnimatedPage from '../../../utils/AnimatedPage';
import Footer from '../../footer/ui';
import '../../../styles/pages/Broadcasts/Broadcasts.scss';

const Broadcasts = () => {
  return (
    <AnimatedPage>
      <>
        <main className='broadcasts-content'>
          <ul className='broadcasts-list container'>
            <li className='broadcasts-item'>
              <div className='broadcasts-translation'>
                <Link to='/broadcasts/broadcast'>
                  <img
                    src='/assets/img/broadcasts/poster1.png'
                    alt='broadcast'
                    className='broadcasts-poster'
                  />
                  <div className='broadcasts-elements'>
                    <p className='broadcasts-state'>В эфире</p>
                    <article className='broadcasts-article'>
                      <h1>Готовим образы к осени</h1>
                      <p>23 Июля</p>
                    </article>
                  </div>
                </Link>
              </div>

              <ul className='broadcasts-products'>
                <li>
                  <img src='/assets/img/looks/small/look1.png' alt='look' />
                </li>
                <li>
                  <img src='/assets/img/looks/small/look2.png' alt='look' />
                </li>
                <li>
                  <img src='/assets/img/looks/small/look3.png' alt='look' />
                </li>
                <li>
                  <img src='/assets/img/looks/small/look4.png' alt='look' />
                </li>
              </ul>
            </li>

            <li className='broadcasts-item'>
              <div className='broadcasts-translation'>
                <Link to='/broadcasts/broadcast'>
                  <img
                    src='/assets/img/broadcasts/poster2.png'
                    alt='broadcast'
                    className='broadcasts-poster'
                  />
                  <div className='broadcasts-elements'>
                    <p className='broadcasts-state'>Запись</p>
                    <article className='broadcasts-article'>
                      <h1>Готовим образы к осени</h1>
                      <p>23 Июля</p>
                    </article>
                  </div>
                </Link>
              </div>

              <ul className='broadcasts-products'>
                <li>
                  <img src='/assets/img/looks/small/look1.png' alt='look' />
                </li>
                <li>
                  <img src='/assets/img/looks/small/look2.png' alt='look' />
                </li>
                <li>
                  <img src='/assets/img/looks/small/look3.png' alt='look' />
                </li>
                <li>
                  <img src='/assets/img/looks/small/look3.png' alt='look' />
                </li>
                <li>
                  <img src='/assets/img/looks/small/look3.png' alt='look' />
                </li>
                <li>
                  <img src='/assets/img/looks/small/look4.png' alt='look' />
                </li>
              </ul>
            </li>

            <li className='broadcasts-item'>
              <div className='broadcasts-translation'>
                <Link to='/broadcasts/broadcast'>
                  <img
                    src='/assets/img/broadcasts/poster3.png'
                    alt='broadcast'
                    className='broadcasts-poster'
                  />
                  <div className='broadcasts-elements'>
                    <p className='broadcasts-state'>Запись</p>
                    <article className='broadcasts-article'>
                      <h1>Готовим образы к осени</h1>
                      <p>23 Июля</p>
                    </article>
                  </div>
                </Link>
              </div>

              <ul className='broadcasts-products'>
                <li>
                  <img src='/assets/img/looks/small/look5.png' alt='look' />
                </li>
                <li>
                  <img src='/assets/img/looks/small/look6.png' alt='look' />
                </li>
                <li>
                  <img src='/assets/img/looks/small/look7.png' alt='look' />
                </li>
                <li>
                  <img src='/assets/img/looks/small/look8.png' alt='look' />
                </li>
              </ul>
            </li>
          </ul>
        </main>
        <Footer />
      </>
    </AnimatedPage>
  );
};

export default Broadcasts;
