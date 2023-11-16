/**
 * Стандартная кнопка
 */

import '../../../../styles/_buttons.scss';

const PrimaryButtonActive = ({ type, disabled, onClick, label }) => {
  return (
    <>
      <button className='primary-button-active' type={type} disabled={disabled} onClick={onClick}>
        {label}
      </button>
    </>
  );
};

export default PrimaryButtonActive;
