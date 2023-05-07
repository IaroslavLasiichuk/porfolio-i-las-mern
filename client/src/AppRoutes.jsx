import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Navbar from './pages/Navbar.jsx';
import Home from './pages/Home.jsx';
import Project from './pages/Project.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './pages/Footer.jsx';

const AppRoutes = () => {
  return (
      <BrowserRouter>
          <App>
      <Routes>
          <Route path="/" render={() => <Home />} />
          <Route path="/project" render={() => <Project />} />
          <Route path="/contact" render={() => <Contact />} />
      </Routes>
      <Navbar />
              <Footer />
              </App>
    </BrowserRouter>
  );
};

export default AppRoutes;
