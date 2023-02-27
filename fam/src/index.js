import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// LOGIN
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


// const root = ReactDOM.createRoot(document.getElementById('root'));

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

