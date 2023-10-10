/**
 * Шаблон блока FAQ
 */

import './FAQ.scss';
import { Link, useLocation } from 'react-router-dom';

export const FAQLayout = ({ menuTitle, contentTitle, content }) => {
  const location = useLocation();

  const LinkItem = ({ to, location, label }) => {
    return (
      <li>
        <Link
          to={to}
          className={location.pathname === to ? 'faq-link-active' : 'faq-link'}>{label}</Link>
      </li>
    );
  };

  return (
    <main className="faq container">

      <div className="faq-menu">
        <h1 className="faq-menu__title">{menuTitle}</h1>
        <ul className="faq-menu__links">
          <li>
            <LinkItem to="/delivery" label="Доставка" location={location} />
          </li>
          <li>
            <LinkItem to="/exchange" label="Оплата и возврат" location={location} />
          </li>
          <li>
            <LinkItem to="/care" label="Уход за одеждой" location={location} />
          </li>
          <li>
            <LinkItem to="/privacy" label="Политика" location={location} />
          </li>
          <li>
            <LinkItem to="/payment" label="Оферта" location={location} />
          </li>
        </ul>
      </div>

      <div className="faq-info">
        <h1 className="faq-info__title">{contentTitle}</h1>
        {content}
      </div>
    </main>
  );
};

