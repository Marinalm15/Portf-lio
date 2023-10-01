import '../../index.css'
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
    return (
    <header>
        <NavLink className='title' to={'/'}>Marina Mendonça</NavLink>
        <NavLink className='title' to={'/about'}>About</NavLink>
        <NavLink className='title' to={'/work'}>Work</NavLink>
    </header>
   ) 
}