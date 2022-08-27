import React from 'react';

import Home from './home.component';
import Contact from './contact.component';

import { Routes, Route, Link, Navigate } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-container">
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <h1>Hiii</h1>
      </div>
    );
  }
}

export default App;
