import React from 'react';
import {Link} from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <h3><Link to="/" className="logo">Logo</Link></h3>
                <ul className="nav-links">
                    <Link to = '/facultyadmin'><a>Faculty</a></Link>
                    <Link to = '/accadmin'><a>Account</a></Link>
                    <Link to = '/blogadmin'><a>Blog</a></Link>
                    <Link to = '/login'><a>Login</a></Link>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar