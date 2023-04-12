import { useState, useContext } from 'react';
import { ThemeContext } from '@/context/context';
import { useTheme } from 'next-themes';
import { IoMoon, IoSunny } from 'react-icons/io5';

import styles from './Toggle.styles';

const sunIconClass = '';
const moonIconClass = '';

const Toggle = ({}) => {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <label className={styles.label}>      
      <input
        type='checkbox'
        value={theme}
        onClick={handleToggle}
        className={styles.input}
        checked={theme === 'dark' ? true : false}
      />
      <IoSunny className={styles.sunIcon} />
      <IoMoon className={styles.moonIcon} />
      <div className={styles.toggle}/ >      
    </label>
  );
};

export default Toggle;
