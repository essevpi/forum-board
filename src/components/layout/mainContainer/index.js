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
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 20, opacity: 0 }}
        transition={{
          duration: 0.2,
        }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
};

export default MainContainer;
