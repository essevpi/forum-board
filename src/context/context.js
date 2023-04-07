import { createContext, useState } from 'react';

//dummy data just for testing purproses
const initialUserData = {
  username: 'User192382384',
  password: 'eheheh',
  isLogged: true
};

const initialPosts = [
  {
    title: 'Post 1',
    content: 'Some long desc1 Some long desc1 Some long desc1 Some long desc1 Some long desc1 ',
    author: 'User1'
  },
  {
    title: 'Post 2',
    content: 'Some long desc2 Some long desc2 Some long desc2 Some long desc2 Some long desc2 ',
    author: 'User2'
  },
  {
    title: 'Post 3',
    content: 'Some long desc3 Some long desc3 Some long desc3 Some long desc3 Some long desc3 ',
    author: 'User3'
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
