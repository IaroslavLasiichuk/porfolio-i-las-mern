import Navbar from "../components/Navbar";
import SinglePost from "../components/SinglePost";
import Footer from "../components/Footer";
import SEO from "./SEO";

const Post = () => {
  return (
    <>
      <SEO
        title='Iaroslav Lasiichuk Portfolio || Website'
        description='Hi, everyone! I am a young aspiring Full Stack Web developer with a passion for technology and a strong desire to make a difference in the world'
      />
      <Navbar />
      <SinglePost />
      <Footer />
    </>
  );
};

export default Post;
