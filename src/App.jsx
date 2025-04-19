import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {NavBar} from "./components/NavBar"; // Assuming NavBar is a default export
import { Gallery } from "./Gallery";
import  Slider  from "./components/Slider";
import FooterPage from "./components/Footer"; // Adjust the path as necessary
import '@fortawesome/fontawesome-free/css/all.min.css';



import "./styles.css";

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Slider/>
        
        <Gallery />
        <FooterPage />
      </>
    </Router>

  );
}

export default App;