const styles = {
  container: `
    container
    flex
    flex-col
    self-stretch
    gap-4
    p-4
    sm:bg-[--light-background-color-secondary]
    sm:border
    sm:border-[--light-border-color]
    sm:rounded-md
    dark:sm:bg-[--dark-background-color-secondary]
    dark:sm:border-[--dark-border-color]    
  `,
  headingContainer: `
    flex    
    items-end
    justify-between
    w-full
    border-b
    border-[--light-border-color]
    dark:border-[--dark-border-color]
    pb-4
  `,
  heading: `    
    text-md
    md:text-xl
    font-medium
    leading-none
  `,
  buttonContainer: `
    sm:w-1/5
  `,
};

export default styles;
