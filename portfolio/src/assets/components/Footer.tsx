import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import '../../index.css'

export default function Footer() {
    return (
        <footer>
            <span className='name'>Marina Mendonça</span>
            <div className='social-media'>
                <a href='https://www.linkedin.com/in/marina-l-mendon%C3%A7a/'>
                <LinkedinLogo size={32} color={"#5d483c"} className='social-item'/>
                </a>
                <a href='https://github.com/Marinalm15'>
                <GithubLogo size={32} color={"#5d483c"} className='social-item'/>
                </a>
            </div>
        </footer>
    )
}