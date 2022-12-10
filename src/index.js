import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserProvider } from './context/user';
import './index.css';
import App from './ui/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <App />
  </UserProvider>
);

