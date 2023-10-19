/**
 * Модальное окно профиля зарегистрированного пользователя
 */

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthorizedModal = ({
  authActive,
  setAuthActive,
  logoutHandle,
}) => {
  const location = useLocation();
  const navigation = useNavigate();

  return (
    <div
      className={authActive ? "modal-right active" : "modal-right"}
      onClick={() => setAuthActive(false)}
    >
      <div className="modal-right-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-right-heading">
          <p>Профиль</p>
          <button onClick={() => setAuthActive(false)}>
            <img
              src="/assets/img/icons/close.svg"
              alt="close"
              className="modal-right-heading__button"
            />
          </button>
        </div>

        <div className="auth-modal-title">
          <h1 className="auth-modal-title__heading">Ольга Малюга</h1>
        </div>
        <div className="auth-modal-buttons">
          {location.pathname !== "/profile" ? (
            <button
              className="auth-modal-buttons__guest"
              onClick={() => {
                navigation("/profile");
                setAuthActive(false);
              }}
            >
              Перейти в профиль
            </button>
          ) : (
            ""
          )}
          <button className="auth-modal-buttons__auth" onClick={logoutHandle}>
            Выйти
          </button>
        </div>
      </div>
    </div>
  );
};
