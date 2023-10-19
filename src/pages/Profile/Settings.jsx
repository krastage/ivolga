/**
 * Страница подраздела профиля с настройками (настройки)
 */

import { ProfileLayout } from "../../layouts/ProfileLayout";
import { AnimatedPage } from "../../components/AnimatedPage";

export const Settings = () => {
  const content = (
    <AnimatedPage>
      <div className="settings-container">
        <h1 className="common-profile-title">Настройки профиля</h1>
        <form className="form">
          <div className="form-item">
            <p className="settings-item__title">Имя</p>
            <input
              type="text"
              id="name"
              placeholder="Ольга"
              className="input"
            />
          </div>
          <div className="form-item">
            <p className="settings-item__title">Фамилия</p>
            <input
              type="text"
              id="surname"
              placeholder="Малюга"
              className="input"
            />
          </div>
          <div className="form-item">
            <p className="settings-item__title">Дата рождения</p>
            <input
              type="date"
              id="birthday"
              pattern="\d{1,2}/\d{1,2}/\d{4}"
              placeholder="25/08/1994"
              className="input"
            />
          </div>
          <div className="form-item">
            <p className="settings-item__title">Эл. почта</p>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="olga@ivolga.com"
              className="input"
            />
          </div>
          <div className="form-item">
            <p className="settings-item__title">Телефон</p>
            <input
              type="phone"
              id="phone"
              placeholder="+7 (977) 184-20-72"
              pattern="^\+7(\s+)?\(?(17|25|29|33|44)\)?(\s+)?[0-9]{3}-?[0-9]{2}-?[0-9]{2}$"
              className="input-phone"
              readOnly
            />
          </div>

          <div className="form-subscribe">
            <input type="checkbox" id="agreement" name="agreement" />
            <label htmlFor="agreement">
              <span>Я даю согласие на обработку персональных данных</span>
            </label>
            <button className="settings-subscribe__button">Сохранить</button>
          </div>
        </form>
      </div>
    </AnimatedPage>
  );

  return <ProfileLayout content={content} />;
};
