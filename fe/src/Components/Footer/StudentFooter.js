import React from 'react';
import './StudentFooter.css';
import fb from '../Assets/facebook.png'
import twitter from '../Assets/twitter.png'
import ins from '../Assets/instagram.png'

const StudentFooter= () => {
    return (
        <div className='footer-student'>
            <div className='sb_footer-student section_padding'>
                <div className="sb_footer-student-links">
                    <div className="sb_footer-student-links-div">
                        <h4>For Faculty</h4>
                        <a href="/viewall">
                            <p>News</p>
                        </a>
                    </div>
                    <div className="sb_footer-student-links-div">
                        <h4>About our school</h4>
                        <a href="/about">
                            <p>About us</p>
                        </a>
                        <a href="/term">
                            <p>Terms and conditions</p>
                        </a>
                    </div>
                    <div className="sb_footer-student-links-div">
                        <h4>Submission</h4>
                        <a href="/student_submit">
                            <p>View all</p>
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
                    <div className="sb_footer-student-below-links">
                        <a href="/"><div><p>Terms & Conditions</p></div></a>
                        <a href="/"><div><p>Privacy</p></div></a>
                        <a href="/"><div><p>Security</p></div></a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default StudentFooter;