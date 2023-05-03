import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './pages/Navbar.jsx'
import Hero from './pages/Hero.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './pages/Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Navbar />
    <Hero />
    <Contact />
    <Footer />
  </React.StrictMode>,
)
