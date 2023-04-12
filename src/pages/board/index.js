import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { PostsContext, UserContext } from '@/context/context';
import PostList from '@/components/postList';
import Button from '@/components/button';
import Modal from '@/components/modal';

import styles from './styles/Board.styles';

const Board = () => {
  const { userData, setUserData } = useContext(UserContext);
  const { posts, setPosts } = useContext(PostsContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setPosts(JSON.parse(localStorage.getItem('posts')));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* redirect to home if not logged - dev only */
  /* useEffect(() => {
    if (userData.isLogged == false)
      router.push('/');  
  }, []); */

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <span className={styles.heading}>Posts</span>
        <div className={styles.buttonContainer}>
          <Button
            content='New Post'
            type='button'
            variant='primary'
            onClick={handleModal}
            canClick
          />
        </div>
      </div>
      {posts?.length > 0 ? (
        <PostList posts={posts} />
      ) : (
        <p className='italic'>No posts yet</p>
      )}
      {isModalOpen && <Modal title='Create Post' handleClose={handleModal} />}
    </div>
  );
};

export default Board;
