import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import { UserDataContext } from '@/context/context';
import { IoTrash } from 'react-icons/io5';

import styles from './CommentList.styles';

const CommentList = ({ post, handleModal }) => {
  return (
    <div className={styles.commentList.container}>
      <h6 className='mb-2'>Comments</h6>
      {post?.comments?.length > 0 ? (
        <AnimatePresence>
          <div className={styles.commentList.comments} id='comments'>
            {post.comments.map((comment, i) => (
              <Comment comment={comment} key={i} handleModal={handleModal} />
            ))}
          </div>
        </AnimatePresence>
      ) : (
        <p className={styles.commentList.noComments}>No comments yet</p>
      )}
    </div>
  );
};

const Comment = ({ comment, handleModal }) => {
  const { userData } = useContext(UserDataContext);
  
  return (
    <motion.div
      className={styles.comment.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className={styles.comment.wrapper}>
        <span className={styles.comment.author}>{comment.author}</span>
        <p className={styles.comment.body}>{comment.body}</p>
      </div>
      {(userData.isAdmin || comment.author === userData.username) && (
        <div className={styles.comment.deleteIconContainer}>
          <div
            id='deleteComment'
            className={styles.comment.deleteIconWrapper}
            onClick={() => handleModal('deleteComment', comment.id)}
          >
            <IoTrash className={styles.comment.deleteIcon} />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default CommentList;
