/**
 * Шаблон списка релевантных образов
 */

import '../../../../../styles/RelevantLooks.scss';

const RelevantLooks = ({ imageSource }) => {
  return (
    <div className='relevant-looks-container container'>
      <h2>Релевантные образы</h2>
      <ul className='relevant-looks-images'>
        {imageSource.map((imageSource, index) => (
          <li>
            <img src={imageSource} alt='look' key={index} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelevantLooks;
