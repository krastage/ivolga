/**
 * Поле радио кнопки
 */

import React from 'react';

const RadioInput = ({ name, text }) => {
  return (
    <div className='input-container'>
      <input type='radio'
             id={name}
             name='radio-name'
             value={name} />
      <label htmlFor={name}
             className='radio-input-label'>
        <span>{text}</span>
      </label>
    </div>
  );
};

export default RadioInput;
