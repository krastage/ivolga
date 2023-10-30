/**
 * Стандартная кнопка
 */

import '../../../styles/_buttons.scss';

const PrimaryButton = ({ type, disabled, onClick, label }) => {
  return (
    <>
      <button className='primary-button' type={type} disabled={disabled} onClick={onClick}>
        {label}
      </button>
    </>
  );
};

export default PrimaryButton;
