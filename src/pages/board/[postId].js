import { useContext, useEffect, useState } from 'react';
import { PostsContext, UserDataContext } from '@/context/context';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import shortUUID from 'short-uuid';
import Link from 'next/link';
import Modal from '@/components/modal';
import Confirmation from '@/components/confirmation';
import InputField from '@/components/inputField';
import Button from '@/components/button';
import CommentList from '@/components/commentList';
import { IoArrowBackSharp, IoTrash } from 'react-icons/io5';

import styles from '../../styles/board/Post.styles';

const initialModalState = {
  isOpen: false,
  title: '',
  component: null,
};

const Post = () => {
  const { posts, setPosts } = useContext(PostsContext);
  const { userData } = useContext(UserDataContext);
  const [post, setPost] = useState({});
  const [comment, setComment] = useState('');
  const [modalState, setModalState] = useState(initialModalState);
  const router = useRouter();
  const slug = router.query.postId?.toString();

  useEffect(() => {
    const currPost = JSON.parse(localStorage.getItem('posts')).find(
      (post) => post.id === slug
    );
    setPost(currPost);
  }, [slug]);

  const handleModal = (type, id) => {
    switch (type) {
      case 'deleteComment':
        setModalState({
          isOpen: true,
          title: 'Delete comment',
          component: (
            <Confirmation
              message='Do you really want to delete this comment?'
              onCancel={() => setModalState(initialModalState)}
              onConfirm={() => handleDeleteComment(id)}
            />
          ),
        });
        break;

      case 'deletePost':
        setModalState({
          isOpen: true,
          title: 'Delete post',
          component: (
            <Confirmation
              message='Do you really want to delete this post?'
              onCancel={() => setModalState(initialModalState)}
              onConfirm={() => handleDeletePost(id)}
            />
          ),
        });
        break;
    }
  };

  const handleDeletePost = (id) => {
    let updatedPosts = posts.filter((p) => p.id !== id);

    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    setModalState(initialModalState);

    router.push('/board');
  };

  const handleDeleteComment = (id) => {
    let updatedPost = {
      ...post,
      comments: post.comments.filter((c) => c.id !== id),
    };
    setPost(updatedPost);

    let updatedPosts = posts.map((p) => (p.id === post.id ? updatedPost : p));
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    setModalState(initialModalState);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    let newComment = {
      author: userData.username,
      body: comment,
      id: shortUUID.generate(),
    };

    let updatedPost = {
      ...post,
      comments: [...post.comments, newComment],
    };

    setPost(updatedPost);

    let updatedPosts = posts.map((p) => (p.id === post.id ? updatedPost : p));

    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));

    setComment('');
    //scroll comments to bottom when a new one is added
    setTimeout(() => {
      let objDiv = document.getElementById('comments');
      objDiv.scrollTop = objDiv.scrollHeight;
    }, 0);
  };

  if (slug !== post?.id) {
    return (
      <div className={styles.postNotFound.container}>
        <h4>Post not found!</h4>
        <Link href='/board'>
          <Button content='Back to board' variant='primary' />
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.post.container}>
      {/* POST */}
      <div className={styles.post.headingContainer}>
        <div className={styles.post.headingWrapper}>
          <h5>{post?.title}</h5>
          <span className={styles.post.author}>Posted by {post?.author}</span>
        </div>
        <div className={styles.post.actionsContainer}>
          <div className={styles.post.buttonContainer}>
            <Button
              content={<IoTrash size='1.5rem' />}
              variant='secondary-squared'
              onClick={() => handleModal('deletePost', post.id)}
              canClick
            />
          </div>
          <div className={styles.post.buttonContainer}>
            <Link href='/board'>
              <Button
                content={<IoArrowBackSharp size='1.5rem' />}
                variant='secondary-squared'
              />
            </Link>
          </div>
        </div>
      </div>
      <article className={styles.post.bodyContainer}>{post?.body}</article>
      {/* COMMENT LIST */}
      <CommentList post={post} handleModal={handleModal} />
      <form
        onSubmit={handleCommentSubmit}
        className={styles.post.formContainer}
      >
        <InputField
          name='add comment'
          value={comment}
          onInputChange={handleCommentChange}
          required
          textArea
          textAreaStyle={styles.post.commentTextArea}
        />
        <div className={styles.post.formButtonContainer}>
          <Button content='comment' variant='primary' canClick />
        </div>
      </form>
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
export default Post;
