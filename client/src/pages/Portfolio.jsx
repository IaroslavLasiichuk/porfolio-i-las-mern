import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Footer from "../components/Footer";
import SEO from "./SEO";

const Portfolio = () => {
  return (
    <>
      <SEO
        title="Iaroslav Lasiichuk Portfolio || Website"
        description="My projects. Exploring the Power of JavaScript Frameworks and Libraries. Building Interactive Web Applications with JavaScript"
      />
      <Navbar />
      <Project />
      <Footer />
    </>
  );
};

export default Portfolio;
