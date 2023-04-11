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
      bg-neutral-600
      border
      border-transparent
      transition
      duration-300
      hover:bg-neutral-700
      hover:border-lime-300
    `,
    author: `
      text-s
      text-neutral-300
      font-light
    `,
    body: `
      truncate
      ...
    `,
  },
};

export default styles;
