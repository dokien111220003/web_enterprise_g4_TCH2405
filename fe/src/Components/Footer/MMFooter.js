import React from 'react';
import './StudentFooter.css';
import fb from '../Assets/facebook.png'
import twitter from '../Assets/twitter.png'
import ins from '../Assets/instagram.png'

const MMFooter= () => {
    return (
        <div className='footer-student'>
            <div className='sb_footer-student section_padding'>
                <div className="sb_footer-student-links">
                    <div className="sb_footer-student-links-div">
                        <h4>For Blog</h4>
                        <a href="/viewallMM">
                            <p>View Blog</p>
                        </a>
                    </div>
                    <div className="sb_footer-student-links-div">
                        <h4>For Selection</h4>
                        <a href="/marketing_manager_main/contribution">
                            <p>Selection</p>
                        </a>
                    </div>
                    <div className="sb_footer-student-links-div">
                        <h4>About</h4>
                        <a href="/aboutMM">
                            <p>About Us</p>
                        </a>
                        <a href="/termMM">
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

export default MMFooter;