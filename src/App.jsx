import { useState , Fragment } from 'react'
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

  const [selectTopic, setSelectTopi] = useState();

  function handlerClick(selectContent) {
    console.log("selecteCONT ENTY >>>", selectContent);

    setSelectTopi(selectContent)
    console.log(selectTopic);
    // console.log(selectContent);

  }

  // 3 way 
  let buttonContent = <p>Please select the topics</p>;

  if (selectTopic) {

    buttonContent = (

      <div id="tab-content">


        <h3>{EXAMPLES[selectTopic].title}</h3>
        <p>{EXAMPLES[selectTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectTopic].code}</code>
        </pre>
      </div>
    );
  }


  console.log(EXAMPLES, selectTopic);
  
  return (
    <Fragment>
    <main>
      <div>
        {/* <ImgFunction /> */}
      


        {CORE_CONCEPTS.map((conceptItem, index) => (
          <CoreConcept
            key={conceptItem.image || index}
            img={conceptItem.Image}
            description={conceptItem.description}
          />
        ))}



        {/* {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.image} {...conceptItem} />
        ))}
 */}
        {/* <CoreConcept
          
          // img={viteLogo}
          img={CORE_CONCEPTS[1].Image}
          description={CORE_CONCEPTS[1].description}

        /> */}
        {/* <CoreConcept
          // img={reactLogo}
          img={CORE_CONCEPTS[0].Image}
          description={CORE_CONCEPTS[0].description}
        /> */}
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

          <TabButton isSelect={selectTopic === 'Components'} onSelect={() => { handlerClick('Components') }}>Components</TabButton>
          <TabButton isSelect={selectTopic === 'Jsx'} onSelect={() => { handlerClick('Jsx') }}>Jsx</TabButton>

        </menu>
        {/* {selectTopic} */}

        {/* s:3 video 56 and remove the componet in usestate then add the condition 
        if not selectTopic ? truthy hai too show this  <p>Please select the topics</p>
         other show my tab div "3 ways this is one 3 way in top " */}

        {/*   {!selectTopic ? (
          <p>Please select the topics</p>0
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectTopic].title}</h3>.
            <p>{EXAMPLES[selectTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectTopic].code}
              </code>
            </pre>
          </div>
        )} */}

        {/* this is a second way  */}
        {/*  {!selectTopic && <p>Please select the topics</p>} 
           {selectTopic && (
          <div id="tab-content">
            <h3>{EXAMPLES[selectTopic].title}</h3>.
            <p>{EXAMPLES[selectTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectTopic].code}
              </code>
            </pre>
          </div>
        )} */}
        {buttonContent}
      </section>

    </main>
    </Fragment>
  )
}


export default App


