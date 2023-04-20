import { useContext } from 'react';
import { UserDataContext } from '@/context/context';
import Link from 'next/link';
import { IoTrash } from 'react-icons/io5';

import styles from './PostList.styles';

const PostList = ({ posts, handleDeleteModal }) => {
  return (
    <div className={styles.postList.container}>
      {posts?.map((post, i) => (
        <Post key={i} post={post} handleDeleteModal={handleDeleteModal} />
      ))}
    </div>
  );
};

const Post = ({ post, handleDeleteModal }) => {
  const { userData } = useContext(UserDataContext);

  return (
    <Link href={`/board/${post.id}`} className={styles.post.container}>
      <div className={styles.post.wrapper}>
        <h5 className='leading-none'>{post.title}</h5>
        <span className={styles.post.author}>{post.author}</span>
        <p className={styles.post.body}>{post.body}</p>
      </div>
      {(userData.isAdmin || userData.username === post.author) && (
        <div className={styles.post.deleteIconContainer}>
          <div
            id='deletePost'
            className={styles.post.deleteIconWrapper}
            onClick={(e) => handleDeleteModal('deletePost', e, post.id)}
          >
            <IoTrash
              id='deletePost'
              className={styles.post.deleteIcon}
              onClick={() => {}}
            />
          </div>
        </div>
      )}
    </Link>
  );
};

export default PostList;
