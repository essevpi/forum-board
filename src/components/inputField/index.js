import styles from './InputField.styles.js';

const InputField = ({
  value,
  name,
  type,
  onInputChange,
  required,
  textArea,
  textAreaStyle
}) => {
  let CustomTag = textArea ? 'textarea' : 'input';

  return (
    <div className='flex flex-col'>
      <label className='text-md font-medium ml-1' htmlFor={name}>
        {/* {name.charAt(0).toUpperCase() + name.slice(1)} */}
        {name.toUpperCase()}
      </label>
      <CustomTag
        type={type ? `${type}` : 'text'}
        required={required ? true : false}
        value={value}
        name={name}
        onChange={onInputChange}
        className={`${styles.input} ${textArea ? 'max-h-64' : ''} ${
          textAreaStyle ? textAreaStyle : ''
        }`}
      />
    </div>
  );
};

export default InputField;
