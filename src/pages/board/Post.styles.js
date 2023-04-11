const styles = {
  post: {
    container: `
      container
      flex
      flex-col
      gap-4
      p-4
      bg-neutral-900
      sm:self-stretch
      sm:border
      sm:border-neutral-700
      sm:rounded-md
      sm:bg-neutral-800
    `,
    headingContainer: `
      flex
      justify-between
      items-center
    `,
    author: `
      text-neutral-400
    `,
    bodyContainer: `
      h-full
      border-y
      border-neutral-700
      py-4
      px-2
    `,
    formContainer: `
      flex
      flex-col
      gap-4
    `,
    commentTextArea: `
      resize-none
      h-32
      bg-neutral-950
      focus:bg-neutral-950
      sm:bg-neutral-900
    `,
    formButtonContainer: `
      w-full
      sm:w-1/5
      ml-auto
    `,
  },
  postNotFound: {
    container: `
      flex
      p-8      
      sm:border
      sm:border-neutral-700
      sm:rounded-md
      sm:bg-neutral-800
    `,
  },
};

export default styles;
