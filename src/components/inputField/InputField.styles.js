const styles = {
  container: `
    flex
    flex-col
  `,
  label: `
    ml-1
    text-md
    font-medium    
  `,
  input: `
    w-full       
    outline-none    
    border-2
    border-transparent
    rounded-md
    p-2
    text-[--light-text-color-secondary]
    bg-[--light-input-background]
    focus:bg-[--light-input-focus-background]
    focus:border-[--light-accent]
    dark:text-[--dark-text-color]
    dark:bg-[--dark-input-background]
    dark:focus:bg-[--dark-input-focus-background]
    dark:focus:border-[--dark-accent]
    transition-colors
  `,
};

export default styles;
