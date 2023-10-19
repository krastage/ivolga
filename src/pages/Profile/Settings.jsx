/**
 * Страница подраздела профиля с настройками (настройки)
 */

import { ProfileLayout } from "../../layouts/ProfileLayout";
import { AnimatedPage } from "../../components/AnimatedPage";
import React, { useEffect, useState } from "react";

export const Settings = () => {
  const [isNameValid, setIsNameValid] = useState(true);
  const [isSurnameValid, setIsSurnameValid] = useState(true);
  const [isDateOfBirthdayValid, setIsDateOfBirthdayValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isSaved, setIsSaved] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [data, setData] = useState({
    name: "",
    surname: "",
    dateOfBirth: "",
    email: "",
    agreement: false,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const nameRegex = /^[A-Za-zА-Яа-яЁё\s]+$/;
    const dateOfBirthMin = new Date("1900-01-01");
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    let isNameValid = nameRegex.test(data.name);
    let isSurnameValid = nameRegex.test(data.surname);
    let isDateOfBirthdayValid = new Date(data.dateOfBirth) >= dateOfBirthMin;
    let isEmailValid = emailRegex.test(data.email);

    setIsNameValid(isNameValid);
    setIsSurnameValid(isSurnameValid);
    setIsDateOfBirthdayValid(isDateOfBirthdayValid);
    setIsEmailValid(isEmailValid);

    if (
      isNameValid &&
      isSurnameValid &&
      isDateOfBirthdayValid &&
      isEmailValid
    ) {
    }

    if (
      isNameValid &&
      isSurnameValid &&
      isDateOfBirthdayValid &&
      isEmailValid
    ) {
      setIsSaved(true);
      setShowMessage(true);
    }
  };

  const handleInputChange = (e, name) => {
    if (name === "agreement") {
      setData({ ...data, agreement: e.target.checked });
    } else {
      setData({ ...data, [name]: e.target.value });

      if (name === "name") {
        setIsNameValid(true);
      }
      if (name === "surname") {
        setIsSurnameValid(true);
      }
      if (name === "dateOfBirth") {
        setIsDateOfBirthdayValid(true);
      }
      if (name === "email") {
        setIsEmailValid(true);
      }
    }
  };

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
        setIsSaved(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  const content = (
    <AnimatedPage>
      {showMessage && (
        <div
          className={`success-message ${isSaved ? "show" : ""}`}
          onClick={() => setShowMessage(false)}
        >
          <p>Изменения сохранены</p>
          <img src="/assets/img/icons/success.png" alt="" />
        </div>
      )}
      <div className="settings-container">
        <h1 className="common-profile-title">Настройки профиля</h1>
        <form className="form" onSubmit={handleFormSubmit} noValidate>
          <div className="form-item">
            <p className="settings-item__title">Имя</p>
            <input
              type="text"
              id="name"
              placeholder="Ольга"
              className={`input ${isNameValid ? "" : "input-error"}`}
              value={data.name}
              onChange={(e) => handleInputChange(e, "name")}
            />
            {!isNameValid && (
              <p className="error-message">Введите корректное имя</p>
            )}
          </div>
          <div className="form-item">
            <p className="settings-item__title">Фамилия</p>
            <input
              type="text"
              id="surname"
              placeholder="Малюга"
              className={`input ${isSurnameValid ? "" : "input-error"}`}
              value={data.surname}
              onChange={(e) => handleInputChange(e, "surname")}
            />
            {!isSurnameValid && (
              <p className="error-message">Введите корректную фамилию</p>
            )}
          </div>
          <div className="form-item">
            <p className="settings-item__title">Дата рождения</p>
            <input
              type="date"
              id="birthday"
              placeholder="25/08/1994"
              className={`input ${isDateOfBirthdayValid ? "" : "input-error"}`}
              value={data.dateOfBirth}
              onChange={(e) => handleInputChange(e, "dateOfBirth")}
              max={new Date().toISOString().split("T")[0]} // Ограничение до текущего года и дня
            />
            {!isDateOfBirthdayValid && (
              <p className="error-message">Введите корректную дату рождения</p>
            )}
          </div>
          <div className="form-item">
            <p className="settings-item__title">Эл. почта</p>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="olga@ivolga.com"
              className={`input ${isEmailValid ? "" : "input-error"}`}
              value={data.email}
              onChange={(e) => handleInputChange(e, "email")}
            />
            {!isEmailValid && (
              <p className="error-message">Введите корректный адрес почты</p>
            )}
          </div>
          <div className="form-item">
            <p className="settings-item__title">Телефон</p>
            <input
              type="text"
              id="phone"
              placeholder="+7 (977) 184-20-72"
              pattern="^\+7(\s+)?\(?(17|25|29|33|44)\)?(\s+)?[0-9]{3}-?[0-9]{2}-?[0-9]{2}$"
              className="input-phone"
              readOnly
            />
          </div>

          <div className="form-subscribe">
            <input
              type="checkbox"
              id="agreement"
              name="agreement"
              checked={data.agreement}
              onChange={(e) => handleInputChange(e, "agreement")}
            />
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
