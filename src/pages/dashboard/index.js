import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { PostsContext, UserContext } from '@/context/context';
import Image from 'next/image';

const Dashboard = () => {
  const { userData, setUserData } = useContext(UserContext);
  const { posts } = useContext(PostsContext);
  const router = useRouter();

  useEffect(() => {
    if (userData.isLogged == false)
      router.push('/');  
  }, []);
  
  return (
    <div className='flex h-[calc(100vh-var(--nav-height))] justify-center items-center'>
      <div className='container w-11/12 h-4/5 sm:w-3/4 lg:w-1/2 flex flex-col items-center gap-4 p-4 bg-neutral-800 border border-neutral-700 rounded-md'>
        <div>
          <span className='text-xl font-bold'>Posts</span>
        </div>
        <div className='w-full flex flex-1 justify-center items-center rounded-md bg-neutral-700'>
          {posts.map((post, i) => (
            <div key={i}>
              {post.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
