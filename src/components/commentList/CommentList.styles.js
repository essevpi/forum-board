const styles = {
  commentList: {
    container: `
      border-b
      border-neutral-700
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
      scrollbar-track-neutral-800
      scrollbar-thumb-lime-300
      sm:scrollbar-track-neutral-900
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
      p-2
      rounded-md
      bg-neutral-800
      sm:bg-neutral-700      
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
