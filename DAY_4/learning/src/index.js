import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Grandparent from './Grandparent';
import Counterapp from './Counterapp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Grandparent />
    <Counterapp/>
  </React.StrictMode>
);

reportWebVitals();