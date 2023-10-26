/**
 * Поле необязательного чекбокса
 */

import React from 'react';

const CheckboxInputNotRequired = ({ name, text }) => {
  return (
    <div className='input-container'>
      <input type='checkbox' id={name} name={name} />
      <label htmlFor={name} className='checkbox-input-label'>
        <span>{text}</span>
      </label>
    </div>
  );
};

export default CheckboxInputNotRequired;
