import { useContext, useEffect, useState } from 'react';
import { PostsContext, UserContext } from '@/context/context';
import { useRouter } from 'next/router';
import InputField from '@/components/inputField';
import Button from '@/components/button';
import CommentList from '@/components/commentList';

const Post = () => {
  const { posts, setPosts } = useContext(PostsContext);
  const { userData } = useContext(UserContext);
  const router = useRouter();
  const slug = router.query.slug?.toString();
  const [post, setPost] = useState();

  useEffect(() => {
    /* const posts = JSON.parse(localStorage.getItem('posts')); */
    const currPost = JSON.parse(localStorage.getItem('posts')).find(
      (post) => post.id == slug
    );
    setPost(currPost);
    console.log('post is', post);
  }, [slug]);

  const [comment, setComment] = useState('');

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

  return (
    <div className='container flex flex-col gap-4 p-4 bg-neutral-900 sm:bg-neutral-800 sm:self-stretch sm:border sm:border-neutral-700 sm:rounded-md'>
      {/* POST */}
      <div className='flex'>
        <div>
          <h4>{post?.title}</h4>
          <span className='text-neutral-400'>Posted by {post?.author}</span>
        </div>
      </div>
      <article className='h-full border-y border-neutral-700 py-4'>
        {post?.content}
      </article>
      {/* COMMENTS */}
      <CommentList post={post} />
      <form onSubmit={handleCommentSubmit} className='flex flex-col gap-4'>
        <InputField
          name='add comment'
          value={comment}
          onInputChange={handleCommentChange}
          required
          textArea
          textAreaStyle='resize-none h-32 bg-neutral-950 focus:bg-neutral-950 sm:bg-neutral-900'
        />
        <div className='w-full sm:w-1/5 ml-auto'>
          <Button content='comment' variant='primary' canClick />
        </div>
      </form>
    </div>
  );
};
export default Post;
