import styles from './Button.styles';

const Button = ({ id, content, type, variant, canClick, onClick }) => {
  return (
    <button
      id={id || undefined}
      type={type ? type : 'submit'}
      className={styles.button[variant]}
      onClick={canClick ? onClick : undefined}
    >
      {content}
    </button>
  );
};

export default Button;
