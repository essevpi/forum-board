import { createContext, useState } from 'react';
import { initialPosts, initialUser } from './dummyData';

export const UserContext = createContext(null);
export const PostsContext = createContext(null);

const defaultPosts = [
  {
    title: '',
    body: '',
    id: '',
    comments: []
  },
]

/*
  {

  }
*/

const Providers = ({ children }) => {
  const [userData, setUserData] = useState(initialUser);
  const [posts, setPosts] = useState(defaultPosts);

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      <UserContext.Provider value={{ userData, setUserData }}>
        {children}
      </UserContext.Provider>
    </PostsContext.Provider>
  );
};

export default Providers;
