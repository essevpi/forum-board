import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import styles from './Error.styles';

const Error = ({ message, onTimeout }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true);

      const timer = setTimeout(() => {
        setIsVisible(false);
        onTimeout();
      }, 3000);
      
      return () => {
        clearTimeout(timer);
      };
    }

  }, [message]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles.errorContainer}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Error;
