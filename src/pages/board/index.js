import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import { PostsContext, UserDataContext } from '@/context/context';
import PostList from '@/components/postList';
import Button from '@/components/button';
import Modal from '@/components/modal';
import NewPostForm from '@/components/newPostForm';
import Confirmation from '@/components/confirmation';

import styles from '../../styles/board/Board.styles';

const initialModalState = {
  isOpen: false,
  title: '',
  component: null,
};

const Board = () => {
  const { userData } = useContext(UserDataContext);
  const { posts, setPosts } = useContext(PostsContext);
  const [modalState, setModalState] = useState(initialModalState);
  const router = useRouter();

  useEffect(() => {
    /* redirect to home if not logged*/
    if (userData.isLogged === false) router.push('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleModal = (type, e, postId) => {
    switch (type) {
      case 'deletePost':
        e.preventDefault();
        console.log(postId);
        setModalState({
          isOpen: true,
          title: 'Delete post',
          component: (
            <Confirmation
              message='Do you really want to delete this post?'
              onCancel={() => setModalState(initialModalState)}
              onConfirm={() => handleDeletePost(postId)}
            />
          ),
        });
        break;
      case 'deleteAll':
        setModalState({
          isOpen: true,
          title: 'Delete posts',
          component: (
            <Confirmation
              message='Do you really want to delete all posts?'
              onCancel={() => setModalState(initialModalState)}
              onConfirm={handleDeleteAll}
            />
          ),
        });
        break;
      case 'createPost':
        setModalState({
          isOpen: true,
          title: 'Create post',
          component: (
            <NewPostForm
              closeOnSubmit={() => setModalState(initialModalState)}
            />
          ),
        });
        break;
    }
  };

  const handleDeleteAll = () => {
    setPosts([]);
    localStorage.setItem('posts', JSON.stringify([]));
    setModalState(initialModalState);
  };

  const handleDeletePost = (id) => {
    let updatedPosts = posts.filter((p) => p.id !== id);

    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));

    setModalState(initialModalState);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <span className={styles.heading}>Posts</span>
        <div className={styles.actionsContainer}>
          {/* DELETE ALL POSTS BUTTON - ADMIN ONLY */}
          {userData.isAdmin && (
            <div className={styles.buttonContainer}>
              <div className={styles.buttonContainer}>
                <Button
                  content='Delete all'
                  type='button'
                  variant='secondary'
                  onClick={() => handleModal('deleteAll')}
                  canClick
                />
              </div>
            </div>
          )}
          <div className={styles.buttonContainer}>
            <Button
              content='New Post'
              type='button'
              variant='primary'
              onClick={() => handleModal('createPost')}
              canClick
            />
          </div>
        </div>
      </div>
      {/* POST LIST */}
      {posts?.length > 0 ? (
        <PostList posts={posts} handleDeleteModal={handleModal} />
      ) : (
        <p className='italic'>No posts yet</p>
      )}
      {/* MODAL */}
      <AnimatePresence>
        {modalState.isOpen && (
          <Modal
            title={modalState.title}
            handleClose={() => setModalState(initialModalState)}
          >
            {modalState.component}
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Board;
