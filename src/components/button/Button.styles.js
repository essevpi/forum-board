const styles = {
  button: {
    primary: `
      w-full
      rounded-md  
      p-1      
      font-bold
      uppercase              
      bg-[--light-accent]
      text-[--light-text-color]
      hover:bg-[--light-accent-hover]
      dark:bg-[--dark-accent]
      dark:text-[--light-text-color]
      dark:hover:bg-[--dark-accent-hover]
      transition-all
    `,
    'primary-rounded': `
      w-full
      p-1
      text-black
      font-bold
      uppercase
      rounded-full
      bg-[--light-accent]
      text-[--light-text-color]
      hover:bg-[--light-accent-hover]
      dark:bg-[--dark-accent]
      dark:text-[--light-text-color]
      dark:hover:bg-[--dark-accent-hover]      
      transition-all
    `,
    secondary: `
      w-full
      p-1
      font-bold
      uppercase     
      rounded-md       
      bg-[--light-secondary-button-color]
      hover:bg-[--light-secondary-button-hover-color]
      dark:bg-[--dark-secondary-button-color]
      dark:hover:bg-[--dark-secondary-button-hover-color]
      transition-all
    `,
  },
};

export default styles;
