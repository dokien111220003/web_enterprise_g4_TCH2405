import React from 'react';
import './AdminFooter.css';
import fb from '../Assets/facebook.png'
import twitter from '../Assets/twitter.png'
import ins from '../Assets/instagram.png'

const Footer= () => {
    return (
        <div className='footer'>
            <div className='sb_footer section_padding'>
                <div className="sb_footer-links">
                    <div className="sb_footer-links-div">
                        <h4>For Faculty</h4> 
                        <a href="/facultyadmin">
                            <p>Display All</p>
                        </a>
                        <a href="/add_faculty">
                            <p>Add new</p>
                        </a>
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>For Account</h4>
                        <a href="/hoho">
                            <p>Marketing Manager</p>
                        </a>
                        <a href="/hoho">
                            <p>Marketing Coordinator</p>
                        </a>
                        <a href="/hoho">
                            <p>Student</p>
                        </a>
                        <a href="/hoho">
                            <p>Guest</p>
                        </a>
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>For Blog</h4>
                        <a href="/topicadmin">
                            <p>Display All</p>
                        </a>
                        <a href="/add_topic">
                            <p>Add new</p>
                        </a>
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>Social Media</h4>
                        <div className="socialMedia">
                            <p><img src={fb} alt=""></img></p>
                            <p><img src={twitter} alt=""></img></p>
                            <p><img src={ins} alt=""></img></p>
                        </div>
                    </div>
                </div>
                
                <hr></hr>

                <div className="sb_footer-below">
                    <div className="sb_footer-copyright">
                        <p>
                            @{new Date().getFullYear()} School Magazine. All right reserved.
                        </p>
                    </div>
                    <div className="sb_footer-below-links">
                        <a href="/"><div><p>Terms & Conditions</p></div></a>
                        <a href="/"><div><p>Privacy</p></div></a>
                        <a href="/"><div><p>Security</p></div></a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;