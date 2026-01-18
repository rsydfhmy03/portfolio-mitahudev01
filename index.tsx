import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { OSProvider } from './src/context/OSContext';
import './src/index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <OSProvider>
      <App />
    </OSProvider>
  </React.StrictMode>
);