import reactImage from '../../assets/react-core-concepts.png'
import './Header.css';

export default function Header() {
    return (
        <header>
            <img src={reactImage} alt='Stylized react image'/>
            <h1>React Essentials</h1>
            <p>React concepts I will need for almost any app I am going to build!</p>
        </header>
    );
}