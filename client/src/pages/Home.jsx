import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from './SEO';

const Home = () => {
  return (
    <>
      <SEO
        title='Iaroslav Lasiichuk Portfolio || Website'
        description='Hi, everyone! I am a young aspiring Full Stack Web developer with a passion for technology and a strong desire to make a difference in the world'
      />
      <Navbar />
      <Header />
      <Footer />
    </>
  );
}

export default Home;
