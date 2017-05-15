import React from 'react';
import { Jumbotron, Glyphicon } from 'react-bootstrap';

const Contact = ({ name, email, phone }) => (
    
    <Jumbotron>
        <h1>{name}</h1>
        <p><Glyphicon glyph="envelope" /> <a href={`mailto:${email}`}>{email}</a></p>
        <p><Glyphicon glyph="earphone" /> {phone}</p>
    </Jumbotron>
);

export default Contact;