/**
 * Страница контактов
 */

import AnimatedPage from '../../../../utils/AnimatedPage';
import ContactsLayout from '../../index';

const Contacts = () => {
  const content = (
    <AnimatedPage>
      <div className='contacts-info-container'>
        <div className='contacts-info'>
          <h1 className='faq-info__title'>Контакты</h1>
          <ul className='faq-info__contacts'>
            <li>
              <div className='faq-info__contact'>
                <p>Пресса и связи с общественностью</p>
                <p>pr@ivolga.com</p>
              </div>
            </li>
            <li>
              <div className='faq-info__contact'>
                <p>Байерам и партнерам</p>
                <p>sale@ivolga.com</p>
              </div>
            </li>
            <li>
              <div className='faq-info__contact'>
                <p>Помощь покупателям и вопросы по интернет-магазину</p>
                <p>store@ivolga.com</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </AnimatedPage>
  );

  return <ContactsLayout content={content} />;
};

export default Contacts;
