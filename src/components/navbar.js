import React from "react";
import {Nav } from "reactstrap";

function Navbar() {
    return(
        <React.Fragment>
            <Nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">LG</a>
                    {/* <span className="navbar-toggler-icon"></span> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/projects">Projects</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </Nav>
        </React.Fragment>
    );
}

export default Navbar;