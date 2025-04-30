import { CORE_CONCEPTS } from '../data.js'        
import CoreConcept from '../components/header.jsx'


export default function CoreConcepts() {
    return (
        <div>
            {/* <ImgFunction /> */}



            {CORE_CONCEPTS.map((conceptItem, index) => (
                <CoreConcept
                    key={conceptItem.image || index}
                    img={conceptItem.Image}
                    des={conceptItem.description}
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
    );
}