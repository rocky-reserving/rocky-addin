import Drawer from './Drawer.rocky';
import Footer from './Footer.rocky';

const Layout = ({ children }) => {
  return (
    <div>
      <Drawer />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
