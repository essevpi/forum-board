import { useContext, useEffect } from 'react';
import { UserDataContext } from '@/context/context';
import { useRouter } from 'next/router';
import LoginForm from '@/components/loginForm';
import TabWindow from '@/components/tabWindow';
import SignupForm from '@/components/signupForm';

import styles from '../styles/Home.styles';

const Home = () => {
  const { userData } = useContext(UserDataContext);
  const router = useRouter();

  useEffect(() => {
    if (userData.isLogged) router.push('/board');
  }, [userData.isLogged]);

  const items = [
    {
      label: 'Login',
      item: <LoginForm />,
    },
    {
      label: 'Signup',
      item: <SignupForm />,
    },
  ];

  return (
    <div className={styles.container}>
      <TabWindow items={items} />
    </div>
  );
};

export default Home;
