import { motion, AnimatePresence } from 'framer-motion';

import styles from './CommentList.styles';

const CommentList = ({ post }) => {
  return (
    <div className={styles.commentList.container}>
      <h6 className='mb-2'>Comments</h6>
      {post?.comments.length > 0 ? (
        <AnimatePresence>
        <div className={styles.commentList.comments} id='comments'>
          {post.comments.map((comment, i) => (
            <Comment comment={comment} key={i} />
          ))}
        </div>
        </AnimatePresence>
      ) : (
        <p className={styles.commentList.noComments}>No comments yet</p>
      )}
    </div>
  );
};

const Comment = ({ comment }) => {
  return (
    <motion.div
      className={styles.comment.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.2,
      }}
    >
      <span className={styles.comment.author}>{comment.author}</span>
      <p className={styles.comment.body}>{comment.body}</p>
    </motion.div>
  );
};

export default CommentList;
