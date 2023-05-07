import React from "react"
import Navbar from './pages/Navbar.jsx'
import Home from './pages/Home.jsx'
import Project from './pages/Project.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './pages/Footer.jsx'
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
      <Navbar/>
      <Home/>
      <Project/>
      <Contact/>
      <Footer/>
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
