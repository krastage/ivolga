/**
 * Поле ввода почтового адреса
 */

import React from 'react';

const EmailInput = ({ title, name, placeholder, register, errors }) => {
  return (
    <div className='input-container'>
      <p className='settings-item__title'>{title}</p>
      <input
        className={`input ${errors[name] ? 'input-error' : ''}`}
        placeholder={placeholder}
        {...register(name, {
          required: 'Почта обязательна для заполнения',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'Введите корректный Email',
          },
        })}
      />
      {errors[name] && <p className='error-message'>{errors[name].message}</p>}
    </div>
  );
};

export default EmailInput;
