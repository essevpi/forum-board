import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tabs from './tabs';

import styles from './TabWindow.styles';

const TabWindow = ({ items }) => {
  const [selectedTab, setSelectedTab] = useState(items[0]);

  return (
    <div className={styles.tabWindowContainer}>
      <Tabs tabs={items} selectedTab={selectedTab} onSelect={setSelectedTab} />
      <AnimatePresence mode='wait'>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{
            duration: 0.2,
          }}
          className={styles.tabWindowItem}
          key={selectedTab.label}
        >
          {selectedTab.item}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TabWindow;
