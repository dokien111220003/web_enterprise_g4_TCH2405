import React from 'react';
import {Link} from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <h3 className='logo'>Logo</h3>
                <ul className="nav-links">
                    <Link to = '/'><li>Home</li></Link>
                    <Link to = '/facultyadmin'><li>Faculty</li></Link>
                    <Link to = '/accadmin'><li>Account</li></Link>
                    <Link to = '/blogadmin'><li>Blog</li></Link>
                    <Link to = '/login'><li>Login</li></Link>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar