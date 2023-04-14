const styles = {
  container: `
    container
    h-full
    flex 
    flex-col
    items-center
    border-y
    border-[--light-border-color]
    bg-[--light-background-color-secondary]
    sm:border
    sm:rounded-md
    dark:border-[--dark-border-color]
    dark:bg-[--dark-background-color-secondary]
  `,
  userInfoContainer: `
    flex
    sm:border
    sm:rounded-md
    sm:border-[--light-border-color]
    dark:sm:border-[--dark-border-color]
    p-4
    sm:bg-[--light-background-color-secondary]
    dark:sm:bg-[--dark-background-color-secondary]
  `,
  profileImageContainer: `
    ring-2
    ring-[--light-accent]
    dark:ring-[--dark-accent]
    rounded-full
  `
};

export default styles;
