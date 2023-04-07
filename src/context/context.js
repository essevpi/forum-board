import { createContext, useState } from 'react';

const initialUserData = {
  username: '',
  password: '',
  isLogged: false
};

const initialPosts = [
  {
    title: 'Post 1',
    post: 'Some long desc1 Some long desc1 Some long desc1 Some long desc1 Some long desc1 ',
    creator: 'User1'
  },
  {
    title: 'Post 2',
    post: 'Some long desc2 Some long desc2 Some long desc2 Some long desc2 Some long desc2 ',
    creator: 'User2'
  },
  {
    title: 'Post 3',
    post: 'Some long desc3 Some long desc3 Some long desc3 Some long desc3 Some long desc3 ',
    creator: 'User3'
  },
]

export const UserContext = createContext(null);
export const PostsContext = createContext(null);

const Providers = ({ children }) => {
  const [userData, setUserData] = useState(initialUserData);
  const [posts, setPosts] = useState(initialPosts);

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      <UserContext.Provider value={{ userData, setUserData }}>
        {children}
      </UserContext.Provider>
    </PostsContext.Provider>
  );
};

export default Providers;
