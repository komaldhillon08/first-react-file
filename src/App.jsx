import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// crate the componnent folder and run di function header.jsx file 
import CoreConcept from './components/header.jsx'
// add new data,js and import file or code 
import { CORE_CONCEPTS } from './data.js'
import { EXAMPLES } from './data.js';


// add tabButton components 
import TabButton from './components/tabButton/tabButton.jsx'
import './components/tabButton/tabButton.css'


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

  const [selectTopic, setSelectTopi] = useState('Components');

  function handlerClick(selectContent) {
    console.log("selecteCONTENTY >>>", selectContent);

    setSelectTopi(selectContent)
    console.log(selectTopic);



    // console.log(selectContent);

  }
  console.log(EXAMPLES, selectTopic);

  return (
    <>
      <div>
        {/* <ImgFunction /> */}
        <CoreConcept

          // img={viteLogo}
          img={CORE_CONCEPTS[1].Image}

        /*    title = "components"
           description = "this is ui" */
        />
        <CoreConcept
          // img={reactLogo}
          img={CORE_CONCEPTS[0].Image}

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

      <span>{EXAMPLES.Components.title}</span>

      <span>{EXAMPLES.Jsx.title}</span>

      <section id="examples">
        <h2>Examples</h2>
        <menu id="btn">
          {/*  <TabButton onSelect={handlerClick}>Components</TabButton>  selectContent
          <TabButton>secondComponents</TabButton> */}

          <TabButton onSelect={() => { handlerClick('Components') }}>Components</TabButton>
          <TabButton onSelect={() => { handlerClick('Jsx') }}>Jsx</TabButton>

        </menu>
        {/* {selectTopic} */}
        <div id="tab-content">
          <h3>{EXAMPLES[selectTopic].title}</h3>.
          <p>{EXAMPLES[selectTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectTopic].code}
            </code>
          </pre>
        </div>
      </section>

    </>
  )
}


export default App


