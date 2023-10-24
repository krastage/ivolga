/**
 * Несуществующая страница
 */

import AnimatedPage from '../../utils/AnimatedPage';
import '../../styles/pages/PageNotFound.scss';

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