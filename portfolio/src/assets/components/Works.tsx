import '../../index.css'
import { works } from '../helpers/work-boxes';
import Footer from "./Footer";
import Header from "./Header";

export default function Works() {
    return (
        <>
        <Header />
        <div className='work-container'>
        {works.map((work) => {
            return (
                <a href={work.url} className='works-title'>
                <div className='work-box'>
                <img src={work.img} className='work-img' />
                <p>{work.title}</p>
                </div>
               </a>
            )
        })}
        </div>
        <Footer />
        </>
    )
}