import { EnvelopeSimple, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import '../../index.css'

export default function Footer() {
    return (
        <footer>
            <span className='name'>Marina Mendonça</span>
            <div className='social-media'>
                <LinkedinLogo size={32} color={"#5d483c"} className='social-item'/>
                <GithubLogo size={32} color={"#5d483c"} className='social-item'/>
                <EnvelopeSimple size={32} color={"#5d483c"} className='social-item'/>
            </div>
        </footer>
    )
}