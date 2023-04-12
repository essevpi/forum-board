import { createContext, useState } from 'react';
import { ThemeProvider } from 'next-themes';
import { initialPosts, initialUser } from './dummyData';

export const UserContext = createContext(null);
export const PostsContext = createContext(null);

/* Posts interface */
const defaultPosts = [
  {
    title: '',
    body: '',
    id: '',
    comments: [],
  },
];

const Providers = ({ children }) => {
  const [userData, setUserData] = useState(initialUser);
  const [posts, setPosts] = useState(defaultPosts);

  return (
    <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={false}>
      <PostsContext.Provider value={{ posts, setPosts }}>
        <UserContext.Provider value={{ userData, setUserData }}>
          {children}
        </UserContext.Provider>
      </PostsContext.Provider>
    </ThemeProvider>
  );
};

export default Providers;
