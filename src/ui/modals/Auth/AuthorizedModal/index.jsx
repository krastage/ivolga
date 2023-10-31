/**
 * Модальное окно профиля зарегистрированного пользователя
 */

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CloseButton from '../../../buttons/CloseButton';
import PrimaryButton from '../../../buttons/PrimaryButton';
import PrimaryButtonActive from '../../../buttons/PrimaryButtonActive';

const AuthorizedModal = ({ authActive, setAuthActive, logoutHandle }) => {
  const location = useLocation();
  const navigation = useNavigate();

  return (
    <div
      className={authActive ? 'modal-right active' : 'modal-right'}
      onClick={() => setAuthActive(false)}>
      <div className='modal-right-content' onClick={(e) => e.stopPropagation()}>
        <div className='modal-right-heading'>
          <p>Профиль</p>
          <CloseButton onClick={() => setAuthActive(false)} />
        </div>

        <div className='auth-modal-title'>
          <h1 className='auth-modal-title__heading'>Ольга Малюга</h1>
        </div>
        <div className='auth-modal-buttons'>
          {location.pathname === '/profile' ? (
            ''
          ) : (
            <PrimaryButton
              label={'Перейти в профиль'}
              onClick={() => {
                navigation('/profile');
                setAuthActive(false);
              }}
            />
          )}
          <PrimaryButtonActive label={'Выйти'} onClick={logoutHandle} />
        </div>
      </div>
    </div>
  );
};

export default AuthorizedModal;
