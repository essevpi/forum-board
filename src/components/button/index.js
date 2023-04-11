import styles from './Button.styles';

const Button = ({ content, type, variant, canClick, onClick }) => {
  return (
    <button
      type={type ? type : 'submit'}
      className={styles.button[variant]}
      onClick={canClick ? onClick : undefined}
    >
      {content}
    </button>
  );
};

export default Button;
