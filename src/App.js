import React from 'react';
import './App.css';
import Main from "./components/main.js";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter } from 'react-router-dom';
import Navbar from "./components/navbar.js";



function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Main />
    </BrowserRouter>
  );
}

export default App;
