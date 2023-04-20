import Button from '../button';
import { motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

import styles from './Modal.styles';

const Modal = ({ title, handleClose, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.modalContainer}
      onClick={handleClose}
    >
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
        <div className={styles.modalBodyContainer}>{children}</div>
      </div>
    </motion.div>
  );
};

export default Modal;
