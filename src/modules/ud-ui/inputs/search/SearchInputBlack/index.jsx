/**
 * Поле поиска черное
 */

const SearchInputBlack = ({ placeholder }) => {
  return (
    <>
      <div className='search-container'>
        <input type='text' placeholder={placeholder} className='search-input-black' />
      </div>
    </>
  );
};

export default SearchInputBlack;
