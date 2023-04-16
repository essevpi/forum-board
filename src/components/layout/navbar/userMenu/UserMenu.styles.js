const styles = {
  mobileContainer: `
    flex
    xs:hidden
    pl-4
    xs:p-0
  `,
  openDrawerIcon: `
    text-[1.5rem]
    hover:text-[--light-accent]
    dark:hover:text-[--dark-accent]
    transition-all
    cursor-pointer
    `,
  closeDrawerIcon: `
    text-[1.5rem]
    mb-4
    hover:text-[--light-accent]
    dark:hover:text-[--dark-accent]
    transition-all
    cursor-pointer
  `,
  mobileDrawer: `
    absolute
    p-8
    top-0
    right-0
    h-screen
    border-l
    border-[--light-border-color]
    dark:border-[--dark-border-color]
    bg-[--light-background-color-secondary]
    dark:bg-[--dark-background-color-secondary]
    xs:hidden
  `,
  container: `
    hidden
    w-full
    xs:block
  `,
  userInfoContainer: `
    flex
    items-center
    border-t
    border-[--light-border-color]
    dark:border-[--dark-border-color]
    pt-4
    xs:flex
    xs:items-center
    xs:gap-3
    xs:border-none
  `,
  userDataContainer: `
    flex
    flex-col
    flex-1
  `,
  username: `
    text-lg
    md:text-xl
    leading-none
  `,
  logoutWrapper: `
    xs:text-end
  `,
  logout: `
    text-xs
    font-medium
    text-[--light-text-color-tertiary]
    hover:text-[--light-text-hover-color]
    dark:text-[--dark-text-color-secondary]
    dark:hover:text-[--dark-text-hover-color]
    cursor-pointer
  `,
  userPicWrapper: `
    relative
    ring-2
    ring-[--light-accent]
    dark:ring-[--dark-accent]
    rounded-full
  `,
};

export default styles;
