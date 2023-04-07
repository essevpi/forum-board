const PostList = ({ posts }) => {
  return (
    <div className='w-full flex flex-col flex-1 items-center gap-2'>
      {posts.map((post, i) => (
        <Post key={i} post={post} />
      ))}
    </div>
  );
};

const Post = ({ post }) => {
  return (
    <div className='w-full p-4 rounded-md bg-neutral-600 transition duration-300 hover:bg-neutral-700'>
      <h5 className='leading-none'>{post.title}</h5>
      <span className='text-s text-neutral-300 font-light'>{post.author}</span>
      <p className='truncate ...'>{post.content}</p>
    </div>
  )
};

export default PostList;
