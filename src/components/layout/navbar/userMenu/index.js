import { useContext, useState } from 'react';
import { UserDataContext } from '@/context/context';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { IoPerson, IoClose } from 'react-icons/io5';

import styles from './UserMenu.styles';

const UserMenu = ({}) => {
  const { userData, setUserData } = useContext(UserDataContext);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    setUserData({
      username: '',
      password: '',
      isLogged: false,
    });
    router.push('/');
  };

  return (
    <>
      <div className={styles.mobileContainer}>
        <IoPerson
          className={styles.openDrawerIcon}
          onClick={() => setIsVisible((prev) => !prev)}
        />
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '60%', opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            className={styles.mobileDrawer}
          >
            <IoClose
              className={styles.closeDrawerIcon}
              onClick={() => setIsVisible((prev) => !prev)}
            />
            <UserInfo user={userData} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className={styles.container}>
        <UserInfo user={userData} />
      </div>
    </>
  );
};

const UserInfo = ({ user, handleLogout }) => {
  return (
    <div className={styles.userInfoContainer}>
      <div className={styles.userDataContainer}>
        <span className={styles.username}>{user.username}</span>
        <div className={styles.logoutWrapper}>
          <span className={styles.logout} onClick={handleLogout}>
            Log Out
          </span>
        </div>
      </div>
      <div className={styles.userPicWrapper}>
        <Image
          src={user.picSrc}
          loader={({ src }) => src}
          alt='avatar'
          width={36}
          height={36}
        />
      </div>
    </div>
  );
};

export default UserMenu;
