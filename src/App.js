import Header from './components/Header/Header';
import { CORE_CONCEPTS } from './components/CoreConcepts/CoreConceptsData.js'
import CoreConcepts from './components/CoreConcepts/CoreConcepts.js';
import TabButton from './components/TabButton.js';

import { useState } from 'react';
import { EXAMPLES } from './components/Examples/ExamplesData.js';

function App() {
  const [selectedTopic, setSelectedTopic] = useState("Components");
  
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  let tabContent = <p>Please select a topic</p>

  if (selectedTopic) {
    tabContent = (
      <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    )
  }

  return (
    <div>
      <Header/>
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcepts key={conceptItem.title} {...conceptItem}/>
            ))}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton 
            isSelected={selectedTopic==="Components"}
            onSelect={()=>handleSelect("Components")}
            >
              Components
            </TabButton>
            <TabButton 
            isSelected={selectedTopic==="JSX"}
            onSelect={()=>handleSelect("JSX")}
            >
              JSX
            </TabButton>
            <TabButton 
            isSelected={selectedTopic==="Props"}
            onSelect={()=>handleSelect("Props")}
            >
              Props
            </TabButton>
            <TabButton 
            isSelected={selectedTopic==="State"}
            onSelect={()=>handleSelect("State")}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
