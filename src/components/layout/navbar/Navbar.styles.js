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
  navbarLogo: `
    flex
    items-center
    
  `,
  navbarLogoIcon: `
    text-[--light-accent]
    dark:text-[--dark-accent]
    text-[2rem]
  `,
  navbarLogoText: `
    text-2xl
    font-bold
    uppercase
    leading-none
    hover:text-[--light-text-hover-color]
    dark:hover:text-[--dark-text-hover-color]
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
