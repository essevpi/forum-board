import { useContext } from "react";
import { PostsContext } from "@/context/context";
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const slug = router.query.slug?.toString();
  const { posts } = useContext(PostsContext);
  const post = posts.find(post => post.id == slug);

  return (
    <div className=''>
      <div>Post page</div>
      <p>is: {slug}</p>
      <p>POST: {JSON.stringify(post)}</p>
    </div>
  );
};
export default Post;
