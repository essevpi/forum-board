const styles = {
  nav: `
    w-full
  `,
  ul: `
    flex
    px-1
    pt-1
    border-b
    border-b-[--light-border-color]
    dark:border-b-[--dark-border-color]
    xs:rounded-t-md 
    bg-[--light-background-color-tertiary]   
    dark:bg-[--dark-background-color-tertiary]
  `,
  li: `
    w-full
    flex
    justify-center
    border-b
    border-transparent
    rounded-t-md
    p-4
    bg-[--light-background-color-tertiary]
    dark:bg-[--dark-background-color-tertiary]
    hover:bg-[rgba(155,155,155,.1)]
    dark:hover:bg-[rgba(0,0,0,.15)]
    cursor-pointer
    transition-colors
  `,
  selected: `
    w-full
    flex
    justify-center
    relative
    rounded-t-md
    p-4
    cursor-pointer
    text-[--light-accent]
    dark:text-[--dark-accent]
    bg-[--light-background-hover-color]
    dark:bg-[--dark-background-color-selected]
  `,
  underline: `
    absolute
    -bottom-px
    left-0
    right-0
    h-[2px]
    bg-[--light-accent]
    dark:bg-[--dark-accent]
  `,
};

export default styles;
