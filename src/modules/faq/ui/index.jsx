/**
 * Шаблон блока FAQ
 */

import { Link, useLocation } from 'react-router-dom';
import AnimatedPage from '../../utils/AnimatedPage';
import '../../../styles/FAQ.scss';

const FAQLayout = ({ menuTitle, contentTitle, children }) => {
  const location = useLocation();

  const LinkItem = ({ to, location, label }) => {
    return (
      <li>
        <Link to={to}
              className={location.pathname === to
                ? 'faq-link-active'
                : 'faq-link'}>
          {label}
        </Link>
      </li>
    );
  };

  return (
    <main className='faq container'>
      <div className='faq-menu'>
        <h1 className='faq-menu__title'>{menuTitle}</h1>
        <ul className='faq-menu__links'>
            <LinkItem to='/delivery'
                      label='Доставка'
                      location={location} />
            <LinkItem to='/exchange'
                      label='Оплата и возврат'
                      location={location} />
            <LinkItem to='/care'
                      label='Уход за одеждой'
                      location={location} />
            <LinkItem to='/privacy'
                      label='Политика'
                      location={location} />
            <LinkItem to='/payment'
                      label='Оферта'
                      location={location} />
        </ul>
      </div>

      <AnimatedPage>
        <div className='faq-info'>
          <h1 className='faq-info__title'>{contentTitle}</h1>
          {children}
        </div>
      </AnimatedPage>
    </main>
  );
};

export default FAQLayout;
