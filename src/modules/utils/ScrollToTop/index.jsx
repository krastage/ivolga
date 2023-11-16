/**
 * Прокрутка страницы вверх при смене компонентов
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
      easing: 'ease-in-out',
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
