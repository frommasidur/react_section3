import { CORE_CONCEPTS } from './CoreConceptsData.js'

function CoreConcept ({image, title, description}) {
    return (
        <li>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    )
}

export default function CoreConcepts () {
    return (
        <section id='core-concepts'>
        <h2>Core Concepts</h2>
            <ul>
                {CORE_CONCEPTS.map((conceptItem) => (
                <CoreConcept key={conceptItem.title} {...conceptItem}/>
                ))}
            </ul>
        </section>
    )
}