import Button from '../button';

import styles from './LoginForm.styles';

const LoginForm = ({ children, onSubmit, handleReset }) => {
  return (
    <form onSubmit={onSubmit} className={styles.formContainer}>
      {children}
      <div className={styles.buttonContainer}>
        <Button content='Login' variant='primary' />
      </div>
    </form>
  );
};

export default LoginForm;
