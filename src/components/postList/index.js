import Link from 'next/link';

const PostList = ({ posts }) => {
  return (
    <div className='w-full flex min-h-0 flex-col items-center gap-2'>
      {posts?.map((post, i) => (
        <Post key={i} post={post} />
      ))}
    </div>
  );
};

const Post = ({ post }) => {
  return (
    <Link
      href={`/board/post/${post.id}`}
      query={{ data: post }}
      className='flex flex-col w-full p-4 rounded-md bg-neutral-600 border border-transparent transition duration-300 hover:bg-neutral-700 hover:border-lime-300'
    >
      <h5 className='leading-none'>{post.title}</h5>
      <span className='text-s text-neutral-300 font-light'>{post.author}</span>
      <p className='truncate ...'>{post.content}</p>
    </Link>
  );
};

export default PostList;
