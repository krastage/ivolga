/**
 * Поле поиска
 */

const SearchInput = ({ placeholder }) => {
  return (
    <>
      <div className='search-container'>
        <input type='text' placeholder={placeholder} className='search-input' />
      </div>
    </>
  );
};

export default SearchInput;
