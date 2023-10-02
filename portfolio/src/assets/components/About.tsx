import '../../index.css'
import Footer from './Footer'
import Header from './Header'

export default function About() {
    return (
        <>
        <Header />
        <h2 className='about-title'>A B O U T</h2>
        <div className='about-wraper'>
            <img src="./public/Imagens/foto.jpg" className='foto'/>
            <div>
                <p className='about-p'>Passionate about web development and contributing to projects that turn ideas into incredible digital experiences. My commitment to continuously learn and grow forms the foundation of my journey to build a successful career.</p>
                <p className='about-p'>I am actively seeking an exciting opportunity as a front-end developer, where I can apply my passion for interface design and technical skills to create engaging and functional web experiences.</p>
                <p className='about-p'>I am eager to collaborate with talented teams, tackle new challenges, and make a meaningful contribution to the company's success. I am excited to be part of an inspiring team and learn from experienced professionals as I continue my journey in the thrilling world of front-end development.</p>
            </div>
        </div>    
        <Footer />
        </>
    )
}