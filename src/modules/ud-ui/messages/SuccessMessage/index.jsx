/**
 * Сообщение об успешном сохранении
 */

import React from 'react';
import AnimatedPage from '../../../utils/AnimatedPage';

const SuccessMessage = () => {
  return (
      <div className='success-message'>
        <p>Изменения сохранены</p>
        <img src='/assets/img/icons/success.png' alt='' />
      </div>
  );
};

export default SuccessMessage;
