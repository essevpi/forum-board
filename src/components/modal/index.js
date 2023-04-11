import Button from '../button';
import NewPostForm from '../newPostForm';
import { IoClose } from 'react-icons/io5';

const Modal = ({ title, handleClose }) => {
  return (
    <div
      className='fixed top-0 left-0 h-full w-full flex justify-center items-center bg-[--modal-background-color] backdrop-blur-sm'
      onClick={handleClose}
    >
      {/* stopPropagation prevents modal closing when clicking modal */}
      <div
        className='container mx-4 sm:mx-0 flex flex-col p-4 bg-neutral-800 rounded-md gap-2'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex justify-between items-end border-b border-neutral-700 pb-2'>
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
