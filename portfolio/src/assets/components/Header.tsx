import '../../index.css'
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
    <header>
        <NavLink className='title' to={'/'}>Marina Mendonça</NavLink>
        <NavLink className='title' to={'/about'}>About</NavLink>
        <NavLink className='title' to={'/works'}>Works</NavLink>
        <NavLink className='title' to={'/contacts'}>Contacts</NavLink>
    </header>
   ) 
}