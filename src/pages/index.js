import { useContext, useEffect, useState } from 'react';
import { UserDataContext, UsersContext } from '@/context/context';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import LoginForm from '@/components/loginForm';
import Tabs from '@/components/tabWindow/tabs';

import styles from '../styles/Home.styles';
import TabWindow from '@/components/tabWindow';
import SignupForm from '@/components/signupForm';

const Home = () => {
  const { userData, setUserData } = useContext(UserDataContext); 
  const router = useRouter();

  useEffect(() => {
    if (userData.isLogged) router.push('/board');
  }, []); 

  /*  const handleLogOut = () => {
    setUserData({
      username: '',
      password: '',
      imgSrc: '',
      isLogged: false,
    });
  }; */

  const items = [
    {
      label: 'Login',
      item: <LoginForm />
    },
    {
      label: 'Signup',
      item: <SignupForm />
    },
  ]

  return (
    <div className={styles.container}>
      <TabWindow items={items} />
    </div>
  );
};

export default Home;
