/**
 * Модальное окно гида по размерам
 */

import { useEffect } from 'react';
import '../../styles/components/SizeGuide.scss';

const SizeGuide = ({ sizeGuideActive, setSizeGuideActive }) => {
  useEffect(() => {
    if (sizeGuideActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  return (
    <div
      className={sizeGuideActive ? 'sizeGuide-right active' : 'sizeGuide-right'}
      onClick={() => setSizeGuideActive(false)}>
      <div className='modal-right-content' onClick={(e) => e.stopPropagation()}>
        <div className='modal-right-heading'>
          <p>Гид по размерам</p>
          <button onClick={() => setSizeGuideActive(false)}>
            <img
              src='/assets/img/icons/close.svg'
              alt='close'
              className='modal-right-heading__button'
            />
          </button>
        </div>

        <div className='sizeGuide-modal-content'>
          <div className='sizeGuide-modal__table'>
            <h1 className='sizeGuide-table__title'>Футболка</h1>

            <table className='sizeGuide-table'>
              <thead>
                <tr>
                  <th>Размер</th>
                  <th>Длина изделия</th>
                  <th>Ширина груди</th>
                  <th>Длина рукава</th>
                  <th>Длина плеча</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>XS</td>
                  <td>70</td>
                  <td>72</td>
                  <td>58</td>
                  <td>56</td>
                </tr>
                <tr>
                  <td>S</td>
                  <td>70</td>
                  <td>72</td>
                  <td>58</td>
                  <td>56</td>
                </tr>
                <tr>
                  <td>M</td>
                  <td>70</td>
                  <td>72</td>
                  <td>58</td>
                  <td>56</td>
                </tr>
                <tr>
                  <td>L</td>
                  <td>70</td>
                  <td>72</td>
                  <td>58</td>
                  <td>56</td>
                </tr>
                <tr>
                  <td>XL</td>
                  <td>70</td>
                  <td>72</td>
                  <td>58</td>
                  <td>56</td>
                </tr>
              </tbody>
            </table>

            <p className='sizeGuide-modal__table-info'>Значения указаны в сантиметрах</p>
          </div>

          <img src='/assets/img/icons/sizeguide.png' alt='size' />
        </div>
      </div>
    </div>
  );
};

export default SizeGuide;
