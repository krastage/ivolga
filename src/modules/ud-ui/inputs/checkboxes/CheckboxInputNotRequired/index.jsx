/**
 * Поле необязательного чекбокса
 */

import React from 'react';

const CheckboxInputNotRequired = ({ name, text, onChange }) => {
  return (
    <div className='input-container'>
      <input type='checkbox' id={name} name={name} onChange={onChange} />
      <label htmlFor={name} className='checkbox-input-label'>
        <span>{text}</span>
      </label>
    </div>
  );
};

export default CheckboxInputNotRequired;
