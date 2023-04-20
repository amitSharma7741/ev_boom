/* import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter  } from 'react-router-dom';
import ReactGA from "react-ga4";
import {  HelmetProvider } from 'react-helmet-async';

const GA4ID = process.env.REACT_APP_GA4_ID;
ReactGA.initialize(GA4ID);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
      <App />
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 */

import React from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
);
