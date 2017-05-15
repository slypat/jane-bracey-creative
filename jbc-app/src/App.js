import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Contact from './components/contact';
import './App.css';

const App = () => (
  <Grid>
    <Row>
      <Col md={12}>
        <Contact
          name="JaneBraceyCreative"
          email="janebracey1@gmail.com"
          phone="0771 862 6084" />
      </Col>      
    </Row>
  </Grid>
);

export default App;
