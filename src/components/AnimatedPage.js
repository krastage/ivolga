/**
 * Анимации переходов между компонентами
 */

import { motion } from 'framer-motion';

const animations = {
  initial: { opacity: 0, x: 0, y: -30 },
  animate: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0 },
};

export const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.7 }}>
      {children}
    </motion.div>
  );
};
