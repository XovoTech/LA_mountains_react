import './Slider.css'

// import { useState } from 'react';

const Slider = () => {

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Adjust the number of images displayed
        slidesToScroll: 1,
      };

    return (
        <div className="slider-container">
      <Slider {...sliderSettings}>
        <div className="slide">
          <img src="image1.jpg" alt="Image 1" />
        </div>
        <div className="slide">
          <img src="image2.jpg" alt="Image 2" />
        </div>
        <div className="slide">
          <img src="image3.jpg" alt="Image 3" />
        </div>
        <div className="slide">
          <img src="image4.jpg" alt="Image 4" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
    )
}

export default Slider