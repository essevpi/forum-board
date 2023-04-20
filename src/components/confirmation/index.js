import Button from '../button';

import styles from './Confirmation.styles';

const Confirmation = ({ message, onCancel, onConfirm }) => {
  return (
    <div className={styles.container}>
      <div className={styles.messageContainer}>{message}</div>
      <div className={styles.actionsContainer}>
        <div className={styles.buttonContainer}>
          <Button
            content='No'
            variant='secondary'
            onClick={onCancel}
            canClick
          />
        </div>
        <div className={styles.buttonContainer}>
          <Button
            content='Yes'
            variant='primary'
            onClick={onConfirm}
            canClick
          />
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
