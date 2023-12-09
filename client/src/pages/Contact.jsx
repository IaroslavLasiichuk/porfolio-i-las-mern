import Navbar from "../components/Navbar";
import Form from "../components/Form";
import Footer from "../components/Footer";
import SEO from './SEO';

const Contact = () => {
  return (
    <>
     <SEO
        title='Iaroslav Lasiichuk Portfolio || Website'
        description='Have a Question? Contact Me. Would you like to contact me please fill out the info below and I will be in touch. '
      />
      <Navbar />
      <Form />
      <Footer />
    </>
  );
};

export default Contact;
