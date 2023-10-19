/**
 * Страница подраздела контактов с адресами магазинов
 */

import { ContactsLayout } from "../../layouts/ContactsLayout";
import { AnimatedPage } from "../../components/AnimatedPage";

export const Stores = () => {
  const content = (
    <AnimatedPage>
      <div className="contacts-info-container">
        <div className="contacts-info">
          <h1 className="faq-info__title">Магазин Ivolga, ТЦ Авиапарк</h1>
          <ul className="faq-info__contacts">
            <li>
              <div className="faq-info__contact">
                <p>Москва, Большая Новодмитровская ул., 36</p>
                <p>Часы работы: с 10:00 до 21:00</p>
              </div>
            </li>
            <li>
              <div className="faq-info__contact">
                <p>Телефон</p>
                <p>+7 (997) 187-21-02</p>
              </div>
            </li>
          </ul>
          <img src="/assets/img/products/addres1.png" alt="address1" />
        </div>

        <div className="contacts-info">
          <h1 className="faq-info__title">
            Магазин Ivolga, Столешников переулок
          </h1>
          <ul className="faq-info__contacts">
            <li>
              <div className="faq-info__contact">
                <p>Москва, Большая Новодмитровская ул., 36</p>
                <p>Часы работы: с 10:00 до 21:00</p>
              </div>
            </li>
            <li>
              <div className="faq-info__contact">
                <p>Телефон</p>
                <p>+7 (997) 187-21-02</p>
              </div>
            </li>
          </ul>
          <img src="/assets/img/products/addres2.png" alt="address2" />
        </div>
      </div>
    </AnimatedPage>
  );

  return <ContactsLayout content={content} />;
};
