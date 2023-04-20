const styles = {
  navbarContainer: `
    h-[--nav-height]
    flex
    items-center
    justify-center
    bg-[--light-navbar-color]
    dark:bg-[--dark-navbar-color]
  `,
  navbarWrapper: `
    container
    lg:mx-auto
    lg:w-1/2
    flex
    items-center
    justify-between
    px-4
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
    divide-[--light-border-color]
    dark:divide-[--dark-border-color]
    items-center
  `,
  userMenuContainer: `
    xs:pl-4
  `,
  themeToggleContainer: `
    flex
  `,
};

export default styles;
