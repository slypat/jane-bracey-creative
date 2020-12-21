import React, { useState, useCallback } from 'react';
import { Container } from 'react-bootstrap';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-image-lightbox';
import Jumbotron from 'react-bootstrap/Jumbotron';
import photos from './photos';
import './Home.css';

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setLightboxOpen(false);
  };

  return (
    <>
      <Jumbotron fluid>
        <Container>
          <div className="Home-header-container">
            <h1>JaneBraceyCreative</h1>
            <p>You don't have to go far to have an adventure.</p>
            <div className="Home-contact-details">
              <p>
                <a href={'mailto:janebracey1@gmail.com'}>janebracey1@gmail.com</a>
              </p>
              <p>0771 862 6084</p>
            </div>
          </div>
        </Container>
      </Jumbotron>
      <Container>
        <div className="Home-gallery-container">
          <Gallery photos={photos} onClick={openLightbox} />
        </div>
      </Container>
      {lightboxOpen && (
        <Lightbox
          mainSrc={photos[currentImage].src}
          nextSrc={photos[(currentImage + 1) % photos.length].src}
          prevSrc={photos[(currentImage + photos.length - 1) % photos.length].src}
          onMovePrevRequest={() => setCurrentImage((currentImage + photos.length - 1) % photos.length)}
          onMoveNextRequest={() => setCurrentImage((currentImage + photos.length + 1) % photos.length)}
          onCloseRequest={closeLightbox}
          imagePadding={60}
          imageTitle={photos[currentImage].alt}
          reactModalStyle={{
            overlay: {
              zIndex: 10000,
            },
          }}
        />
      )}
    </>
  );
};

export default Home;
