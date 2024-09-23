import React, { useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://itginnovators.com/CreativePrints/BackendStyle/img/Categories/Featured/0_1_353420465_business-cards-printingsss-02.webp',
    'https://itginnovators.com/CreativePrints/BackendStyle/img/Categories/Featured/0_1_498169966_pngtree-school-supplies-banner-cartoon-blackboard-pencils-and-stationery-on-a-white-image_3802144.jpg',
    'https://itginnovators.com/CreativePrints/BackendStyle/img/Categories/Featured/0_1_1146009679_CLOTHING-C-1.png',
    'https://itginnovators.com/CreativePrints/BackendStyle/img/Categories/Featured/0_1_1584486937_paper-bags-printing.webp',
    'https://itginnovators.com/CreativePrints/BackendStyle/img/Categories/Featured/0_1_1638098077_promotional-items-printing.webp',
    'https://itginnovators.com/CreativePrints/BackendStyle/img/Categories/Featured/0_1_2016543924_Bags-Backpacks-Printing.webp',
    "https://itginnovators.com/CreativePrints/BackendStyle/img/Categories/Featured/0_1_353420465_business-cards-printingsss-02.webp",
    "https://itginnovators.com/CreativePrints/BackendStyle/img/Categories/Featured/0_1_1638098077_promotional-items-printing.webp",
    

  ];

  const imagesToShow = 4;
  const totalImages = images.length;

  const handlePrevClick = () => {
    setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : totalImages - imagesToShow));
  };

  const handleNextClick = () => {
    setCurrentIndex(prevIndex => (prevIndex < totalImages - imagesToShow ? prevIndex + 1 : 0));
  };

  const offset = -currentIndex * (100 / imagesToShow);

  return (
    <div style={{ position: 'relative', width: '90%', margin: 'auto', overflow: 'hidden' }}>
      <div style={{ display: 'flex', overflow: 'hidden', position: 'relative' }}>
      <div style={{
  display: 'flex',
  transition: 'transform 0.5s ease-in-out',
  transform: `translateX(${offset}%)`,
  width: '100%',
}}>
  {images.map((image, index) => (
    <img
      key={index}
      src={image}
      alt={`Slide ${index}`}
      style={{
        width: `${100 / imagesToShow}%`,
        height: 'auto',
        transition: 'transform 0.3s ease', // Smooth transition for scaling
        cursor: 'pointer', // Change cursor to pointer on hover
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)'; // Scale up on hover
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)'; // Reset scale on mouse leave
      }}
    />
  ))}
</div>
      </div>
      <button
        onClick={handlePrevClick}
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.2)',
          color: 'white',
          border: 'none',
          padding: '10px',
          cursor: 'pointer',
        }}
      >
       <Icon icon="ph:arrow-left" width="16" height="16"  style={{color: "black"}} />
      </button>
      <button
        onClick={handleNextClick}
        style={{
          position: 'absolute',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.2)',
          color: 'white',
          border: 'none',
          padding: '10px',
          cursor: 'pointer',
        }}
      >
        <Icon icon="ph:arrow-right" width="16" height="16"  style={{color: "black"}} />
      </button>
    </div>
  );
};

export default Carousel;
