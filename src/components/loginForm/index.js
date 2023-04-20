import { useContext, useState } from 'react';
import { UsersContext, UserDataContext } from '@/context/context';
import { useRouter } from 'next/router';
import InputField from '../inputField';
import Button from '../button';
import Error from '../error';

import styles from './LoginForm.styles';

const formInitialState = {
  username: '',
  password: '',
};

const LoginForm = () => {
  const { users } = useContext(UsersContext);
  const { setUserData } = useContext(UserDataContext);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState(formInitialState);
  const router = useRouter();

  const onInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let user = users.find((u) => u.username === formData.username);

    if (user) {
      if (user.password === formData.password) {
        let loggedUser = { ...user, isLogged: true };
        setUserData(loggedUser);

        localStorage.setItem('userData', JSON.stringify(loggedUser));

        setFormData(formInitialState);
        setError(null);
        router.push('/board');
      } else {
        setError('Incorrect password.');
      }
    } else {
      setError('User not found.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.errorContainer}>
        <Error message={error} onTimeout={() => setError(null)} />
      </div>
      <InputField
        value={formData.username}
        name='username'
        placeholder='JohnDoe'
        onInputChange={onInputChange}
        required
      />
      <InputField
        value={formData.password}
        name='password'
        placeholder='Password'
        type='password'
        onInputChange={onInputChange}
        required
      />
      <div className={styles.buttonContainer}>
        <Button content='Login' variant='primary' />
      </div>
    </form>
  );
};

export default LoginForm;
