import shortUUID from "short-uuid";

export const initialUser = {
  username: 'Noice',
  password: 'safepw',
  isLogged: true
};

export const initialPosts = [
  {
    title: 'Post 1',
    content:
      'Some long desc1 Some long desc1 Some long desc1 Some long desc1 Some long desc1 ',
    author: 'User1',
    id: shortUUID.generate(),
  },
  {
    title: 'Post 2',
    content:
      'Some long desc2 Some long desc2 Some long desc2 Some long desc2 Some long desc2 ',
    author: 'User2',
    id: shortUUID.generate(),
  },
  {
    title: 'Post 3',
    content:
      'Some long desc3 Some long desc3 Some long desc3 Some long desc3 Some long desc3 ',
    author: 'User3',
    id: shortUUID.generate(),
  },
  {
    title: 'Post 1',
    content:
      'Some long desc1 Some long desc1 Some long desc1 Some long desc1 Some long desc1 ',
    author: 'User1',
    id: shortUUID.generate(),
  },
  {
    title: 'Post 2',
    content:
      'Some long desc2 Some long desc2 Some long desc2 Some long desc2 Some long desc2 ',
    author: 'User2',
    id: shortUUID.generate(),
  },
  {
    title: 'Post 3',
    content:
      'Some long desc3 Some long desc3 Some long desc3 Some long desc3 Some long desc3 ',
    author: 'User3',
    id: shortUUID.generate(),
  },
  {
    title: 'Post 1',
    content:
      'Some long desc1 Some long desc1 Some long desc1 Some long desc1 Some long desc1 ',
    author: 'User1',
    id: shortUUID.generate(),
  },
  {
    title: 'Post 2',
    content:
      'Some long desc2 Some long desc2 Some long desc2 Some long desc2 Some long desc2 ',
    author: 'User2',
    id: shortUUID.generate(),
  },
  {
    title: 'Post 3',
    content:
      'Some long desc3 Some long desc3 Some long desc3 Some long desc3 Some long desc3 ',
    author: 'User3',
    id: shortUUID.generate(),
  },
];
