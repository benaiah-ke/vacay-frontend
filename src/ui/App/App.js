import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { APP_ROUTES } from '../../config/routes';
import Header from '../components/Header/Header';
import Login from '../pages/auth/Login/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Header />

      <Routes>

        <Route path="*" element={<Login />} />

        {/* 404 */}
        {/* <Route path="*" element={<div>Page Not Found</div>} /> */}
      
      </Routes>

    </div>
  );
}

export default App;
