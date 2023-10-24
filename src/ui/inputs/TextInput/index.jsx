/**
 * Поле ввода с текстовым значением
 */

import React from 'react';

const TextInput = ({ title, name, placeholder, register, errors }) => {
  const validateInput = (value) => {
    if (/\d/.test(value)) {
      return 'Поле не должно содержать цифры';
    }
    if (!/^[a-zA-Zа-яА-Я]*$/.test(value)) {
      return 'Поле должно состоять из латинских или кириллических букв';
    }
    return true;
  };

  return (
    <div className='input-container'>
      <p className='settings-item__title'>{title}</p>
      <input
        className={`input ${errors[name] ? 'input-error' : ''}`}
        placeholder={placeholder}
        {...register(name, {
          required: 'Поле обязательно для заполнения',
          maxLength: {
            value: 20,
            message: 'Поле должно быть не длиннее 20 символов',
          },
          validate: validateInput,
        })}
      />
      {errors[name] && <p className='error-message'>{errors[name].message}</p>}
    </div>
  );
};

export default TextInput;
