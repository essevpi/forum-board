import styles from './Button.styles.js';

const Button = ({ text, type, variant, canClick, onClick }) => {
  return (
    <button
      type={type ? type : 'submit'}
      className={styles.button[variant]}
      onClick={canClick ? onClick : undefined}
    >
      {text}
    </button>
  );
};

export default Button;
