import Link from 'next/link';

import styles from './PostList.styles';

const PostList = ({ posts }) => {
  return (
    <div className={styles.postList.container}>
      {posts?.map((post, i) => (
        <Post key={i} post={post} />
      ))}
    </div>
  );
};

const Post = ({ post }) => {
  return (
    <Link
      href={`/board/${post.id}`}
      query={{ data: post }}
      className={styles.post.container}
    >
      <h5 className='leading-none'>{post.title}</h5>
      <span className={styles.post.author}>{post.author}</span>
      <p className={styles.post.body}>{post.body}</p>
    </Link>
  );
};

export default PostList;
