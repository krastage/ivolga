/**
 * Страница с информацией об уходе за одеждой
 */

import FAQLayout from '../../index';

const Care = () => {
  const menuTitle = 'Помощь покупателю';
  const contentTitle = 'Уход за одеждой';
  const children = (
    <p>
      Мы предлагаем быструю и надежную доставку по всей России. Вот что вам нужно знать о нашей
      доставке: Стоимость доставки: Мы предлагаем бесплатную доставку для заказов свыше [вставьте
      сумму]. Для заказов на меньшую сумму стоимость доставки будет рассчитываться автоматически при
      оформлении заказа. Время доставки: Мы стараемся доставлять заказы в течение [вставьте время]
      дней после оформления заказа. Однако, время доставки может варьироваться в зависимости от
      вашего местоположения и наличия товара на складе. Курьерская доставка: Мы предлагаем
      курьерскую доставку по Москве и Санкт-Петербургу. Курьер свяжется с вами для уточнения
      удобного времени доставки. Почтовая доставка: Мы используем услуги Почты России для доставки
      по всей стране. Вы сможете отслеживать статус вашей посылки на сайте Почты России. Самовывоз:
      Вы можете забрать свой заказ самостоятельно в нашем магазине. Мы свяжемся с вами, чтобы
      уточнить время и место самовывоза. Отслеживание заказа: Вы можете отслеживать статус вашего
      заказа на нашем сайте. Мы также будем отправлять вам уведомления о статусе заказа на вашу
      электронную почту. Возврат и обмен товара: Если вы не полностью удовлетворены своим заказом,
      вы можете вернуть или обменять его в течение [вставьте время] дней после получения заказа.
      Обратитесь к нашей политике возврата и обмена, чтобы узнать больше.
    </p>
  );

  return <FAQLayout menuTitle={menuTitle} contentTitle={contentTitle} children={children} />;
};

export default Care;
