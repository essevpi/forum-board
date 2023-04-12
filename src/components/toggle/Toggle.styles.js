const styles = {
  label: `
    relative
    inline-flex
    items-center
    cursor-pointer
  `,
  input: `
    sr-only peer
  `,
  toggle: `
    w-11
    h-6
    bg-[--light-secondary-button-color]
    peer-focus:outline-none
    rounded-full
    peer    
    peer-checked:after:translate-x-full
    peer-checked:after:border-red-500
    after:content-['']
    after:absolute
    after:top-[2px]
    after:left-[2px]
    after:bg-white    
    after:border-[--light-border-color]
    after:border
    after:rounded-full
    after:h-5
    after:w-5
    after:transition-all
    peer-checked:bg-neutral-600
    peer-focus:ring-2
    peer-focus:ring-[--light-accent]
    dark:peer-checked:bg-[--dark-secondary-button-color]
    dark:peer-checked:after:border-[--dark-background-color-secondary]    
    dark:after:bg-[--dark-background-color-secondary]
    dark:peer-focus:ring-[--dark-accent]
  `,
  moonIcon: `
    hidden absolute top-[4px] left-[4px] text-[--dark-accent] peer peer-checked:block peer-hover:text-[--dark-accent-hover] transition-all duration-900
  `,
  sunIcon: `
    absolute top-[4px] left-[24px] text-[--light-accent] peer peer-checked:hidden peer-hover:text-[--light-accent-hover] transition-all duration-900
  `,
};

export default styles;
