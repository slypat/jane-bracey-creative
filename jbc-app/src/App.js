import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Home from './home';
import { ArtistStatement, Resume } from './about';
import './App.css';

const App = () => (
  <Router>
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand>
        <Link className="App-nav-link" to="/">
          JaneBraceyCreative
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="About" id="about-dropdown">
            <NavDropdown.Item>
              <Link className="App-nav-link" to="/about/artist-statement">
                Artist Statement
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link className="App-nav-link" to="/about/resume">
                Resum&eacute;
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <div className="App-content-container">
      <Switch>
        <Route path="/about/artist-statement">
          <ArtistStatement />
        </Route>
        <Route path="/about/resume">
          <Resume />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <div className="App-footer-container">
        <p className="lead text-center">&copy; 2020 Jane Bracey</p>
      </div>
    </div>
  </Router>
);

export default App;
