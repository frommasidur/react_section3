import TabButton from '../TabButton.js';

import { useState } from 'react';
import { EXAMPLES } from './ExamplesData.js';

export default function Examples() {
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
    
    let topics = Object.keys(EXAMPLES);

    return (
        <section id='examples'>
            <h2>Examples</h2>
            <menu>
            {topics.map((topic, index) => (
                <TabButton
                    key={index}
                    isSelected={selectedTopic === topic}
                    onSelect={() => handleSelect(topic)}
                    >
                    {topic}
                </TabButton>
            ))}
            </menu>
            {tabContent}
        </section>
    )
}
