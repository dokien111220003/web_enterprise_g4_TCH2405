import React from 'react';
import './ViewAll.css';
import img3 from '../Assets/slider3.jpg';
import search_icon from '../Assets/search.png';

const ViewAll = () => {

    return (

            <div className="viewall-container">
                <div class="viewall-sidebar">
                    <div class="viewall-sidebar-header">
                        <h1>All Faculty</h1>
                    </div>
                    <div class="viewall-sidebar-content">
                        <a href="#" class="filter-link">Computer Science</a>
                        <a href="#" class="filter-link">Business</a>
                        <a href="#" class="filter-link">Law</a>
                        <a href="#" class="filter-link">Marketing</a>
                    </div>
                </div>

                <div className="viewall-content">
                    <div className="viewall-content-header">
                        <h1>All Contribution</h1>
                        <div className='search-container-viewall'>
                            <div className="search-input-viewall">
                                <img src={search_icon} alt="" className="icon-search-viewall" />
                                <input type="search" placeholder="Search" />
                            </div>
                        </div>
                    </div>
                    <div className="viewall-content-contri">
                        <div className="hihijdo">
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
                        <nav aria-label="viewall-page-navigation">
                            <ul class="viewall-pagination">
                                <li class="viewall-page-item"><a class="viewall-page-link" href="#">Previous</a></li>
                                <li class="viewall-page-item"><a class="viewall-page-link" href="#">1</a></li>
                                <li class="viewall-page-item"><a class="viewall-page-link" href="#">2</a></li>
                                <li class="viewall-page-item"><a class="viewall-page-link" href="#">3</a></li>
                                <li class="viewall-page-item"><a class="viewall-page-link" href="#">Next</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
    );
};

export default ViewAll;
