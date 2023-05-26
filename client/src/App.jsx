import React from "react"
import Layout from './pages/Layout.jsx'
import About from './pages/About.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<About/>} ></Route>
        <Route path="portfolio" element={<Portfolio/>} />
        <Route path="blog" element={<Blog/>} />
        <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
  )
}
export default App
