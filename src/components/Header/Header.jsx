import reactImage from '../../assets/react-core-concepts.png';
import './Header.css'

const reactDescription = ['Fundamental','Core','Crutial']
const randomIndex = Math.floor(Math.random() * reactDescription.length);
export default function Header() {
    console.log('redering header component');

    const description = reactDescription[randomIndex];
    return (
        <header>
            <img src={reactImage} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    )
}
