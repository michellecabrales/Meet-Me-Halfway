import React from 'react';
import NavBar from './components/navbar';
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <Router>
        <NavBar />
    </Router>
  );
}
export default App;