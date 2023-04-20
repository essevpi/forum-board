const styles = {
  postList: {
    container: `
      w-full
      flex
      min-h-0
      flex-col
      items-center
      gap-2
    `,
  },
  post: {
    container: `
      flex
      w-full
      p-4
      rounded-md
      bg-[--light-background-color-tertiary]
      hover:bg-[--light-background-hover-color]
      dark:bg-[--dark-background-color-tertiary]
      dark:hover:bg-[--dark-background-hover-color]
      transition-all
    `,
    wrapper: `
      flex
      flex-col
      flex-1
      min-w-0
    `,
    author: `
      text-sm
      text-[--light-text-color-secondary]
      dark:text-[--dark-text-color-secondary]
    `,
    body: `
      truncate
      ...
    `,
    deleteIconContainer: `
      flex
      items-center
      ml-2
    `,
    deleteIconWrapper: `
      rounded-md
      p-1
      bg-[--light-background-color-secondary]
      hover:bg-[--light-background-color]
      hover:text-[--light-accent]
      dark:bg-[--dark-background-color-secondary]
      dark:hover:bg-[--dark-background-color]
      dark:hover:text-[--dark-accent]
      transition-all
      cursor-pointer
    `,
    deleteIcon: `
      text-[1.25rem]
    `,
  },
};

export default styles;
