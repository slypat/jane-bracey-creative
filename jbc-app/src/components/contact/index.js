import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Contact = ({ name, email, phone }) => (
    
    <Jumbotron>
        <h1>{name}</h1>
        <p><a href={`mailto:${email}`}>{email}</a></p>
        <p>{phone}</p>
    </Jumbotron>
);

export default Contact;