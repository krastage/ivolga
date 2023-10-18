import '../styles/pages/PageNotFound.scss';
import { AnimatedPage } from '../components/AnimatedPage';

export const PageNotFound = () => {
  return (
    <AnimatedPage>
      <div className="page-not-found container">
        <h1>Страница не найдена</h1>
      </div>
    </AnimatedPage>
  );
};
