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
      min-h-min
      max-h-60
      pr-2
      scrollbar-thin
      scrollbar-track-neutral-200
      scrollbar-thumb-violet-700
      sm:scrollbar-track-neutral-300
      dark:scrollbar-track-neutral-900
      dark:scrollbar-thumb-lime-300
      dark:sm:scrollbar-track-neutral-800
    `,
    noComments: `
      ml-2
      italic
    `,
  },
  comment: {
    container: `
      flex
      flex-col
      rounded-md
      p-2
      bg-[--light-background-color-secondary]
      sm:bg-[--light-background-color-tertiary]
      shadow-inner
      dark:bg-[--dark-background-color-secondary]
      dark:sm:bg-[--dark-background-color-tertiary]
      dark:shadow-none         
    `,
    author: `
      font-bold
    `,
    body: `
      ml-2
      break-words
    `,
  },
};

export default styles;
