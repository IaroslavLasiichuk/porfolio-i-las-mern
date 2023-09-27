import Navbar from "../components/Navbar";
import Dash from "../components/Dash";
import Footer from "../components/Footer";
import SEO from './SEO';

const Dashboard = () => {
  return (
    <>
      <SEO
        title='Iaroslav Lasiichuk Portfolio || Website'
        description='Hi, everyone! I am a young aspiring Full Stack Web developer with a passion for technology and a strong desire to make a difference in the world'
        canonical='https://www.lamur.us'
      />
      <Navbar />
      <Dash />
      <Footer />
    </>
  );
};

export default Dashboard;