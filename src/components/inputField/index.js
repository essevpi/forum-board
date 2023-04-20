import styles from './InputField.styles';

const InputField = ({
  value,
  name,
  placeholder,
  type,
  onInputChange,
  required,
  textArea,
  textAreaStyle,
}) => {
  /* Used to generate the returned tag based on prop */
  let CustomTag = textArea ? 'textarea' : 'input';

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={name}>
        {name.toUpperCase()}
      </label>
      <CustomTag
        value={value}
        name={name}
        placeholder={placeholder || null}
        type={type ? `${type}` : 'text'}
        onChange={onInputChange}
        required={required ? true : false}
        className={`${styles.input} ${
          textArea ? 'min-h-[100px] max-h-64' : ''
        } ${textAreaStyle ? textAreaStyle : ''}`}
      />
    </div>
  );
};

export default InputField;
