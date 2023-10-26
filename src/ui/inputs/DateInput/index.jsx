/**
 * Поле ввода даты
 */

import React from 'react';

const DateInput = ({ title, name, register, errors }) => {
  return (
    <div className='input-container'>
      <label className='input-label'
             htmlFor={name}>{title}</label>
      <input
        className={`input ${errors[name] ? 'input-error' : ''}`}
        type='date'
        id={name}
        {...register(name, {
          required: 'Дата обязательна для заполнения',
        })}
      />
      {errors[name] && <p className='error-message'>{errors[name].message}</p>}
    </div>
  );
};

export default DateInput;
