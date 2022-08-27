import React from 'react';

import { Outlet, Link, Navigate } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-container">
        <nav>
          <Link to="/">App</Link>
          <Link to="/home">Home</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Outlet />
      </div>
    );
  }
}

export default App;
