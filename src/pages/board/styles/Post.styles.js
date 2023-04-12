const styles = {
  post: {
    container: `
      container
      flex
      flex-col
      gap-4
      p-4      
      sm:self-stretch
      sm:border
      sm:rounded-md
      sm:border-[--light-border-color]
      dark:sm:border-[--dark-border-color]
      sm:bg-[--light-background-color-secondary]
      dark:sm:bg-[--dark-background-color-secondary]
    `,
    headingContainer: `
      flex
      justify-between
      items-center
    `,
    author: `
      text-[--light-text-color-secondary]
      dark:text-[--dark-text-color-secondary]
    `,
    bodyContainer: `
      h-full
      border-y
      border-[--light-border-color]
      dark:border-[--dark-border-color]
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
      flex-col
      gap-4
      p-8
      sm:border
      sm:rounded-md
      sm:border-[--light-border-color]
      sm:bg-[--light-background-color-secondary]
      dark:sm:border-[--dark-border-color]
      dark:sm:bg-[--dark-background-color-secondary]
    `,
  },
};

export default styles;
