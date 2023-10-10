/**
 * Модальное окно авторизации
 */

import "./Auth.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const Auth = ({ authActive, setAuthActive }) => {
  useEffect(() => {
    if (authActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [authActive]);

  return (
    <div
      className={authActive ? "auth-modal active" : "auth-modal"}
      onClick={() => setAuthActive(false)}
    >
      <div className="auth-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="auth-modal-heading">
          <p>Вход</p>
          <button onClick={() => setAuthActive(false)}>
            <img
              src="/assets/img/icons/close.svg"
              alt="close"
              className="auth-modal-heading__button"
            />
          </button>
        </div>

        <div className="auth-modal-title">
          <h1 className="auth-modal-title__heading">
            Войдите в аккаунт или продолжите <br />
            как гость
          </h1>
          <p>
            Зарегистрируйтесь или войдите в свой аккаунт, чтобы <br />
            воспользоваться программой лояльности
          </p>
        </div>

        <div className="auth-modal-buttons">
          <Link
            to={"/profile"}
            className="auth-modal-buttons__auth"
            onClick={() => setAuthActive(false)}
          >
            Войти / Зарегистрироваться
          </Link>
          <button
            className="auth-modal-buttons__guest"
            onClick={() => setAuthActive(false)}
          >
            Продолжить как гость
          </button>
        </div>
      </div>
    </div>
  );
};
