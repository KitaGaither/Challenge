import React from "react";
import Navbar from "./navbar";

import Home from "./home.js";
import About from "./about.js";
import Contact from "./contact.js";
import Projects from "./projects.js";
import {Route, Routes } from 'react-router-dom';


function Main() {
    return (
        <React.Fragment>
            <Home />
            <About />
            <Contact />
            <Projects />
        </React.Fragment>
        
    );
}

export default Main;