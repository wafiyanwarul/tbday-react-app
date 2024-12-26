import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-responsive-modal/styles.css';
import { Carousel } from 'react-responsive-carousel';

// Import images
import picture1 from '../assets/picture-1.jpeg';
import picture2 from '../assets/picture-2.jpeg';
import picture3 from '../assets/picture-3.jpeg';
import picture4 from '../assets/picture-4.jpeg';
import picture5 from '../assets/picture-5.jpeg';
import picture6 from '../assets/picture-6.jpeg';
import picture7 from '../assets/picture-7.jpeg';
import picture8 from '../assets/picture-8.jpeg';
import picture9 from '../assets/picture-9.jpeg';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: picture1, alt: 'Picture 1' },
    { src: picture2, alt: 'Picture 2' },
    { src: picture3, alt: 'Picture 3' },
    { src: picture4, alt: 'Picture 4' },
    { src: picture5, alt: 'Picture 5' },
    { src: picture6, alt: 'Picture 6' },
    { src: picture7, alt: 'Picture 7' },
    { src: picture8, alt: 'Picture 8' },
    { src: picture9, alt: 'Picture 9' },
  ];

  return (
    <div className="photo-gallery">
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={2000}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={33.33} // Show 3 slides
        dynamicHeight={true}
      >
        {images.map((image, index) => (
          <div key={index} onClick={() => setSelectedImage(image.src)}>
            <img
              src={image.src}
              alt={image.alt}
              className="rounded-lg cursor-pointer"
              style={{
                maxHeight: '200px',
                objectFit: 'cover',
              }}
            />
          </div>
        ))}
      </Carousel>

      {/* Modal for full-size image */}
      {selectedImage && (
        <Modal open={true} onClose={() => setSelectedImage(null)} center>
          <img
            src={selectedImage}
            alt="Selected"
            className="w-full h-auto object-contain rounded-lg"
          />
        </Modal>
      )}
    </div>
  );
};

export default PhotoGallery;
