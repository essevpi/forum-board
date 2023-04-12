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
      flex-col
      w-full
      p-4
      rounded-md
      bg-[--light-background-color-tertiary]
      hover:bg-[--light-background-hover-color]
      dark:bg-[--dark-background-color-tertiary]
      dark:hover:bg-[--dark-background-hover-color]
      transition-all
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
  },
};

export default styles;
