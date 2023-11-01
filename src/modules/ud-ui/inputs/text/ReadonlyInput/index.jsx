/**
 * Неактивное поле
 */

import React from 'react';

const ReadonlyInput = ({ title, placeholder }) => {
  return (
    <div className='input-container'>
      <label className='input-label'>{title}</label>
      <input className='input-readonly' placeholder={placeholder} readOnly />
    </div>
  );
};

export default ReadonlyInput;
