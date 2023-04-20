const styles = {
  commentList: {
    container: `
      border-b
      border-[--light-border-color]
      dark:border-[--dark-border-color]
      pb-4
    `,
    comments: `
      flex
      flex-col
      gap-2
      overflow-y-scroll
      scroll-smooth
      min-h-min
      max-h-60
      pr-2
      scrollbar-thin
      scrollbar-track-neutral-200
      scrollbar-thumb-violet-700
      xs:scrollbar-track-neutral-300
      dark:scrollbar-track-neutral-900
      dark:scrollbar-thumb-lime-300
      dark:xs:scrollbar-track-neutral-800
    `,
    noComments: `
      ml-2
      italic
    `,
  },
  comment: {
    container: `
      flex
      w-full
      rounded-md
      p-2
      bg-[--light-background-color-tertiary]
      xs:bg-[--light-background-color-tertiary]
      shadow-inner
      dark:bg-[--dark-background-color-tertiary]
      dark:xs:bg-[--dark-background-color-tertiary]
      dark:shadow-none         
    `,
    wrapper: `
      flex
      flex-col
      flex-1
      min-w-0
    `,
    author: `
      font-bold
    `,
    body: `
      ml-2
      break-words
    `,
    deleteIconContainer: `
      flex
      justify-end
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
