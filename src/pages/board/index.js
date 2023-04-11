import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { PostsContext, UserContext } from '@/context/context';
import Image from 'next/image';
import Link from 'next/link';
import PostList from '@/components/postList';
import Button from '@/components/button';
import Modal from '@/components/modal';
import shortUUID from 'short-uuid';
import { initialPosts } from '@/context/dummyData';

const Dashboard = () => {
  const { userData, setUserData } = useContext(UserContext);
  const { posts, setPosts } = useContext(PostsContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  /* useEffect(() => {
    setPosts(posts.map(post => ({ ...post })));
  }, []) */

  /* useEffect(() => {
    if (userData.isLogged == false)
      router.push('/');  
  }, []); */

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className='container flex flex-col gap-4 p-4 bg-neutral-900 sm:bg-neutral-800 sm:border sm:border-neutral-700 sm:rounded-md'>
      <div className='flex w-full justify-between items-end border-b border-neutral-700 pb-4'>
        <span className='flex-1 text-lg md:text-2xl font-bold leading-none'>
          Posts
        </span>
        <div className='w-1/5'>
          <Button
            content='New Post'
            type='button'
            variant='primary'
            onClick={handleModal}
            canClick
          />
        </div>
      </div>
      <PostList posts={posts} />
      {isModalOpen && <Modal title='Create Post' handleClose={handleModal} />}
    </div>
  );
};

export default Dashboard;
