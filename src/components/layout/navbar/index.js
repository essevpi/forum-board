import { useContext } from 'react';
import { useRouter } from 'next/router';
import { UserDataContext } from '@/context/context';
import Link from 'next/link';
import Toggle from '../../toggle';
import UserMenu from './userMenu';
import { IoChatboxEllipses } from 'react-icons/io5';

import styles from './Navbar.styles';

const Navbar = () => {
  const { userData } = useContext(UserDataContext);
  const router = useRouter();

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarWrapper}>
        <Link href='/' className={styles.navbarLogo}>
          <IoChatboxEllipses className={styles.navbarLogoIcon} />
          <span className={styles.navbarLogoText}>Board</span>
        </Link>
        <div className={styles.navbarControlsContainer}>
          <div className={styles.themeToggleContainer}>
            <Toggle />
          </div>
          <div className={styles.userMenuContainer}>
            {userData.isLogged && router.pathname !== '/' && (
              <UserMenu user={userData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
