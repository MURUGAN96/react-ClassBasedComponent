import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const main = ReactDOM.createRoot(document.querySelector('#root'));
main.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
