import { createContext, useState } from 'react';
import { initialPosts, initialUser } from './dummyData';
import shortUUID from 'short-uuid';

export const UserContext = createContext(null);
export const PostsContext = createContext(null);

const Providers = ({ children }) => {
  const [userData, setUserData] = useState(initialUser);
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
