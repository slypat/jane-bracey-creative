import React, {useState, useCallback} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-image-lightbox';
import Contact from './components/contact';
import CopyRight from './components/copyright';
import photos from './resources/photos';
import './App.css';
 
const App = () => {
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
    <Container>
      <Row>
        <Col md={12}>
          <Contact
            name="JaneBraceyCreative"
            email="janebracey1@gmail.com"
            phone="0771 862 6084" />
        </Col>      
      </Row>
      <Row>
        <Col md={12}>
          <Gallery 
            photos={photos}
            onClick={openLightbox} />
          {lightboxOpen && (
            <Lightbox
              mainSrc={photos[currentImage].src}
              nextSrc={photos[(currentImage + 1) % photos.length].src}
              prevSrc={photos[(currentImage + photos.length - 1) % photos.length].src}
              onMovePrevRequest={() => setCurrentImage((currentImage + photos.length - 1) % photos.length)}
              onMoveNextRequest={() => setCurrentImage((currentImage + photos.length + 1) % photos.length)}
              onCloseRequest={closeLightbox}
            />
          )}
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <CopyRight
            year={2020}
            holder="Jane Bracey"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
