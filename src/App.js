import Header from './components/Header/Header';

import CoreConcepts from './components/CoreConcepts/CoreConcepts.js';
import Examples from './components/Examples/Examples.js';

function App() {
  

  return (
    <div>
      <Header/>
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
