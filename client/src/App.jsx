import React from "react"
import './App.css'

function App() {
  const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch('http://localhost:3005/api/customers')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //     }); 
  // }, []);

  return (
    <>
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
