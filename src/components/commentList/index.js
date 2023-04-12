import styles from './CommentList.styles';

const CommentList = ({ post }) => {
  return (
    <div className={styles.commentList.container}>
      <h6 className='mb-2'>Comments</h6>
      {post?.comments.length > 0 ? (
        <div className={styles.commentList.comments}>
          {post.comments.map((comment, i) => (
            <Comment comment={comment} key={i} />
          ))}
        </div>
      ) : (
        <p className={styles.commentList.noComments}>No comments yet</p>
      )}
    </div>
  );
};

const Comment = ({ comment }) => {
  return (
    <div className={styles.comment.container}>
      <span className={styles.comment.author}>{comment.author}</span>
      <p className={styles.comment.body}>{comment.body}</p>
    </div>
  );
};

export default CommentList;
