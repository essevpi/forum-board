import { useContext, useEffect, useState } from 'react';
import { PostsContext, UserDataContext } from '@/context/context';
import { useRouter } from 'next/router';
import Link from 'next/link';
import InputField from '@/components/inputField';
import Button from '@/components/button';
import CommentList from '@/components/commentList';
import { IoArrowBackSharp } from 'react-icons/io5';

import styles from '../../styles/board/Post.styles';

const Post = () => {
  const { posts, setPosts } = useContext(PostsContext);
  const { userData } = useContext(UserDataContext);
  const router = useRouter();
  const slug = router.query.slug?.toString();
  const [post, setPost] = useState();
  const [comment, setComment] = useState('');

  useEffect(() => {
    const currPost = JSON.parse(localStorage.getItem('posts')).find(
      (post) => post.id === slug
    );
    setPost(currPost);
  }, [slug]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    let posts = JSON.parse(localStorage.getItem('posts'));
    let postIndex = posts.findIndex((post) => post.id == slug);
    let newComment = {
      author: userData.username,
      body: comment,
    };

    post.comments = post.comments.concat(newComment);

    let updatedPosts = posts.map((p, i) => (i === postIndex ? post : p));

    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    setComment('');
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
        <div>
          <h4>{post?.title}</h4>
          <span className={styles.post.author}>Posted by {post?.author}</span>
        </div>
        <div className=''>
          <Link href='/board'>
            <Button
              content={<IoArrowBackSharp size='1.5rem' />}
              variant='secondary'
            />
          </Link>
        </div>
      </div>
      <article className={styles.post.bodyContainer}>{post?.body}</article>
      {/* COMMENTS */}
      <CommentList post={post} />
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
    </div>
  );
};
export default Post;
