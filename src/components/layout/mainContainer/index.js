import React from 'react';

const MainContainer = ({ children }) => {
  return (
    <main className='flex w-full lg:w-3/4 2xl:w-1/2 lg:mx-auto min-h-[calc(100vh-var(--nav-height))] justify-center sm:items-center sm:py-8'>
      {children}
    </main>
  );
};

export default MainContainer;
