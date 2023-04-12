import { useContext } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '@/context/context';
import Image from 'next/image';
import Toggle from '@/components/toggle';

import styles from './Navbar.styles';

const Navbar = () => {
  const { userData, setUserData } = useContext(UserContext);
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
        <div>
          <span className='text-2xl uppercase'>Board</span>
        </div>        
        <div className={styles.navbarControlsContainer}>
        <div className={styles.themeToggleContainer}>
            <Toggle />
          </div>
          <div className={styles.userDataContainer}>
            {userData.isLogged && (
              <UserInfo user={userData} handleLogOut={handleLogOut} />
            )}
          </div>          
        </div>
      </div>
    </div>
  );
};

const UserInfo = ({ user, handleLogOut }) => {
  const avatarSrc = `
    https://boring-avatars-api.vercel.app/api/avatar?variant=beam
  `;

  const avatarLoader = () => {
    return `https://boring-avatars-api.vercel.app/api/avatar?variant=beam`;
  };

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
          src={avatarSrc}
          loader={avatarLoader}
          alt='avatar'
          width={36}
          height={36}
        />
      </div>
    </div>
  );
};

export default Navbar;
