const CommentList = ({ post }) => {
  return (
    <div className='border-b border-neutral-700 pb-4'>
      <h6>Comments</h6>
      {
        post?.comments.length > 0 
          ? <div className='flex flex-col gap-2 overflow-y-scroll h-64 scrollbar-thin scrollbar-track-neutral-800 scrollbar-thumb-lime-300 sm:scrollbar-track-neutral-900 pr-2'>
            {post.comments.map((comment, i) => 
              <Comment comment={comment} key={i} />
            )}
            </div>
          : <p className='ml-2 italic'>No comments yet</p>
      }
    </div>
  );
};

const Comment = ({ comment }) => {
  return (
    <div className='flex flex-col bg-neutral-800 sm:bg-neutral-700 p-2 rounded-md'>
      <span className='font-bold'>{comment.author}</span>
      <p className='ml-2'>{comment.body}</p>
    </div>
  );
};

export default CommentList;
