/**
 * Сообщение об успешном сохранении
 */

import React from 'react';
import AnimatedPage from '../../../utils/AnimatedPage';

const SuccessMessage = () => {
  return (
    <AnimatedPage>
      <div className='success-message'>
        <p>Изменения сохранены</p>
        <img src='/assets/img/icons/success.png' alt='' />
      </div>
    </AnimatedPage>
  );
};

export default SuccessMessage;
