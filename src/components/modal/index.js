import Button from '../button';
import NewPostForm from '../newPostForm';
import { IoClose } from 'react-icons/io5';

import styles from './Modal.styles';

const Modal = ({ title, handleClose }) => {
  return (
    <div className={styles.modalContainer} onClick={handleClose}>
      {/* stopPropagation prevents modal closing when clicking modal */}
      <div className={styles.modalWindow} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeadingContainer}>
          <h4 className='leading-none'>{title}</h4>
          <div>
            <Button
              content={<IoClose size={'1.25rem'} />}
              variant='primary-rounded'
              onClick={handleClose}
              canClick
            />
          </div>
        </div>
        <div className='mt-2'>
          <NewPostForm closeOnSubmit={handleClose} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
