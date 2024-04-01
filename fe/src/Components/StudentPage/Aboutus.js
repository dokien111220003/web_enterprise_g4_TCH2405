import React from 'react';
import './Aboutus.css';
import about from '../Assets/about.jpg';

const Aboutus = () => {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1>Our vision</h1>
            </div>
            <div className="about-subheader">
                <h1>Create a space where student have the ability to share the voice</h1>
            </div>
            <div className="about-content">
                <div className="vision">
                    <p>Our vision is to create a vibrant online platform where students can freely express their thoughts, ideas, and creativity through writing. We aim to provide a space where students feel empowered to share their voice, perspectives, and experiences with a wider audience.
                        Through our platform, we strive to foster a sense of community and collaboration among students from diverse backgrounds and disciplines. We believe in the power of storytelling and the importance of giving young voices a platform to be heard.</p>
                </div>
                <div className="box-about">
                    <div className="pink-box">
                        <h1>Our student</h1>
                        <p>Our students are at the heart of everything we do. They are the vibrant community of voices, ideas, and perspectives that make our platform thrive. Through their writing, our students share their unique stories, insights, and experiences, enriching our platform with diversity and creativity.</p>
                    </div>
                    <img src={about}></img>
                </div>
                <div className="box-about">
                    <img src={about}></img>
                    <div className="blue-box">
                        <h1>Our student</h1>
                        <p>Our students are at the heart of everything we do. They are the vibrant community of voices, ideas, and perspectives that make our platform thrive. Through their writing, our students share their unique stories, insights, and experiences, enriching our platform with diversity and creativity.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aboutus;
