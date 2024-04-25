import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import search_icon from '../Assets/search.png';
import logo from '../Assets/logo.png';
import './NavBarMC.css';
import logouticon from '../Assets/signout.png';
import { useDispatch, useSelector } from 'react-redux';
import * as UserService from '../../services/UserService';
import { resetUser } from '../../redux/slides/userSlide'
const NavBarMC = ({ children }) => {
    const user = useSelector((state) => state.user)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    console.log('user', user)
    const handleLogout = async () => {
        setLoading(true)
        await UserService.logoutUser()
        dispatch(resetUser())
        setLoading(false)
      }



    return (
        <>
            <nav className="navbar-student">
                <div className="header-student">
                    <h3><NavLink exact to="/mc_page" className="logo"><img src={logo} alt="Logo" /></NavLink></h3>
                </div>
                <div className="line-nav-student">
                </div>
                <div className="nav-content-student">
                    <ul className="nav-student-links">
                        <li><NavLink exact to='/mc_page' activeClassName="active">News</NavLink></li>
                        <li><NavLink exact to='/aboutMC' activeClassName="active">About us</NavLink></li>
                        <li><NavLink exact to='/termMC' activeClassName="active">Term</NavLink></li>
                        <li><NavLink exact to='/mc_page1' activeClassName="active">Contribution</NavLink></li>
                        {user?.name ? (
                            <li><NavLink exact to='/personal' activeClassName="active" className="link-hover">{user.name}</NavLink></li>
                        ) : (
                            <li><NavLink exact to='/personal' activeClassName="active" className="link-hover">Account</NavLink></li>
                        )
                        }
                        <div className='search-container-student'>
                            <div className="search-input-student">
                                <img src={search_icon} alt="" className="icon-search-student" />
                                <input type="search" placeholder="Search" />
                            </div>
                        </div>
                        <li><NavLink exact to='/login' onClick={handleLogout} activeClassName="active" className="link-hover">Logout</NavLink>
                            <img src={logouticon} alt="" className="admin-nav"></img>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="main-container">
                <div className="content-student">
                    {children}
                </div>
            </div>
        </>
    );
}

export default NavBarMC;
