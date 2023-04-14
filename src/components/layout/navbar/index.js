import { useContext } from 'react';
import { useRouter } from 'next/router';
import { UserDataContext } from '@/context/context';
import Link from 'next/link';
import Image from 'next/image';
import Toggle from '../../toggle';
import { IoChatboxEllipses } from 'react-icons/io5';

import styles from './Navbar.styles';

const Navbar = () => {
  const { userData, setUserData } = useContext(UserDataContext);
  const router = useRouter();

  const handleLogOut = () => {
    setUserData({
      username: '',
      password: '',
      isLogged: false,
    });
    router.push('/');
  };

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
          <div className={styles.userDataContainer}>
            {userData.isLogged && router.pathname !== '/' && (
              <UserInfo user={userData} handleLogOut={handleLogOut} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const UserInfo = ({ user, handleLogOut }) => {
  /* const avatarSrc = `
    https://boring-avatars-api.vercel.app/api/avatar?variant=beam
  `;

  const avatarLoader = () => {
    return `https://boring-avatars-api.vercel.app/api/avatar?variant=beam`;
  }; */

  return (
    <div className='flex items-center gap-3 w-full'>
      <div className='flex flex-col flex-1'>
        <span className='text-lg md:text-xl leading-none'>{user.username}</span>
        <div className='text-end'>
          <span
            className='text-xs font-medium text-[--light-text-color-tertiary] cursor-pointer hover:text-[--light-text-hover-color] dark:text-[--dark-text-color-secondary] dark:hover:text-[--dark-text-hover-color]'
            onClick={handleLogOut}
          >
            Log Out
          </span>
        </div>
      </div>
      <div className='relative ring-2 ring-[--light-accent] dark:ring-[--dark-accent] rounded-full'>
        <Image
          src={user.picSrc}
          loader={({src}) => src}
          alt='avatar'
          width={36}
          height={36}
        />
      </div>
    </div>
  );
};

export default Navbar;
