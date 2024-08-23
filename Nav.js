import React, { useState } from 'react';
import logo from '../images/Logo .svg'

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <a href='/' className='logo'>
            <img src={logo} alt='logo'/>
            </a>

            <div className='menu-icon' onClick={toggleMenu}>
                <div className='bar'> </div>
                <div className='bar'> </div>
                <div className='bar'> </div>
            </div>

            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li>
                    <a herf='/' >Home</a>
                </li>
                <li>
                    <a herf='/' >About</a>
                </li>
                <li>
                    <a herf='/' >Services</a>
                </li>
                <li>
                    <a herf='/' >Menu</a>
                </li>
                <li>
                    <a herf='/' >Reservations</a>
                </li>
                <li>
                    <a herf='/' >Order Online</a>
                </li>
                <li>
                    <a herf='/' >Login</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;