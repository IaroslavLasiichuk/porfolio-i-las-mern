import Navbar from './Navbar'
import About from './About.jsx'
import Footer from './Footer.jsx'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <About />
      <Footer />
      <Outlet />
    </div>
  );
};

export default Layout;
