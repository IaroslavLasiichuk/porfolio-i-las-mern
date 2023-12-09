import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Footer from "../components/Footer";
import SEO from "./SEO";

const Portfolio = () => {
  return (
    <>
      <SEO
        title="Iaroslav Lasiichuk Portfolio || Website"
        description="Hi, everyone! I am a young aspiring Full Stack Web developer with a passion for technology and a strong desire to make a difference in the world"
      />
      <Navbar />
      <Project />
      <Footer />
    </>
  );
};

export default Portfolio;
