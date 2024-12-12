import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from './About Us.jsx';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Render About component (assuming you want to render both About and App)
root.render(<About />);

// Wrap your entire application with React.StrictMode for development
<React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</React.StrictMode>;

// Report web vitals
reportWebVitals();