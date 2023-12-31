/**
 * Поле ввода с различными значениями
 */

import React from 'react';

const MultiInput = ({ title, name, placeholder, register, errors }) => {
  return (
    <div className='input-container'>
      <label className='input-label' htmlFor={name}>
        {title}
      </label>
      <input
        className={`input ${errors[name] ? 'input-error' : ''}`}
        placeholder={placeholder}
        id={name}
        {...register(name, {
          required: 'Поле обязательно для заполнения',
          maxLength: {
            value: 20,
            message: 'Поле должно быть не длиннее 20 символов',
          },
        })}
      />
      {errors[name] && <p className='error-message'>{errors[name].message}</p>}
    </div>
  );
};

export default MultiInput;
