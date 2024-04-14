import React from 'react';
import './StudentFooter.css';
import fb from '../Assets/facebook.png'
import twitter from '../Assets/twitter.png'
import ins from '../Assets/instagram.png'

const MCFooter= () => {
    return (
        <div className='footer-student'>
            <div className='sb_footer-student section_padding'>
                <div className="sb_footer-student-links">
                    <div className="sb_footer-student-links-div">
                        <h4>For Blog</h4>
                        <a href="/viewallMC">
                            <p>News</p>
                        </a>
                    </div>
                    <div className="sb_footer-student-links-div">
                        <h4>For Contribution</h4>
                        <a href="/mc_page1">
                            <p>First Hand Contribution </p>
                        </a>
                        <a href="/mc_page2">
                            <p>Final Hand Contribution </p>
                        </a>
                    </div>
                    <div className="sb_footer-student-links-div">
                        <h4>About</h4>
                        <a href="/aboutMC">
                            <p>About Us</p>
                        </a>
                        <a href="/termMC">
                            <p>Term</p>
                        </a>
                    </div>
                    <div className="sb_footer-student-links-div">
                        <h4>Social Media</h4>
                        <div className="socialMedia">
                            <p><img src={fb} alt=""></img></p>
                            <p><img src={twitter} alt=""></img></p>
                            <p><img src={ins} alt=""></img></p>
                        </div>
                    </div>
                </div>
                
                <hr></hr>

                <div className="sb_footer-student-below">
                    <div className="sb_footer-student-copyright">
                        <p>
                            @{new Date().getFullYear()} School Magazine. All right reserved.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MCFooter;