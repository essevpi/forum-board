import { useTheme } from 'next-themes';
import { IoMoon, IoSunny } from 'react-icons/io5';

import styles from './Toggle.styles';

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
        readOnly
      />
      <IoSunny className={styles.sunIcon} />
      <IoMoon className={styles.moonIcon} />
      <div className={styles.toggle} />
    </label>
  );
};

export default Toggle;
