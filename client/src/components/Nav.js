import React from "react";
import { Link } from 'react-router-dom';

const Nav = (props) => (
    <nav className="navbar navbar-expand-lg navbar-light">
        <Link to="/" className="nav-link">Google Books Search</Link>
        <Link to="/savedbooks" className="nav-link">Saved</Link>
    </nav>
);

export default Nav;