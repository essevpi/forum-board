import shortUUID from 'short-uuid';

export const initialUser = {
  email: 'test@test.com',
  username: 'TestUser',
  password: 'testpw',
  picSrc: 'https://boring-avatars-api.vercel.app/api/avatar?variant=beam',
  isLogged: true,
  isAdmin: false,
};

export const defaultUser = {
  email: '',
  username: '',
  password: '',
  picSrc: 'https://boring-avatars-api.vercel.app/api/avatar?variant=beam',
  isLogged: false,
  isAdmin: false,
};

export const initialUsers = [
  {
    email: 'admin@admin.com',
    username: 'Admin',
    password: 'admin',
    picSrc: 'https://boring-avatars-api.vercel.app/api/avatar?variant=beam',
    isLogged: false,
    isAdmin: true,
  },
  {
    email: 'user123@mail.com',
    username: 'User123',
    password: 'safepw',
    picSrc: 'https://boring-avatars-api.vercel.app/api/avatar?variant=beam',
    isLogged: false,
    isAdmin: false,
  },
];

export const initialPosts = [
  {
    title: 'Welcome to the forum!',
    body: `This is a simple forum-like platform where you can create posts and comment them. Create a new post!`,
    author: 'Admin',
    id: shortUUID.generate(),
    comments: [
      {
        author: 'User2378426',
        body: 'This is a comment',
        id: shortUUID.generate(),
      },
      {
        author: 'User1265463',
        body: 'This is another comment',
        id: shortUUID.generate(),
      },
    ],
  },
];
