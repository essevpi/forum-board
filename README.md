# Forum-Board
[App demo](https://forum-board.vercel.app/board)

A simple forum-like platform where you can create new threads, comment them and delete both the threads/comments if you are the author.
Local storage is used to simulate data persistance since there's no actual backend.

## Technologies used
- NextJS
- TailwindCSS
- Framer-motion
- ContextAPI for managing state

There are two default users:
- Admin : admin
  - has admin privileges, can delete all threads and all comments
- User123 : safepw 
  - a normal user with no admin privileges
  
You can also signup and a new user will be created.  
*Do NOT use sensitive data*
