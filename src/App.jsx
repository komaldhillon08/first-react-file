import { useState , Fragment } from 'react'
import './App.css'
//CoreConcepts.jsx components 
import CoreConcepts from './components/CoreConcepts.jsx'

import { EXAMPLES } from './data.js';
// examples jsx components
import Examples from './components/examples.jsx'

// import img 
// import reactImg from './assets/react.svg'

const reactDescriptions = ["komal", "preet", "singh", " dhillon"]

function reactRandomImt(max) {
  return Math.floor(Math.random() * (max + 1));
}
const description = reactDescriptions[reactRandomImt(4)];


/* function ImgFunction() {
  return (
    <header>
      <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
    </header>
  );
} */

// create the new component 




function App() {
  const [count, setCount] = useState(0)

  
  
  return (
    <Fragment>
    <main>
      <div>
      <CoreConcepts />

      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        {description} Click on the Vite and React logos to learn more
      </p>

      <span>{EXAMPLES.Components.title}</span>

      <span>{EXAMPLES.Jsx.title}</span>

     
      <Examples />
    </main>
    </Fragment>
  )
}


export default App


