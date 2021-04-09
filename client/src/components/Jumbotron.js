import React from "react";
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Jumbo = (props) => (
    <Jumbotron fluid className="text-center">
        <Container>
            <h1>(React) Google Books Search</h1>
            <p>Search for and save books of interest!</p>
        </Container>
    </Jumbotron>
);

export default Jumbo;