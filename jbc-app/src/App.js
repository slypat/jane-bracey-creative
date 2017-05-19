import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import Contact from './components/contact';
import CopyRight from './components/copyright';
import photos from './resources/photos';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
      photos
    };

    this.handleCloseLightbox = this.handleCloseLightbox.bind(this);
    this.handleOpenLightbox = this.handleOpenLightbox.bind(this);
    this.handleGoToPreviousLightboxImage = this.handleGoToPreviousLightboxImage.bind(this);
    this.handleGoToNextLightboxImage = this.handleGoToNextLightboxImage.bind(this);
  }

  handleCloseLightbox(event) {
    this.setState({ 
      lightboxIsOpen: false, 
      currentImage: 0 
    });
  }

  handleOpenLightbox(index, event) {
    event.preventDefault();
    this.setState({
      lightboxIsOpen: true, 
      currentImage: index
    });
  }

  handleGoToPreviousLightboxImage(event) {
    this.setState({ 
      currentImage: this.state.currentImage - 1 
    });
  }

  handleGoToNextLightboxImage(event) {
    this.setState({ 
      currentImage: this.state.currentImage + 1 
    });
  }

  render() {
    return (
      <Grid>
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
              photos={this.state.photos}
              onClickPhoto={this.handleOpenLightbox} />
            <Lightbox
              images={this.state.photos}
              currentImage={this.state.currentImage}
              isOpen={this.state.lightboxIsOpen}
              onClickPrev={this.handleGoToPreviousLightboxImage}
              onClickNext={this.handleGoToNextLightboxImage}
              onClose={this.handleCloseLightbox}
              backdropClosesModal={true}
              width={1600}
            />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <CopyRight
              year={2017}
              holder="Jane Bracey"
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
