import { ProfileLayout } from "../../layouts/Profile/ProfileLayout";
import { AnimatedPage } from "../../components/AnimatedPage";
import { useState } from "react";
import { ProductsCardSmall } from "../../layouts/ProductsCard/ProductsCardSmall";

export const Orders = () => {
  const [showDetails, setShowDetails] = useState(true);
  const toggleContent = () => {
    setShowDetails(!showDetails);
  };

  const content = showDetails ? (
    <AnimatedPage>
      <div className="orders-container">
        <h1 className="orders-title">История заказов</h1>
        <ul className="orders-list">
          <li className="orders-item">
            <p>#00004</p>
            <p>5 000 ₽</p>
            <p>24.09.2022</p>
            <button className="orders-item__button" onClick={toggleContent}>
              Детали
            </button>
          </li>
          <li className="orders-item">
            <p>#00004</p>
            <p>5 000 ₽</p>
            <p>24.09.2022</p>
            <button className="orders-item__button" onClick={toggleContent}>
              Детали
            </button>
          </li>
          <li className="orders-item">
            <p>#00004</p>
            <p>5 000 ₽</p>
            <p>24.09.2022</p>
            <button className="orders-item__button" onClick={toggleContent}>
              Детали
            </button>
          </li>
        </ul>
      </div>
    </AnimatedPage>
  ) : (
    <AnimatedPage>
      <div className="orders-details-container">
        <button className="orders-details__back-button" onClick={toggleContent}>
          <img src="/assets/img/icons/arrow-left.svg" alt="" />
          <p>Назад</p>
        </button>

        <h1 className="orders-details-title">Заказ #00004</h1>

        <ul className="orders-details-items">
          <ProductsCardSmall
            link={"/catalog/product"}
            title={"Топ черный из кашемира"}
            price={25000}
            imageSource={"/assets/img/broadcast/product.png"}
          />
        </ul>

        <ul className="orders-details-list">
          <li className="orders-detail">
            <p>Стоимость доставки</p>
            <p>0 ₽</p>
          </li>
          <li className="orders-detail">
            <p>Итого</p>
            <p>10 000 ₽</p>
          </li>
          <li className="orders-detail">
            <p>Статус заказа</p>
            <p>Доставлен: 24.09.2022</p>
          </li>
          <li className="orders-detail">
            <p>Способ оплаты</p>
            <p>Онлайн</p>
          </li>
          <li className="orders-detail">
            <p>Способ доставки</p>
            <p>Самовывоз</p>
          </li>
          <li className="orders-detail">
            <p>Адрес</p>
            <p>Пункт самовывозы: Магазин Ivolga</p>
          </li>
        </ul>
      </div>
    </AnimatedPage>
  );

  return <ProfileLayout content={content} />;
};
