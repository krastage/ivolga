import React from 'react';

const ReadonlyInput = ({ title, placeholder }) => {
  return (
    <div className='input-container'>
      <p className='settings-item__title'>{title}</p>
      <input className='input-readonly' placeholder={placeholder} readOnly />
    </div>
  );
};

export default ReadonlyInput;
