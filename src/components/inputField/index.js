import styles from './InputField.styles';

const InputField = ({
  value,
  name,
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
