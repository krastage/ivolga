/**
 * Шаблон списка релевантных образов
 */

import "../styles/layouts/RelevantLooks.scss";

export const RelevantLooks = ({ imageSource }) => {
  return (
    <div className="relevant-looks-container container">
      <h2>Релевантные образы</h2>
      <ul className="relevant-looks-images">
        {imageSource.map((imageSource, index) => (
          <li>
            <img src={imageSource} alt="look" key={index} />
          </li>
        ))}
      </ul>
    </div>
  );
};
