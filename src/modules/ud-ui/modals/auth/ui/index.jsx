/**
 * Модальное окно регистрации/авторизации
 */

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../../../../styles/components/Auth.scss';
import AuthorizedModal from './components/authorized';
import LoginModal from './components/login';
import PhoneInputModal from './components/phone';
import VerificationModal from './components/verification';

const Auth = ({ authActive, setAuthActive }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoginComponentActive, setIsLoginComponentActive] = useState(true);
  const [isVerificationComponentActive, setIsVerificationComponentActive] = useState(
    false);
  const [isResendButtonActive, setIsResendButtonActive] = useState(true);
  const [resendTimer, setResendTimer] = useState(30);

  let timerId;

  const location = useLocation();
  const navigation = useNavigate();

  useEffect(() => {
    document.body.style.overflow = authActive ? 'hidden' : '';
  }, [authActive]);

  const toggleLogin = () => {
    setIsLoginComponentActive(!isLoginComponentActive);
    setIsVerificationComponentActive(false);
  };

  const toggleVerification = () => {
    setIsVerificationComponentActive(!isVerificationComponentActive);
  };

  const resendCodeHandle = () => {
    setIsResendButtonActive(!isResendButtonActive);
    startTimer();
  };

  const logoutHandle = () => {
    if (location.pathname.startsWith('/profile')) {
      navigation('/');
      setIsAuthorized(false);
      setIsLoginComponentActive(true);
      setAuthActive(false);
      return;
    }
    setIsAuthorized(false);
    setIsLoginComponentActive(true);
    setAuthActive(false);
  };

  const startTimer = () => {
    let timer = resendTimer;
    const countdown = () => {
      if (timer === 0) {
        clearTimeout(timerId);
      } else {
        timer--;
        setResendTimer(timer);
      }
    };
    timerId = setInterval(countdown, 1000);
  };

  const stopTimer = () => {
    clearTimeout(timerId);
  };

  return isAuthorized ? (
    <AuthorizedModal
      authActive={authActive}
      setAuthActive={setAuthActive}
      logoutHandle={logoutHandle}
    />
  ) : isLoginComponentActive ? (
    //Окно входа
    <LoginModal
      authActive={authActive}
      setAuthActive={setAuthActive}
      toggleLogin={toggleLogin}
    />
  ) : isVerificationComponentActive ? (
    // Ввод кода из СМС
    <VerificationModal
      authActive={authActive}
      setAuthActive={setAuthActive}
      toggleVerification={toggleVerification}
      resendTimer={resendTimer}
      isResendButtonActive={isResendButtonActive}
      resendCodeHandle={resendCodeHandle}
      setIsAuthorized={setIsAuthorized}
    />
  ) : (
    //  Ввод номера телефона
    <PhoneInputModal
      authActive={authActive}
      setAuthActive={setAuthActive}
      setIsVerificationComponentActive={setIsVerificationComponentActive}
    />
  );
};

export default Auth;
