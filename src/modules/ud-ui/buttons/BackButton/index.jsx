/**
 * Кнопка назад
 */

const BackButton = ({ onClick }) => {
  return (
    <>
      <button className='back-button' onClick={onClick}>
        <img src='/assets/img/icons/arrow-left.svg' alt='' />
        <p>Назад</p>
      </button>
    </>
  );
};

export default BackButton;
