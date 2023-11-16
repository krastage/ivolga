/**
 * Кнопка поиска
 */

const SearchButton = ({ onClick, color }) => {
  return (
    <>
      <button className={`search-button${color === 'white' ? '-address' : ''}`} onClick={onClick}>
        {color === 'black' ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='28'
            height='21'
            viewBox='0 0 28 21'
            fill='none'>
            <g clipPath='url(#clip0_1128_3180)'>
              <line x1='1' y1='9.69238' x2='26' y2='9.69238' stroke='black' />
              <path d='M17.5435 18.1938L26.0293 9.70801L17.5435 1.22223' stroke='black' />
            </g>
            <defs>
              <clipPath id='clip0_1128_3180'>
                <rect
                  width='28'
                  height='20'
                  fill='white'
                  transform='matrix(-1 0 0 -1 28 20.1924)'
                />
              </clipPath>
            </defs>
          </svg>
        ) : color === 'white' ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='28'
            height='21'
            viewBox='0 0 28 21'
            fill='none'>
            <line x1='1' y1='10.1924' x2='26' y2='10.1924' stroke='white' />
            <path d='M17.5435 18.6938L26.0293 10.208L17.5435 1.72223' stroke='white' />
          </svg>
        ) : (
          ''
        )}
      </button>
    </>
  );
};

export default SearchButton;
