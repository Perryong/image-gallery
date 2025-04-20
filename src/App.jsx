import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import  NavBar  from './components/NavBar';
import Slider from './components/Slider';
import { Gallery } from './components/Gallery';
import FooterPage from './components/Footer';
import './styles.css';        

export default function App() {
  return (
    <Router>
      <NavBar/>
      <Slider/>
      <Gallery/>
      <FooterPage/>
    </Router>
  );
}
