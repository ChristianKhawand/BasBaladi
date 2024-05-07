import React, { useState, useEffect } from 'react';
import './infos.css'; // Import the CSS file

const Carousel = () => {
  const images = [
    {
      url: 'https://source.unsplash.com/h5yMpgOI5nI/500x500',
      title: 'Fruits',
      description: 'We import some fruits that are not grown in Lebanon from outside,while maintaining the highest quality standards',
    },
    {
      url: 'https://source.unsplash.com/TIGDsyy0TK4/500x500',
      title: 'Mango',
      description: 'Brazil and Thailand',
    },
    {
      url: 'https://source.unsplash.com/TdDtTu2rv4s/500x500',
      title: 'Blueberry',
      description: 'Mexico,Peru and Chile',
    },
    {
      url: 'https://source.unsplash.com/eudGUrDdBB0/500x500',
      title: 'Pineapple',
      description: 'Costa Rica,Philippines,Angola and Kenya',
    },
    {
      url: 'https://source.unsplash.com/eJH4f1rlG7g/500x500',
      title: 'Raspberry',
      description: 'USA,Canada and Spain',
    },
    // Add more image objects as needed
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 1000); // Adjust the duration to match your CSS transition time
    }, 5000); // Change the interval duration as needed (milliseconds)

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel-container">
      <div className="green-rectangle">
        <h1 className="carousel-title">MeshBaladi</h1>
      </div>
      <div
        className={`bg ${isTransitioning ? 'transitioning' : ''}`}
        style={{ backgroundImage: `url(${images[currentImageIndex].url})` }}
      >
        <div className="content-wrapper">
          <h1 className="content-title">{images[currentImageIndex].title}</h1>
          <p className="content-description">{images[currentImageIndex].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
