import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from "react"
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('http://localhost:3005/api/customers')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      }); 
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <ul>
        {data ? (
        <ul>
          {data.map((customer) => (
            <li key={customer.id}> {customer.firstName} {customer.lastName}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
      </ul>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
