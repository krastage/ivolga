/**
 * Страница подраздела профиля с информацией об адресах (адресная книга)
 */

import { ProfileLayout } from "../../layouts/ProfileLayout";
import { AnimatedPage } from "../../components/AnimatedPage";
import { useState } from "react";

export const Addresses = () => {
  const [addAddress, setAddAddress] = useState(true);
  const [data, setData] = useState({
    name: "",
    city: "Москва",
    address: "",
    comment: "",
  });

  const toggleContent = () => {
    setAddAddress(!addAddress);
  };
  const handleInputChange = (e, name) => {
    setData({ ...data, [name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const content = addAddress ? (
    <AnimatedPage>
      <div className="addresses-container">
        <h1 className="common-profile-title">Адресная книга</h1>
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
        <button className="back-button" onClick={toggleContent}>
          <img src="/assets/img/icons/arrow-left.svg" alt="" />
          <p>Назад</p>
        </button>

        <form className="form" onSubmit={handleFormSubmit}>
          <h1 className="common-profile-title">Новый адрес</h1>

          <div className="form-item">
            <p className="address-add-item__title">Название</p>
            <input
              type="text"
              placeholder="Офис на Остоженке"
              className="input"
              value={data.name}
              onChange={(e) => handleInputChange(e, "name")}
            />
          </div>

          <div className="form-item">
            <p className="address-add-item__title">Город</p>
            <select
              name="city"
              id="city"
              className="select"
              value={data.city}
              onChange={(e) => handleInputChange(e, "city")}
            >
              <option value="Москва">Москва</option>
              <option value="Санкт-Петербург">Санкт-Петербург</option>
              <option value="Казань">Казань</option>
            </select>
          </div>

          <div className="form-item">
            <p className="address-add-item__title">Адрес</p>
            <input
              type="text"
              placeholder="Улица Большая Никитская, 2, кв. 21"
              className="input"
              value={data.address}
              onChange={(e) => handleInputChange(e, "address")}
            />
          </div>

          <div className="form-item">
            <p className="address-add-item__title">Комментарий для курьера</p>
            <textarea
              placeholder="Позвоните за 2 часа, этаж 2, дофомон 54667457"
              className="textarea"
              value={data.comment}
              onChange={(e) => handleInputChange(e, "comment")}
            />
          </div>
          <button type="submit" className="address-add-save-button">
            Сохранить
          </button>
        </form>
      </div>
    </AnimatedPage>
  );

  return <ProfileLayout content={content} />;
};
