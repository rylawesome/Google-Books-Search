import React from "react";
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Jumbotron = (props) => (
    <Jumbotron fluid className="text-center">
        <Container>
            <h1>Google Books Search</h1>
            <p>Search and save your favorite books here</p>
        </Container>
    </Jumbotron>
);

export default Jumbotron;