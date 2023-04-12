import { useContext } from 'react';
import { UserContext } from '@/context/context';
import { useRouter } from 'next/router';
import LoginForm from '@/components/loginForm';
import InputField from '@/components/inputField';

import styles from './Home.styles';
import { useTheme } from 'next-themes';

const Home = () => {
  const { userData, setUserData } = useContext(UserContext);
  const { theme } = useTheme();
  const router = useRouter();

  const onInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({
      ...userData,
      isLogged: true,
    });
    router.push('/board');
  };

  return (
    <div className={styles.container}>
      <LoginForm onSubmit={handleSubmit}>
        <InputField
          value={userData.username}
          name='username'
          onInputChange={onInputChange}
          required
        />
        <InputField
          value={userData.password}
          name='password'
          type='password'
          onInputChange={onInputChange}
          required
        />
      </LoginForm>
    </div>
  );
};

export default Home;
