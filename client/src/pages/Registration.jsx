import Navbar from "../components/Navbar";
import Signup from "../components/Signup";
import SEO from "./SEO";

const Registration = () => {
  return (
    <>
      <SEO
        title="Iaroslav Lasiichuk Portfolio || Website"
        description="Hi, everyone! I am a young aspiring Full Stack Web developer with a passion for technology and a strong desire to make a difference in the world"
        canonical="https://www.lamur.us"
      />
      <Navbar />
      <Signup />
    </>
  );
};

export default Registration;
