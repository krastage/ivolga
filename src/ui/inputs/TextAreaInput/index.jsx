/**
 * Поле ввода textarea
 */
import React from 'react';

const TextAreaInput = ({ title, name, placeholder, register, errors }) => {
  return (
    <div className='input-container'>
      <p className='address-add-item__title'>{title}</p>
      <textarea
        className={`textarea-input ${errors[name]
          ? 'textarea-input-error'
          : ''}`}
        placeholder={placeholder}
        {...register(name, {
          maxLength: {
            value: 250,
            message: 'Поле должно быть не длиннее 250 символов',
          },
        })}
      />
      {errors[name] && <p className='error-message'>{errors[name].message}</p>}
    </div>
  );
};

export default TextAreaInput;
