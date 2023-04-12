const styles = {
  navbarContainer: `
    h-[--nav-height]
    flex
    items-center
    justify-center
    sm:px-4
    bg-[--light-navbar-color]
    dark:bg-[--dark-navbar-color]
  `,
  navbarWrapper: `
    container
    lg:w-3/4
    2xl:w-1/2
    h-full
    flex
    items-center
    justify-between
    px-4    
    sm:p-0
  `,
  navbarControlsContainer: `
    flex
    divide-x
    divide-[--dark-border-color]
    items-center
  `,
  userDataContainer: `
    pl-4
  `,
  themeToggleContainer: `
    flex
    pr-4
  `
};

export default styles;
