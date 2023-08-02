import React from 'react';
import ReactDOM from 'react-dom/client';
import Pag from './pag.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Pag label = "Olá mundo" />
  </React.StrictMode>
);
