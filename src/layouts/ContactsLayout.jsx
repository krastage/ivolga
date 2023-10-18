/**
 * Шаблон контактов
 */

import "../styles/layouts/FAQ.scss";
import { Link, useLocation } from "react-router-dom";

export const ContactsLayout = ({ content }) => {
  const location = useLocation();

  const LinkItem = ({ to, location, label }) => {
    return (
      <li>
        <Link
          to={to}
          className={location.pathname === to ? "faq-link-active" : "faq-link"}
        >
          {label}
        </Link>
      </li>
    );
  };

  return (
    <main className="faq container">
      <div className="faq-menu">
        <ul className="faq-menu__links">
          <li>
            <LinkItem
              to="/contacts"
              label="Связаться с нами"
              location={location}
            />
          </li>
          <li>
            <LinkItem
              to="/contacts/stores"
              label="Адреса магазинов"
              location={location}
            />
          </li>
        </ul>
      </div>
      {content}
    </main>
  );
};
