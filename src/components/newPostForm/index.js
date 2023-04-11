import { useState, useContext } from 'react';
import Button from '../button/index.js';
import InputField from '../inputField/index.js';
import { PostsContext, UserContext } from '@/context/context.js';
import shortUUID from 'short-uuid';

import styles from './NewPostForm.styles';

const NewPostForm = ({ closeOnSubmit }) => {
  const { posts, setPosts } = useContext(PostsContext);
  const { userData } = useContext(UserContext);

  const [formData, setFormData] = useState({
    title: '',
    body: '',
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
    let newPost = { ...formData, id: shortUUID.generate(), comments: [] };
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    let updatedPosts = posts.concat(newPost);

    setPosts(posts.concat(newPost));
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    closeOnSubmit();
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
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
          name='body'
          onInputChange={handleInputChange}
          required
          textArea
        />
      </div>
      <Button content='Create' variant='primary' canClick />
    </form>
  );
};

export default NewPostForm;
