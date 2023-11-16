import { CursorClick, GithubLogo } from '@phosphor-icons/react';
import '../../index.css'
import Footer from "../Footer";
import Header from "../Header";

export default function Work() {
    return (
        <>
        <Header />
        <div className='work-container'>
        <img src="Imagens/mapa_mundi.jpg" className="work-image"/>
            <div>
                <h3 className="work-title">About the Project</h3>
                <p></p>
            </div>
            <div>
                <a href="https://marinalm15.github.io/Calculadora/" className="work-links">
                    <CursorClick size={32} color={"#5d483c"}/>
                    <p>Click here to see the project!</p>
                </a>
                <a href="https://github.com/Marinalm15/Calculadora" className="work-links">
                    <GithubLogo size={32} color={"#5d483c"} className='social-item'/>
                    <p>Click here to see the repository</p>
                </a>
            </div>
        </div>
        <Footer />
        </>
    )
}