import Button from '../button';

const LoginForm = ({ children, onSubmit, handleReset }) => {
  return (
    <form
      onSubmit={onSubmit}
      className='w-4/5 md:w-1/2 flex flex-col gap-2 p-4 border border-neutral-800 rounded-md bg-neutral-900'
    >
      {children}
      <div className='flex flex-1 gap-2 items-center'>
        <Button
          content='Reset'
          type='reset'
          variant='secondary'
          onClick={handleReset}
          canClick
        />
        <Button content='Submit' variant='primary' />
      </div>
    </form>
  );
};

export default LoginForm;
