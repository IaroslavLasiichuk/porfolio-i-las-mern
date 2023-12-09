import Navbar from "../components/Navbar";
import Post from "../components/Post";
import Footer from "../components/Footer";
import SEO from "./SEO";

const Blog = () => {
  return (
    <>
      <SEO
        title="Iaroslav Lasiichuk Portfolio || Website"
        description="Welcome to the blog! Learning programming can open up a world of opportunities. Here are some excellent resources to help you get started"
      />
      <Navbar />
      <Post />
      <Footer />
    </>
  );
};

export default Blog;
