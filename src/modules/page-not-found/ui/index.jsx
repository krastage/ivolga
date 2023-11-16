/**
 * Несуществующая страница
 */

import '../../../styles/PageNotFound.scss';
import AnimatedPage from '../../utils/AnimatedPage';

const PageNotFound = () => {
  return (
    <AnimatedPage>
      <div className='page-not-found container'>
        <h1>Страница не найдена</h1>
      </div>
    </AnimatedPage>
  );
};

export default PageNotFound;
