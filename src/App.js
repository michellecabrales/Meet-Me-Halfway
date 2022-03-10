import React from 'react';
import NavBar from './components/navbar';
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import background from './images/drive.png'

function App() {
  return (
    <Router>
        <NavBar />
    </Router>
    <img src={background} width="100%" style={{opacity: 0.5}}/> 
  );
}
export default App;
