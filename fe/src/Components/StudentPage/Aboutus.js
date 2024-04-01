import React from 'react';
import './Aboutus.css';
import student from '../Assets/about.jpg';
import approach from '../Assets/about2.jpg';

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
                    <img src={student}></img>
                </div>
                <div className="box-about">
                    <img src={approach}></img>
                    <div className="blue-box">
                        <h1>Our Approach</h1>
                        <p>
                            At our platform, we take a student-centered approach to learning and engagement. Our goal is to provide a dynamic and inclusive space where students can explore, learn, and grow.
                            We believe in the power of experiential learning and hands-on experiences. Through interactive activities, projects, and discussions, we encourage students to actively participate in their own education and development.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aboutus;
