const styles = {
  container: `
    container
    flex
    flex-col
    self-stretch
    gap-4
    p-4
    xs:bg-[--light-background-color-secondary]
    xs:border
    xs:border-[--light-border-color]
    xs:rounded-md
    dark:xs:bg-[--dark-background-color-secondary]
    dark:xs:border-[--dark-border-color]    
  `,
  headingContainer: `
    flex
    flex-col
    gap-2
    xs:gap-0
    xs:flex-row    
    xs:items-end
    xs:justify-between
    w-full
    border-b
    border-[--light-border-color]
    dark:border-[--dark-border-color]
    pb-2
  `,
  heading: `    
    text-lg
    uppercase
    md:text-xl
    font-medium
    leading-none
    border-b
    border-[--light-border-color]
    dark:border-[--dark-border-color]
    pb-2
    xs:border-none
  `,
  actionsContainer: `
    flex
    justify-center
    gap-2
  `,
  buttonContainer: `
    w-full
    xs:min-w-fit
  `,
};

export default styles;
