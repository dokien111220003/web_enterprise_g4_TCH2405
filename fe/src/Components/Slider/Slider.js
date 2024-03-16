import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';

const MySlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.slickNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    autoplaySpeed: 5000,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex)
  };

  return (
    <div className="slider">
      <Slider {...settings} ref={sliderRef}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              className={index === currentIndex ? "slide current" : "slide"}
            />
          </div>
        ))}
      </Slider>
      <button onClick={() => sliderRef.current.slickPrev()}>Previous</button>
      <button onClick={() => sliderRef.current.slickNext()}>Next</button>
    </div>
  );
}

export default MySlider;
