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
    title: 'Post 1',
    content:
      'Some long desc1 Some long desc1 Some long desc1 Some long desc1 Some long desc1 ',
    author: 'User1',
    id: shortUUID.generate(),
    comments: [
      {
        author: 'User2378426',
        body: 'This is a comment',
      },
      {
        author: 'User1265463',
        body: 'This is another comment',
      },
    ],
  },
  {
    title: 'Post 2',
    content:
      'Some long desc2 Some long desc2 Some long desc2 Some long desc2 Some long desc2 ',
    author: 'User2',
    id: shortUUID.generate(),
    comments: [],
  },
  {
    title: 'Post 3',
    content:
      'Some long desc3 Some long desc3 Some long desc3 Some long desc3 Some long desc3 ',
    author: 'User3',
    id: shortUUID.generate(),
    comments: [],
  },
];
