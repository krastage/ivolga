/**
 * Модальное окно регистрации/авторизации
 */

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../../styles/components/Auth.scss';
import AuthorizedModal from '../AuthorizedModal';
import LoginModal from '../LoginModal';
import PhoneInputModal from '../PhoneInputModal';
import VerificationModal from '../VerificationModal';

const Auth = ({ authActive, setAuthActive }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoginComponentActive, setIsLoginComponentActive] = useState(true);
  const [isVerificationComponentActive, setIsVerificationComponentActive] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [sentPhoneNumber, setSentPhoneNumber] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [isResendButtonActive, setIsResendButtonActive] = useState(true);
  const [isCodeValid, setIsCodeValid] = useState(true);
  const [resendTimer, setResendTimer] = useState(30);

  let timerId;

  const location = useLocation();
  const navigation = useNavigate();

  useEffect(() => {
    if (authActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [authActive]);

  const toggleLogin = () => {
    setIsLoginComponentActive(!isLoginComponentActive);
    setIsVerificationComponentActive(false);
    setVerificationCode('');
  };

  const toggleVerification = () => {
    setIsVerificationComponentActive(!isVerificationComponentActive);
    setVerificationCode('');
  };

  const phoneNumberHandle = (e) => {
    const inputPhone = e.target.value;
    const formattedPhone = inputPhone.replace(/\D/g, '');

    if (formattedPhone.length === 11) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }

    setPhoneNumber(inputPhone);
  };

  const sendVerificationCode = () => {
    setIsVerificationComponentActive(true);
    setPhoneNumber('');
    setSentPhoneNumber(phoneNumber);
    setIsButtonActive(false);
    setIsResendButtonActive(false);
    startTimer();
  };

  const verificationCodeHandle = (e) => {
    const inputCode = e.target.value.replace(/[^0-9]/g, '');
    setVerificationCode(inputCode);

    if (inputCode) {
      setIsButtonActive(true);
      setIsCodeValid(true);
    }
  };

  const submitVerificationCode = () => {
    if (verificationCode === '1234') {
      setIsCodeValid(true);
      navigation('/profile');
      setAuthActive(false);
      setIsAuthorized(true);
      stopTimer();
    } else {
      setIsCodeValid(false);
    }
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
    } else {
      setIsAuthorized(false);
      setIsLoginComponentActive(true);
      setAuthActive(false);
    }
  };

  const startTimer = () => {
    let timer = resendTimer;
    const countdown = () => {
      if (timer === 0) {
        clearTimeout(timerId);
      } else {
        timer -= 1;
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
    <LoginModal authActive={authActive} setAuthActive={setAuthActive} toggleLogin={toggleLogin} />
  ) : !isVerificationComponentActive ? (
    //  Ввод номера телефона
    <PhoneInputModal
      authActive={authActive}
      setAuthActive={setAuthActive}
      phoneNumber={phoneNumber}
      phoneNumberHandle={phoneNumberHandle}
      isButtonActive={isButtonActive}
      sendVerificationCode={sendVerificationCode}
    />
  ) : (
    // Ввод кода из СМС
    <VerificationModal
      authActive={authActive}
      setAuthActive={setAuthActive}
      toggleVerification={toggleVerification}
      sentPhoneNumber={sentPhoneNumber}
      isCodeValid={isCodeValid}
      verificationCode={verificationCode}
      verificationCodeHandle={verificationCodeHandle}
      resendTimer={resendTimer}
      isButtonActive={isButtonActive}
      submitVerificationCode={submitVerificationCode}
      isResendButtonActive={isResendButtonActive}
      resendCodeHandle={resendCodeHandle}
    />
  );
};

export default Auth;
