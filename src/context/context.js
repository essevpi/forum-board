import { createContext, useState } from 'react';
import { ThemeProvider } from 'next-themes';
import { initialPosts, initialUser, initialUsers } from './dummyData';

export const PostsContext = createContext(null);
export const UsersContext = createContext(null);
export const UserDataContext = createContext(null);

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
  const [posts, setPosts] = useState(defaultPosts);
  const [users, setUsers] = useState(initialUsers);
  const [userData, setUserData] = useState(initialUser);

  return (
    <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={false}>
      <PostsContext.Provider value={{ posts, setPosts }}>
        <UsersContext.Provider value={{ users, setUsers }}>
          <UserDataContext.Provider value={{ userData, setUserData }}>
            {children}
          </UserDataContext.Provider>
        </UsersContext.Provider>
      </PostsContext.Provider>
    </ThemeProvider>
  );
};

export default Providers;
