import styles from './InputField.styles.js';

const InputField = ({ value, name, onInputChange }) => {
  return (
    <div className='flex flex-col'>
      <label className='p-1' htmlFor={name}>
        {/* {name.charAt(0).toUpperCase() + name.slice(1)} */}
        {name.toUpperCase()}
      </label>
      <input
        value={value}
        name={name}
        onChange={onInputChange}
        className={styles.input}
      />
    </div>
  );
};

export default InputField;
