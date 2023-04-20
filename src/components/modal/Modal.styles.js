const styles = {
  modalContainer: `
    fixed
    top-0
    left-0
    h-full
    w-full
    flex
    justify-center
    items-center
    bg-[--light-modal-background-color]
    dark:bg-[--dark-modal-background-color]
    backdrop-blur-sm
  `,
  modalWindow: `
    container  
    flex
    flex-col
    lg:w-1/2
    rounded-md
    border
    border-[--light-border-color]  
    mx-4
    p-4
    bg-[--light-background-color-secondary] 
    dark:border-[--dark-border-color] 
    dark:bg-[--dark-background-color-secondary]
  `,
  modalHeadingContainer: `
    flex
    justify-between
    items-end
    border-b
    border-[--light-border-color]
    dark:border-[--dark-border-color]
    pb-2
  `,
  modalBodyContainer: `

  `,
};

export default styles;
