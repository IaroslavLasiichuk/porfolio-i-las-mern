import Navbar from "../components/Navbar";
import Post from "../components/Post";
import Footer from "../components/Footer";
import SEO from "./SEO";

const Blog = () => {
  return (
    <>
      <SEO
        title="Iaroslav Lasiichuk Portfolio || Website"
        description="Hi, everyone! I am a young aspiring Full Stack Web developer with a passion for technology and a strong desire to make a difference in the world"
      />
      <Navbar />
      <Post />
      <Footer />
    </>
  );
};

export default Blog;
