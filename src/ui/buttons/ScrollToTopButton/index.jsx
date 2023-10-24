/**
 * Кнопка скроллинга вверх
 */

import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [mouseActive, setMouseActive] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setShowButton(true);
      resetTimer();
    } else {
      setShowButton(false);
    }
  };

  const handleMouseActivity = () => {
    setMouseActive(true);
    resetTimer();
  };

  let timer;

  const resetTimer = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (!mouseActive) {
        setShowButton(false);
      }
    }, 3000);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseActivity);

    resetTimer();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseActivity);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0, behavior: 'smooth',
    });
  };

  return (<div>
    {showButton &&
      (<button className={`scroll-button ${showButton ? 'active' : ''}`}
               onClick={scrollToTop}>
        <svg xmlns='http://www.w3.org/2000/svg'
             height='1em'
             viewBox='0 0 512 512'>
          <path d='M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z' />
        </svg>
      </button>)}
  </div>);
};

export default ScrollToTopButton;
