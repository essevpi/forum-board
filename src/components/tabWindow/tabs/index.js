import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from './Tabs.styles';

const Tabs = ({ tabs, selectedTab, onSelect }) => {
  return (
    <nav className={`${styles.nav}`}>
      <ul className={`${styles.ul}`}>
        {tabs.map((item, i) => (
          <li
            key={i}
            className={`${
              item === selectedTab ? styles['selected'] : styles['li']
            }`}
            onClick={() => onSelect(item)}
          >
            {item.label}
            {item === selectedTab ? (
              <motion.div className={styles.underline} layoutId='underline' />
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Tabs;
