import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Gallery from 'react-photo-gallery';
import Contact from './components/contact';
import photos from './resources/photos';
import './App.css';

const App = () => (
  <div>
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
        <Gallery photos={photos} />
      </Col>
    </Row>
  </Grid>
  </div>
);

export default App;
