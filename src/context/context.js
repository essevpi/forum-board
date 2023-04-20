import { createContext, useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import {
  defaultUser,
  initialPosts,
  initialUser,
  initialUsers,
} from './dummyData';

export const PostsContext = createContext(null);
export const UsersContext = createContext(null);
export const UserDataContext = createContext(null);

const Providers = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState(initialUsers);
  const [userData, setUserData] = useState({});

  const initStorage = (key, updateState, initialState) => {
    let initialData = JSON.parse(localStorage.getItem(key)) || initialState;

    updateState(initialData);
    localStorage.setItem(key, JSON.stringify(initialData));
  };

  useEffect(() => {
    initStorage('posts', setPosts, initialPosts);
    initStorage('users', setUsers, initialUsers);
    initStorage('userData', setUserData, {});
  }, []);

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
