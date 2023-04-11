import Button from '../button';

const LoginForm = ({ children, onSubmit, handleReset }) => {
  return (
    <form
      onSubmit={onSubmit}
      className='w-full flex justify-center border-y border-neutral-700 flex-col gap-4 p-4 bg-neutral-800 sm:border sm:border-neutral-700 sm:rounded-md sm:bg-neutral-800'
    >
      {children}
      <div className='flex gap-2 items-center sm:w-1/5 sm:ml-auto'>
        <Button content='Login' variant='primary' />
      </div>
    </form>
  );
};

export default LoginForm;
