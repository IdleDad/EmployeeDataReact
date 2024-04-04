import { useState } from 'react'
import hamburger from './assets/react.svg'
import yologo from '/vite.svg'
import Title from './components/title.jsx'
import data from'./data/data.js'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
console.log();
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={yologo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={hamburger} className="logo react" alt="React logo" />
        </a>
      </div>
      <Title firstName={data[0].firstName} lastName={data[0].lastName}/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
