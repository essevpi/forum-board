import { useContext } from 'react';
import { UserContext } from '@/context/context';
import Image from 'next/image';

const Navbar = () => {
  const { userData } = useContext(UserContext);
  return (
    <div className='h-[--nav-height] flex items-center justify-center bg-neutral-800'>
      <div className='container h-full w-11/12 h-4/5 sm:w-3/4 lg:w-1/2 flex items-center justify-between'>
        <div>
          <span className='text-2xl uppercase'>MSGBoard</span>
        </div>
        <div>
          {userData.isLogged && <UserInfo user={userData} />}
        </div>
      </div>
    </div>
  );
};

const UserInfo = ({ user }) => {
  const avatarSrc = `
    https://boring-avatars-api.vercel.app/api/avatar?variant=beam
  `;

  const avatarLoader = ({ size }) => {
    return `https://boring-avatars-api.vercel.app/api/avatar?variant=beam`;
  };

  return (
    <div className='flex items-center gap-2 w-full'>
      <div className='flex flex-col flex-1'>
        <span className='text-xl md:text-3xl'>{user.username}</span>
        <span className='text-xs text-neutral-400 text-end'>Log Out</span>
      </div>
      <div className='relative border-2 border-lime-300 rounded-full'>
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
