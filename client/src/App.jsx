import React from "react"
import Layout from './pages/Layout.jsx'
import About from './pages/About.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'

import { Route, Routes, useNavigate} from 'react-router-dom'
function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch('http://localhost:3005/api/customers')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //     }); 
  // }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="portfolio" element={<Portfolio/>} />
        <Route path="blog" element={<Blog/>} />
        <Route path="contact" element={<Contact/>} />
      </Routes>
        {/* <ul>
        {data ? (
        <ul>
          {data.map((customer) => (
            <li key={customer.id}> {customer.firstName} {customer.lastName}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
      </ul> */}
    </>
  )
}

export default App
