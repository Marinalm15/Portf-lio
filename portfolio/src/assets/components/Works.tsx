import { NavLink } from 'react-router-dom';
import '../../index.css'
import { works } from '../helpers/work-boxes';
import Footer from "./Footer";
import Header from "./Header";

export default function Work() {
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