import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

import styles from './MainContainer.styles';

const MainContainer = ({ children }) => {
  const router = useRouter();

  return (
    <AnimatePresence mode='wait' initial={false}>
      <motion.main
        key={router.asPath}
        className={styles.container}
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 200, opacity: 0 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
};

export default MainContainer;
