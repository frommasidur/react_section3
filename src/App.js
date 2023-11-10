import Header from './components/Header/Header';
import { CORE_CONCEPTS } from './components/CoreConcepts/CoreConceptsData.js'
import CoreConcepts from './components/CoreConcepts/CoreConcepts.js';

function App() {
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
      </main>
    </div>
  );
}

export default App;
