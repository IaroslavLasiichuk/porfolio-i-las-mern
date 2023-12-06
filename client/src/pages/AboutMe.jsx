import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import SEO from './SEO';

const AboutMe = () => {
  return (
    <>
       <SEO
        title='Iaroslav Lasiichuk Portfolio || Website'
        description='Hi, everyone! I am a young aspiring Full Stack Web developer with a passion for technology and a strong desire to make a difference in the world'
        canonical='https://www.lamur.us'
      />
      <Navbar />
      <About />
      <Footer />
    </>
  );
};

export default AboutMe;
