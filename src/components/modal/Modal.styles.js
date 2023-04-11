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
  bg-[--modal-background-color]
  backdrop-blur-sm
  `,
  modalWindow: `
  container  
  flex
  flex-col
  gap-2
  mx-4
  sm:mx-0
  p-4
  rounded-md   
  bg-neutral-800   
  `,
  modalHeadingContainer: `
    flex
    justify-between
    items-end
    border-b
    border-neutral-700
    pb-2
  `,
};

export default styles;
