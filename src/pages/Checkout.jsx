/**
 * Страница оформления заказа
 */

import "../styles/pages/Checkout.scss";
import { AnimatedPage } from "../components/AnimatedPage";

export const Checkout = () => {
  return (
    <AnimatedPage>
      <>
        <main className="checkout-content"></main>

        <div className="config-container">
          <form action="" className="checkout-form">
            <div className="checkout-form__header">
              <h1>Адрес и доставка</h1>
              <img src="/assets/img/icons/content-radio-circle.svg" alt="" />
            </div>

            <div className="form-item">
              <p className="address-add-item__title">Город</p>
              <select name="city" id="city" className="select">
                <option value="moscow">Москва</option>
                <option value="piter">Санкт-Петербург</option>
                <option value="kazan">Казань</option>
              </select>
            </div>

            <div className="checkout-form__delivery">
              <div className="delivery-header">
                <div className="delivery-header__title">
                  <p>Курьер</p>
                  <p>Курьерская доставка</p>
                </div>
                <div className="delivery-header__price">
                  <p>500 ₽</p>
                </div>
                <div className="delivery-header">
                  <div className="delivery-header__title">
                    <p>Самовывоз</p>
                    <p>Дизайн-завод Флакон</p>
                  </div>
                  <div className="delivery-header__price">
                    <p>Бесплатно</p>
                  </div>
                </div>

                <div className="form-item">
                  <p className="address-add-item__title">Адрес</p>
                  <input
                    type="text"
                    placeholder="Улица Большая Никитская, 2, кв. 21"
                    className="input"
                  />
                </div>

                <div className="form-item">
                  <p className="address-add-item__title">
                    Комментарий для курьера
                  </p>
                  <textarea
                    placeholder="Позвоните за 2 часа, этаж 2, дофомон 54667457"
                    className="textarea"
                  />
                </div>

                <div className="form-subscribe">
                  <input type="checkbox" id="agreement" name="agreement" />
                  <label htmlFor="agreement">
                    <span>Сохранить адрес</span>
                  </label>
                </div>

                <div className="form-item">
                  <p className="address-add-item__title">Название адреса</p>
                  <input
                    type="text"
                    placeholder="Улица Большая Никитская, 2, кв. 21"
                    className="input"
                  />
                </div>

                <button className="address-add-save-button">Сохранить</button>

                <div></div>
              </div>
            </div>
          </form>
        </div>

        <div></div>
      </>
    </AnimatedPage>
  );
};
