/**
 * Поле ввода кода из СМС
 */

const CodeInput = ({
  title, name, errors, register,
}) => {
  const validateCode = (value) => {
    const code = value.replace(/[^0-9]/g, '');
    if (code === '1234') {
      return true;
    } else {
      return 'Некорректный код';
    }
  };

  return (

    <div className='input-container'>
      <label
        className='input-label'
        htmlFor={name}>
        {title}
      </label>
      <input
        className={`input ${errors[name] ? 'input-error' : ''}`}
        id={name}
        placeholder='----'
        maxLength='4'
        {...register(name, {
          required: 'Поле обязательно для заполнения', validate: validateCode,
        })}
      />
      {errors[name] && <p className='error-message'>{errors[name].message}</p>}
    </div>);
};

export default CodeInput;
