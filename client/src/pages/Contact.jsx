import Navbar from "../components/Navbar";
import Form from "../components/Form";
import Footer from "../components/Footer";
import SEO from './SEO';

const Contact = () => {
  return (
    <>
     <SEO
        title='Iaroslav Lasiichuk Portfolio || Website'
        description='Hi, everyone! I am a young aspiring Full Stack Web developer with a passion for technology and a strong desire to make a difference in the world'
      />
      <Navbar />
      <Form />
      <Footer />
    </>
  );
};

export default Contact;
