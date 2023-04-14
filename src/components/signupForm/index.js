import { useState, useContext } from 'react';
import { UsersContext, UserDataContext } from '@/context/context';
import { defaultUser } from '@/context/dummyData';
import { useRouter } from 'next/router';
import Error from '../error';
import InputField from '../inputField';
import Button from '../button';

import styles from './SignupForm.styles';

const SignupForm = () => {
  const { users, setUsers } = useContext(UsersContext);
  const { userData, setUserData } = useContext(UserDataContext);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });
  const router = useRouter();

  const onInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (users.some((u) => u.email === formData.email)) {
      setError('This email is already associated to another account.');
    } else if (users.some((u) => u.username === formData.username)) {
      setError('User already exists.');
    } else if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long.');
    } else {
      let newUser = {
        ...defaultUser,
        email: formData.email,
        username: formData.username,
        password: formData.password,
        isLogged: true,
      };
      setFormData({
        email: '',
        username: '',
        password: '',
      });
      setUsers(users.concat(newUser));
      setUserData(newUser);
      router.push('/board');
    }    
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.errorContainer}>
        <Error message={error} onTimeout={() => setError(null)} />
      </div>
      <InputField
        value={formData.email}
        name='email'
        placeholder='example@mail.com'
        type='email'
        onInputChange={onInputChange}
        required
      />
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
        <Button content='Signup' variant='primary' />
      </div>
    </form>
  );
};

export default SignupForm;
