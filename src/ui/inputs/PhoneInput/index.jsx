/**
 * Поле ввода номера телефона
 */
import React from 'react';
import InputMask from 'react-input-mask';

const PhoneInput = ({ title, name, errors, register }) => {
  const validatePhone = (value) => {
    const numericValue = value.replace(/\D/g, '');
    if (numericValue.length !== 11) {
      return 'Некорректный номер телефона';
    }
    return true;
  };

  return (
    <div className='input-container'>
      <label className='input-label' htmlFor={name}>
        {title}
      </label>
      <InputMask
        className={`input ${errors[name] ? 'input-error' : ''}`}
        id={name}
        mask='+7 (999) 999-99-99'
        type='text'
        placeholder='+7 (___) ___-__-__'
        {...register(name, {
          required: 'Номер телефона обязателен для заполнения',
          validate: validatePhone,
        })}
      />
      {errors[name] && <p className='error-message'>{errors[name].message}</p>}
    </div>
  );
};

export default PhoneInput;
