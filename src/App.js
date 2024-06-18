import './App.css';
import React from 'react';

// Button
import Button from 'react-bootstrap/Button'; 
// Navbar
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './components/Navbar';
//Pages
//import About from './components/About';

function App() {
  return (
    <>
    <img className = "Home-face" src="https://news.artnet.com/app/news-upload/2020/10/X10695-A5.jpg" alt="Face" />
    <h1 className = "Home-faceText">ARTEMISIA LOMI GENTILESCHI</h1>
    <h1 className = "Home-faceText2">Rome, Papal States</h1>
    <h1 className = "Home-faceText3">Italian Baroque Painter</h1>
    <div className = "Home-learnMore">
      <Button variant="outline-danger" size="sm" class = "btn btn-outline-danger">LEARN MORE</Button>
    </div>
    <div className = "App-navbar"><BasicExample/>
    </div>
    </>
  );
}

export default App;
