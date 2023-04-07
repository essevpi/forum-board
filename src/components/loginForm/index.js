import Button from '../button';

const LoginForm = ({ children, onSubmit, handleReset }) => {
  return (
    <form
      onSubmit={onSubmit}
      className='w-4/5 md:w-1/2 flex flex-col gap-4 p-4 border border-neutral-700 rounded-md bg-neutral-800'
    >
      {children}
      <div className='flex flex-1 gap-2 items-center'>
        <Button content='Login' variant='primary' />
      </div>
    </form>
  );
};

export default LoginForm;
