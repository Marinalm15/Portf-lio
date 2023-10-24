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
                <div className='work-box'>
                <img src={work.img} className='work-img' />
                <p>{work.title}</p>
                </div>
            )
        })}
        </div>
        <Footer />
        </>
    )
}