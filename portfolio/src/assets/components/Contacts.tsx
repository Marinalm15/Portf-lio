import '../../index.css'
import { DeviceMobile, EnvelopeSimple, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import Footer from "./Footer";
import Header from "./Header";

export default function Contacts() {
    return (
        <>
        <Header />
        <div className='contact-box'>
        <div className='contact-container'>
            <div className='contact'>
                <EnvelopeSimple size={32} color={"#5d483c"} className='social-item'/>
                <p>marinalm15@hotmail.com</p>
            </div>
            <div className='contact'>
                <DeviceMobile size={32} color={"#5d483c"} className='social-item'/>
                <p>PT: +351 911 591 341</p>
                <p>BR: +55 99453 3725</p>
            </div>
            <div className='contact'>
                <a href='https://www.linkedin.com/in/marina-l-mendon%C3%A7a/'>
                <LinkedinLogo size={32} color={"#5d483c"} className='social-item'/>
                    <p className='contact-text'>Linledin</p>
                </a>
            </div>
            <div className='contact'>
                <a href='https://github.com/Marinalm15'>
                <GithubLogo size={32} color={"#5d483c"} className='social-item'/>
                    <p className='contact-text'>Github</p>
                </a>
            </div>
        </div>
        <img className='logo-contact' src='public/Imagens/logo.png'/>
        </div>
        <Footer />
        </>
    )
}