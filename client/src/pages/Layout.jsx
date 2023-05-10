import React from "react";
import Navbar from "./Navbar";
import About from "./About.jsx";
import Project from "./Project.jsx";
import Contact from "./Contact.jsx";
import Blog from "./Blog.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
        <Navbar />
        <About />
        <Project />
        <Blog />
        <Contact />
        <Footer />
      <Outlet/>
    </div>
  );
};

export default Layout;
