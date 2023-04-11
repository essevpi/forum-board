import { useContext } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { UserContext } from '@/context/context';

const Navbar = () => {
  const { userData, setUserData } = useContext(UserContext);
  const router = useRouter();

  const handleLogOut = () => {
    setUserData({
      username: '',
      password: '',
      isLogged: false,
    });
    router.push('/');
  };

  return (
    <div className='h-[--nav-height] flex items-center justify-center bg-neutral-800 sm:px-4'>
      <div className='container lg:w-3/4 2xl:w-1/2 px-4 h-full flex items-center justify-between sm:p-0'>
        <div>
          <span className='text-2xl uppercase'>Board</span>
        </div>
        <div>{userData.isLogged && <UserInfo user={userData} handleLogOut={handleLogOut} />}</div>
      </div>
    </div>
  );
};

const UserInfo = ({ user, handleLogOut }) => {
  const avatarSrc = `
    https://boring-avatars-api.vercel.app/api/avatar?variant=beam
  `;

  const avatarLoader = ({ size }) => {
    return `https://boring-avatars-api.vercel.app/api/avatar?variant=beam`;
  };

  return (
    <div className='flex items-center gap-3 w-full'>
      <div className='flex flex-col flex-1'>
        <span className='text-lg md:text-xl leading-none'>{user.username}</span>
        <div className='text-end'>
          <span
            className='text-xs text-neutral-400 cursor-pointer hover:text-neutral-300'
            onClick={handleLogOut}
          >
            Log Out
          </span>
        </div>
      </div>
      <div className='relative ring-2 ring-lime-300 rounded-full'>
        <Image
          src={avatarSrc}
          loader={avatarLoader}
          alt='avatar'
          width={36}
          height={36}
        />
      </div>
    </div>
  );
};

export default Navbar;
