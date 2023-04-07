import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { PostsContext, UserContext } from '@/context/context';
import Image from 'next/image';
import PostList from '@/components/postList';
import Button from '@/components/button';
import Modal from '@/components/modal';

const Dashboard = () => {
  const { userData, setUserData } = useContext(UserContext);
  const { posts } = useContext(PostsContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (userData.isLogged == false)
      router.push('/');  
  }, []);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);    
  }
  
  return (
    <div className='flex h-[calc(100vh-var(--nav-height))] justify-center items-center'>
      <div className='container w-[95%] sm:w-3/4 lg:w-1/2 h-[95%] flex flex-col items-center gap-4 p-4 bg-neutral-800 border border-neutral-700 rounded-md'>
        <div className='flex w-full justify-between items-end border-b border-neutral-700 pb-4'>
          <span className='flex-1 text-lg md:text-2xl font-bold leading-none'>Posts</span>
          <div className='w-1/3'>
            <Button content='New Post' type='button' variant='primary' onClick={handleModal} canClick/>
          </div>
        </div>
        <PostList posts={posts} />
      </div>
      {isModalOpen && <Modal title='Create Post' handleClose={handleModal} />}
    </div>
  );
};

export default Dashboard;
