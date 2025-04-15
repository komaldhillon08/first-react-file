import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import img 
// import reactImg from './assets/react.svg'

const reactDescriptions = ["komal", "preet" , "singh" , " dhillon"]

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

function CoreConcept(props){
  return(
    <a>
      <img src={props.img} alt="" className="logo react"/>
    {/*   <h3>komal</h3>
      <p>descretion</p> */}
    </a>
  );
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <ImgFunction /> */}
        <CoreConcept 
          img={viteLogo}
       /*    title = "components"
          description = "this is ui" */
        />
        <CoreConcept 
          img={reactLogo}

        />
       {/*   <CoreConcept 
          img={reactLogo}

        /> */}

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
      
    
    </>
  )
}

 
export default App


