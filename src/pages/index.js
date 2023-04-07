import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { Montserrat } from 'next/font/google';
import LoginForm from '@/components/loginForm';
import InputField from '@/components/inputField';
import { UserContext } from '@/context/context';

const font = Montserrat({ subsets: ['latin'] });

export default function Home() {
  const { userData, setUserData } = useContext(UserContext);
  const router = useRouter();

  const initialFormData = {
    username: '',
    password: '',
  };

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
    router.push('/dashboard');
  };

  return (
    <main className={`${font.className} flex h-[calc(100vh-var(--nav-height))] justify-center items-center`}>
      <div className='container flex flex-col items-center'>
        <LoginForm onSubmit={handleSubmit}>
          <InputField
            value={userData.username}
            name='username'
            onInputChange={onInputChange}
          />
          <InputField
            value={userData.password}
            name='password'
            onInputChange={onInputChange}
          />
        </LoginForm>
      </div>
    </main>
  );
}
