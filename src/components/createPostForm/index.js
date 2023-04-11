import { useState, useContext } from 'react';
import Button from '../button/index.js';
import InputField from '../inputField/index.js';
import { PostsContext, UserContext } from '@/context/context.js';
import shortUUID from 'short-uuid';

import styles from './CreatePostForm.styles.js';

const CreatePostForm = ({ closeOnSubmit }) => {
  const { posts, setPosts } = useContext(PostsContext);
  const { userData } = useContext(UserContext);

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: userData.username,
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newPost = { ...formData, id: shortUUID.generate() };
    setPosts(posts.concat(newPost));
    closeOnSubmit();
  };

  return (
    <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
      <div>
        <InputField
          value={formData.title}
          name='title'
          required
          onInputChange={handleInputChange}
        />
      </div>
      <div>
        <InputField
          value={formData.content}
          name='content'
          onInputChange={handleInputChange}
          required
          textArea
        />
      </div>
      <Button content='Create' variant='primary' canClick />
    </form>
  );
};

export default CreatePostForm;
