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
    comments: [
      {
        author: 'User2378426',
        body: 'This is a comment'
      },
      {
        author: 'User1265463',
        body: 'This is another comment'
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
