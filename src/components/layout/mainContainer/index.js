import styles from './MainContainer.styles';

const MainContainer = ({ children }) => {
  return (
    <main className={styles.container}>
      {children}
    </main>
  );
};

export default MainContainer;
