import MiniDrawer from './Drawer.component';
import Footer from './Footer.component';

const Layout = ({ children }) => {
  return (
    <div>
      <MiniDrawer />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
