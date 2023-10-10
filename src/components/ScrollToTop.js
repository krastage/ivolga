/**
 * Прокрутка страницы вверх при смене компонентов
 */

import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
};
