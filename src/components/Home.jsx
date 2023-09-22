import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styling/style.css'

function Home() {

  return (
    <div className="Home">
      <h1>Welcome to Cherry Blossom</h1>
      <div className='carousel_container'>
        <Carousel showThumbs={false} className='carousel'>
          <div>
            <img src="image1.jpg" alt="Image 1" />
          </div>
          <div>
            <img src='image2.jpg' alt="Image 2"/>
          </div>
          <div>
            <img src='image3.jpg' alt="Image 3"/>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
