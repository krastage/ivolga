/**
 * Необязательное поле ввода с различными значениями
 */

import React from 'react';

const MultiInputNotRequired = ({ title, name, placeholder }) => {
  return (
    <div className='input-container'>
      <label className='input-label' htmlFor={name}>
        {title}
      </label>
      <input className='input' placeholder={placeholder} id={name} />
    </div>
  );
};

export default MultiInputNotRequired;
