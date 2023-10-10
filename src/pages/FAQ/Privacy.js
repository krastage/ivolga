import { FAQLayout } from '../../layouts/FAQ/FAQLayout';
import { AnimatedPage } from '../../components/AnimatedPage';

export const Privacy = () => {
  const menuTitle = 'Помощь покупателю';
  const contentTitle = 'Политика';
  const content = (
    <AnimatedPage>
      <p>
        Мы предлагаем быструю и надежную доставку по всей России. <br />Вот что вам нужно знать о нашей
        доставке: <br />
        Стоимость доставки: <br />
        Мы предлагаем бесплатную доставку для заказов свыше <br />[вставьте сумму]. Для заказов на меньшую сумму
        стоимость
        доставки будет рассчитываться автоматически при оформлении заказа. <br />
        Время доставки: <br />
        Мы стараемся доставлять заказы в течение [вставьте время] <br />дней после оформления заказа. Однако, время
        доставки
        может варьироваться в зависимости от вашего местоположения и наличия товара на складе. <br />
        Курьерская доставка: <br />
        Мы предлагаем курьерскую доставку по Москве и Санкт-Петербургу. Курьер свяжется с вами для уточнения удобного
        времени доставки. <br />
        Почтовая доставка: <br />
        Мы используем услуги Почты России для доставки по всей стране. Вы сможете отслеживать статус вашей посылки на
        сайте Почты России. <br />
        Самовывоз: <br />
        Вы можете забрать свой заказ самостоятельно в нашем магазине. Мы свяжемся с вами, чтобы уточнить время и место
        самовывоза. <br />
        Отслеживание заказа: <br />
        Вы можете отслеживать статус вашего заказа на нашем сайте. Мы также будем отправлять вам уведомления о статусе
        заказа на вашу электронную почту. <br />
        Возврат и обмен товара: <br />
        Если вы не полностью удовлетворены своим заказом, вы можете вернуть или обменять его в течение [вставьте
        время] дней <br />после получения заказа. Обратитесь к нашей политике возврата и обмена, чтобы узнать больше.
      </p>
    </AnimatedPage>
  );

  return (
    <FAQLayout menuTitle={menuTitle} contentTitle={contentTitle} content={content} />
  );
};

