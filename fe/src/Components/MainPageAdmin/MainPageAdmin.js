import React from 'react';
import './MainPageAdmin.css';
import Slider from '../Slider/Slider';
import slider1 from '../Assets/slider1.jpg';
import slider2 from '../Assets/slider2.jpg';
import slider3 from '../Assets/slider3.jpg';

const MainPageAdmin = () => {
  const images = [slider1, slider2, slider3];

  return (
      <Slider images={images} />
  );
}

export default MainPageAdmin;
