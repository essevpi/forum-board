import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { Montserrat } from 'next/font/google';
import LoginForm from '@/components/loginForm';
import InputField from '@/components/inputField';
import { PostsContext, UserContext } from '@/context/context';
import { initialPosts } from '@/context/dummyData';

const font = Montserrat({ subsets: ['latin'] });

export default function Home() {
  const { userData, setUserData } = useContext(UserContext);
  const { posts, setPosts } = useContext(PostsContext);
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
    router.push('/board');
  };

  return (
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
  );
}
