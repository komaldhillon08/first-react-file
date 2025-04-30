// add tabButton components 
import TabButton from './tabButton/tabButton.jsx'
import './tabButton/tabButton.css'
import { useState } from 'react';
import { CORE_CONCEPTS } from '../data.js'



export default function Examples() {
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


  // console.log(EXAMPLES, selectTopic);

  return (
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
  );
}