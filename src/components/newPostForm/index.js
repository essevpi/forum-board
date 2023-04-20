import { useState, useContext } from 'react';
import { PostsContext, UserDataContext } from '@/context/context';
import Button from '../button';
import InputField from '../inputField';
import shortUUID from 'short-uuid';

import styles from './NewPostForm.styles';

const NewPostForm = ({ closeOnSubmit }) => {
  const { posts, setPosts } = useContext(PostsContext);
  const { userData } = useContext(UserDataContext);
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
    let updatedPosts = [newPost, ...(posts || [])];

    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    closeOnSubmit();
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <div>
          <InputField
            value={formData.title}
            name='title'
            placeholder='Post title'
            required
            onInputChange={handleInputChange}
          />
        </div>
        <div>
          <InputField
            value={formData.content}
            name='body'
            placeholder='Post content'
            onInputChange={handleInputChange}
            required
            textArea
          />
        </div>
      </div>
      <div className={styles.actionsContainer}>
        <Button content='Create' variant='primary' canClick />
      </div>
    </form>
  );
};

export default NewPostForm;
