/**
 * Поле ввода даты
 */

import React from 'react';

const DateInput = ({ title, name, register, errors }) => {
  return (
    <div className='input-container'>
      <p className='settings-item__title'>{title}</p>
      <input
        className={`input ${errors[name] ? 'input-error' : ''}`}
        type='date'
        {...register(name, {
          required: 'Дата обязательна для заполнения',
        })}
      />
      {errors[name] && <p className='error-message'>{errors[name].message}</p>}
    </div>
  );
};

export default DateInput;
