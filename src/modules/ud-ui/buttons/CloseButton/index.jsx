/**
 * Кнопка закрытия
 */

const CloseButton = ({ onClick }) => {
  return (
    <>
      <button className='close-button' onClick={onClick}>
        <img src='/assets/img/icons/close.svg' alt='close' />
      </button>
    </>
  );
};

export default CloseButton;
