import React from 'react';
import './ViewAll.css';
import img3 from '../Assets/slider3.jpg';

const ViewAll = () => {

    return (
        <div className="viewall-container">
            <div className="viewall-sidebar">
                <div className="viewall-sidebar-header">
                    <h1>All Faculty</h1>
                </div>
                <div className="viewall-sidebar-content">
                    <p>Computer Science</p>
                    <p>Business</p>
                    <p>Law</p>
                    <p>Marketing</p>
                </div>
            </div>
            <div className="viewall-content">
                <div className="viewall-content-header">
                    <h1>All Contribution</h1>
                </div>
                <div className="viewall-content-contri">
                    <div className="viewall-box">
                        <div className="viewall-box-img">
                            <img src={img3}></img>
                        </div>
                        <div className="viewall-content-title">
                            <h1>The Impact of Social Media on Youth Mental Health</h1>
                        </div>
                        <div className="viewall-content-author">
                            <h3>By Paul Atreides</h3>
                        </div>
                    </div>
                    <div className="viewall-box">
                        <div className="viewall-box-img">
                            <img src={img3}></img>
                        </div>
                        <div className="viewall-content-title">
                            <h1>The Impact of Social Media on Youth Mental Health</h1>
                        </div>
                        <div className="viewall-content-author">
                            <h3>By Paul Atreides</h3>
                        </div>
                    </div>
                    <div className="viewall-box">
                        <div className="viewall-box-img">
                            <img src={img3}></img>
                        </div>
                        <div className="viewall-content-title">
                            <h1>The Impact of Social Media on Youth Mental Health</h1>
                        </div>
                        <div className="viewall-content-author">
                            <h3>By Paul Atreides</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewAll;
