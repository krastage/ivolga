import React from "react";

export const LoginModal = ({ authActive, setAuthActive, toggleLogin }) => {
  return (
    <div
      className={authActive ? "modal-right active" : "modal-right"}
      onClick={() => setAuthActive(false)}
    >
      <div className="modal-right-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-right-heading">
          <p>Вход</p>
          <button onClick={() => setAuthActive(false)}>
            <img
              src="/assets/img/icons/close.svg"
              alt="close"
              className="modal-right-heading__button"
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
          <button className="auth-modal-buttons__auth" onClick={toggleLogin}>
            Войти / Зарегистрироваться
          </button>
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
