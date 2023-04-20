const styles = {
  post: {
    container: `
      container
      flex
      flex-col
      gap-4
      p-4      
      xs:self-stretch
      xs:border
      xs:rounded-md
      xs:border-[--light-border-color]
      dark:xs:border-[--dark-border-color]
      xs:bg-[--light-background-color-secondary]
      dark:xs:bg-[--dark-background-color-secondary]
    `,
    headingContainer: `
      flex
      flex-wrap
      items-center
    `,
    headingWrapper: `
      flex-1
      whitespace-nowrap
    `,
    actionsContainer: `
      flex
      gap-2
    `,
    buttonContainer: `
      flex
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
      xs:border
      xs:rounded-md
      xs:border-[--light-border-color]
      xs:bg-[--light-background-color-secondary]
      dark:xs:border-[--dark-border-color]
      dark:xs:bg-[--dark-background-color-secondary]
    `,
  },
};

export default styles;
