import { ProfileLayout } from "../../layouts/Profile/ProfileLayout";
import { AnimatedPage } from "../../components/AnimatedPage";
import { useState } from "react";

export const Addresses = () => {
  const [addAddress, setAddAddress] = useState(true);

  const toggleContent = () => {
    setAddAddress(!addAddress);
  };

  const content = addAddress ? (
    <AnimatedPage>
      <div className="addresses-container">
        <h1 className="addresses-title">Адресная книга</h1>
        <ul className="addresses-list">
          <li className="addresses-item">
            <p>Дом</p>
            <p>ул. Большая Дмитровка, 17, кв. 4</p>
            <button className="addresses-item__button">Изменить</button>
          </li>
          <li className="addresses-item">
            <p>Дом</p>
            <p>ул. Ордынка, 11, офис. 5</p>
            <button className="addresses-item__button">Изменить</button>
          </li>
        </ul>

        <button className="addresses__add-button" onClick={toggleContent}>
          Добавить новый адрес
        </button>
      </div>
    </AnimatedPage>
  ) : (
    <AnimatedPage>
      <div className="address-add-container">
        <button className="address-add__back-button" onClick={toggleContent}>
          <img src="/assets/img/icons/arrow-left.svg" alt="" />
          <p>Назад</p>
        </button>

        <ul className="address-add-details">
          <h1 className="address-add-title">Новый адрес</h1>

          <li className="address-add-item">
            <p className="address-add-item__title">Название</p>
            <input
              type="text"
              placeholder="Офис на Остоженке"
              className="address-add-item__input"
            />
          </li>

          <li className="address-add-item">
            <p className="address-add-item__title">Город</p>
            <select name="city" id="city" className="address-add-item__select">
              <option value="moscow">Москва</option>
              <option value="piter">Санкт-Петербург</option>
              <option value="kazan">Казань</option>
            </select>
          </li>

          <li className="address-add-item">
            <p className="address-add-item__title">Адрес</p>
            <input
              type="text"
              placeholder="Улица Большая Никитская, 2, кв. 21"
              className="address-add-item__input"
            />
          </li>

          <li className="address-add-item">
            <p className="address-add-item__title">Комментарий для курьера</p>
            <textarea
              placeholder="Позвоните за 2 часа, этаж 2, дофомон 54667457"
              className="address-add-item__textarea"
            />
          </li>
        </ul>

        <button className="address-add-save-button">Сохранить</button>

      </div>
    </AnimatedPage>
  );

  return <ProfileLayout content={content} />;
};
