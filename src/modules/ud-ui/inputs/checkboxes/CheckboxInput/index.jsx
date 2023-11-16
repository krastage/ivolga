/**
 * Поле обязательного чекбокса
 */

import React from 'react';

const CheckboxInput = ({ name, text, register, errors }) => {
  return (
    <div className='input-container'>
      <input
        type='checkbox'
        id={name}
        name={name}
        {...register(name, {
          required: 'Необходимо проставить галочку и дать согласие',
        })}
      />
      <label htmlFor={name} className='checkbox-input-label'>
        <span>{text}</span>
      </label>
      {errors[name] && <p className='error-message'>{errors[name].message}</p>}
    </div>
  );
};

export default CheckboxInput;
