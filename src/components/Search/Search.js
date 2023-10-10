/**
 * Модальное окно поиска
 */

import "./Search.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const Search = ({ searchActive, setSearchActive }) => {
  useEffect(() => {
    if (searchActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [searchActive]);

  return (
    <div
      className={searchActive ? "search-modal active" : "search-modal"}
      onClick={() => setSearchActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="search-modal-heading">
          <p>Поиск</p>
          <button onClick={() => setSearchActive(false)}>
            <img
              src="/assets/img/icons/close.svg"
              alt="close"
              className="search-modal-heading__button"
            />
          </button>
        </div>

        <div className="search-modal-input-container">
          <input
            type="text"
            placeholder="Поиск по каталогу"
            className="search-modal-input"
          />
          <button className="search-modal-input__button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="21"
              viewBox="0 0 28 21"
              fill="none"
            >
              <g clipPath="url(#clip0_1128_3180)">
                <line x1="1" y1="9.69238" x2="26" y2="9.69238" stroke="black" />
                <path
                  d="M17.5435 18.1938L26.0293 9.70801L17.5435 1.22223"
                  stroke="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1128_3180">
                  <rect
                    width="28"
                    height="20"
                    fill="white"
                    transform="matrix(-1 0 0 -1 28 20.1924)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>

        <div className="search-modal-recommendations">
          <p className="search-modal-recommendations__title">Рекомендации</p>
          <ul className="search-modal-recommendations__list">
            <li>
              <Link
                to="/catalog"
                className="search-modal-recommendations__item"
                onClick={() => setSearchActive(false)}
              >
                Fable of Dirty
              </Link>
            </li>
            <li>
              <Link
                to="/catalog"
                className="search-modal-recommendations__item"
                onClick={() => setSearchActive(false)}
              >
                Футболки
              </Link>
            </li>
            <li>
              <Link
                to="/catalog"
                className="search-modal-recommendations__item"
                onClick={() => setSearchActive(false)}
              >
                Пуховики
              </Link>
            </li>
            <li>
              <Link
                to="/catalog"
                className="search-modal-recommendations__item"
                onClick={() => setSearchActive(false)}
              >
                Sale
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
