import Navbar from './navbar';
import MainContainer from './mainContainer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <MainContainer>{children}</MainContainer>
    </>
  );
};

export default Layout;
