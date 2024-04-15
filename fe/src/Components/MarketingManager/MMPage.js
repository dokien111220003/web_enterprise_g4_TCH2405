import React from 'react';
import MySlider from '../Slider/Slider';
import { NavLink } from 'react-router-dom';
import slider1 from '../Assets/slider1.jpg';
import slider2 from '../Assets/slider2.jpg';
import slider3 from '../Assets/slider3.jpg';
import img1 from '../Assets/slider1.jpg';
import img2 from '../Assets/slider2.jpg';
import img3 from '../Assets/slider3.jpg';
import arrow from '../Assets/arrow-right.png'

const MMPage = () => {

  const images = [
    slider1,
    slider2,
    slider3,
  ];

  return (
    <div className="studentpage-container">
      <div className="studentpage-left-container">
        <div className="slider-student-container">
          <div className="slider-student">
            <MySlider images={images} />
          </div>
          <div className="slider-context">
            <h1>Where students can freely share their voices.</h1>
            <li><NavLink exact to='/about' activeClassName="active">More about us</NavLink></li>
          </div>
        </div>
        <div className="left-content">
          <div className="left-content-header">
            <h1>IT Faculty</h1>
            <li><NavLink exact to='/viewallMM' activeClassName="active" className="nav-link-text">View more here</NavLink></li>
          </div>
          <div className="left-content-context">
            <div className="context-box-faculty">
              <div className="anotherbox">
                <div className="box-content-img-faculty">
                  <img src={img3}></img>
                </div>
                <div className="box-content-title-faculty">
                  <h1>The Impact of Social Media on Youth Mental Health</h1>
                </div>
                <div className="content-author-faculty">
                  <h3>By Paul Atreides</h3>
                </div>
              </div>
              <div className="anotherbox">
                <div className="box-content-img-faculty">
                  <img src={img3}></img>
                </div>
                <div className="box-content-title-faculty">
                  <h1>The Role of Education in Promoting Gender Equality</h1>
                </div>
                <div className="content-author-faculty">
                  <h3>By Paul Atreides</h3>
                </div>
              </div>
              <div className="anotherbox">
                <div className="box-content-img-faculty">
                  <img src={img3}></img>
                </div>
                <div className="box-content-title-faculty">
                  <h1>Analyzing the Effects of Urbanization on Wildlife</h1>
                </div>
                <div className="content-author-faculty">
                  <h3>By Paul Atreides</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="left-content">
          <div className="left-content-header">
            <h1>Business Faculty</h1>
            <li><NavLink exact to='/viewallMM' activeClassName="active" className="nav-link-text">View more here</NavLink></li>
          </div>
          <div className="left-content-context">
            <div className="context-box-faculty">
              <div className="anotherbox">
                <div className="box-content-img-faculty">
                  <img src={img3}></img>
                </div>
                <div className="box-content-title-faculty">
                  <h1>The Impact of Social Media on Youth Mental Health</h1>
                </div>
                <div className="content-author-faculty">
                  <h3>By Paul Atreides</h3>
                </div>
              </div>
              <div className="anotherbox">
                <div className="box-content-img-faculty">
                  <img src={img3}></img>
                </div>
                <div className="box-content-title-faculty">
                  <h1>The Role of Education in Promoting Gender Equality</h1>
                </div>
                <div className="content-author-faculty">
                  <h3>By Paul Atreides</h3>
                </div>
              </div>
              <div className="anotherbox">
                <div className="box-content-img-faculty">
                  <img src={img3}></img>
                </div>
                <div className="box-content-title-faculty">
                  <h1>Analyzing the Effects of Urbanization on Wildlife</h1>
                </div>
                <div className="content-author-faculty">
                  <h3>By Paul Atreides</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="left-content">
          <div className="left-content-header">
            <h1>Marketing Faculty</h1>
            <li><NavLink exact to='/viewallMM' activeClassName="active" className="nav-link-text">View more here</NavLink></li>
          </div>
          <div className="left-content-context">
            <div className="context-box-faculty">
              <div className="anotherbox">
                <div className="box-content-img-faculty">
                  <img src={img3}></img>
                </div>
                <div className="box-content-title-faculty">
                  <h1>The Impact of Social Media on Youth Mental Health</h1>
                </div>
                <div className="content-author-faculty">
                  <h3>By Paul Atreides</h3>
                </div>
              </div>
              <div className="anotherbox">
                <div className="box-content-img-faculty">
                  <img src={img3}></img>
                </div>
                <div className="box-content-title-faculty">
                  <h1>The Role of Education in Promoting Gender Equality</h1>
                </div>
                <div className="content-author-faculty">
                  <h3>By Paul Atreides</h3>
                </div>
              </div>
              <div className="anotherbox">
                <div className="box-content-img-faculty">
                  <img src={img3}></img>
                </div>
                <div className="box-content-title-faculty">
                  <h1>Analyzing the Effects of Urbanization on Wildlife</h1>
                </div>
                <div className="content-author-faculty">
                  <h3>By Paul Atreides</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="viewmore">
          <div className="li-viewmore">
            <li><NavLink exact to='/viewallMM' activeClassName="active">View More Faculty</NavLink></li>
            <div className="icon-viewmore">
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
      </div>




      <div className="studentpage-right-container">
        <div className="studentpage-right-container-header">
          <h1>Latest Public</h1>
        </div>
        <div className="studentpage-right-container-context">
          <a href="/marketing_manager_main">
            <div className="box-content-student">
              <div className="box-content">
                <div className="box-content-title">
                  <h1>The Influence of Cultural Diversity on Workplace Dynamics</h1>
                </div>
                <div className="box-content-img">
                  <img src={img2}></img>
                </div>
              </div>
              <div className="content-author">
                <h3>By Paul Atreides</h3>
              </div>
            </div>
          </a>
          <a href="/marketing_manager_main">
            <div className="box-content-student">
              <div className="box-content">
                <div className="box-content-title">
                  <h1>The Influence of Cultural Diversity on Workplace Dynamics</h1>
                </div>
                <div className="box-content-img">
                  <img src={img2}></img>
                </div>
              </div>
              <div className="content-author">
                <h3>By Paul Atreides</h3>
              </div>
            </div>
          </a>
          <a href="/marketing_manager_main">
            <div className="box-content-student">
              <div className="box-content">
                <div className="box-content-title">
                  <h1>The Influence of Cultural Diversity on Workplace Dynamics</h1>
                </div>
                <div className="box-content-img">
                  <img src={img2}></img>
                </div>
              </div>
              <div className="content-author">
                <h3>By Paul Atreides</h3>
              </div>
            </div>
          </a>
        </div>
        <div className="studentpage-right-container-context-ads">
          <div className="right-container-ads">
            <a href="/term">
              <div className="box-content-img-ads">
                <img src={img2} alt="Ảnh quảng cáo" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MMPage;
