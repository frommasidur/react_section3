import Header from './components/Header/Header';
import { CORE_CONCEPTS } from './components/CoreConcepts/CoreConceptsData.js'
import CoreConcepts from './components/CoreConcepts/CoreConcepts.js';
import TabButton from './components/TabButton.js';

import { useState } from 'react';

function App() {
  const [selectedTopic, setSelectedTopic] = useState("Components");
  
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  let tabContent = <p>Please select a topic</p>

  if (selectedTopic) {
    tabContent = (
      <div id='tab-content'>
        <h3>{selectedTopic}</h3>
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
          <h1>Examples</h1>
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
            isSelected={selectedTopic==="props"}
            onSelect={()=>handleSelect("props")}
            >
              props
            </TabButton>
            <TabButton 
            isSelected={selectedTopic==="state"}
            onSelect={()=>handleSelect("state")}
            >
              state
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
