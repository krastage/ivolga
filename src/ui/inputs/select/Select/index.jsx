/**
 * Поле select
 */

import React from 'react';

const Select = ({ title, name, options, register, errors }) => {
  return (
    <div className='input-container'>
      <label className='input-label' htmlFor={name}>
        {title}
      </label>
      <select
        name={name}
        id={name}
        className={`select-input ${errors[name] ? 'select-input-error' : ''}`}
        {...register(name, {
          required: 'Поле обязательно для заполнения',
        })}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {errors[name] && <p className='error-message'>{errors[name].message}</p>}
    </div>
  );
};

export default Select;
