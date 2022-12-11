import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { APP_ROUTES } from '../../config/routes';
import Header from '../components/Header/Header';
import Login from '../pages/auth/Login/Login';
import Register from '../pages/auth/Register/Register';
import Landing from '../pages/landing/Landing';
import NotFound from '../pages/NotFound';
import UserArea from '../pages/user/UserArea/UserArea';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Header />

      <Routes>
        <Route path={APP_ROUTES.HOME} element={<Landing />} />

        {/* AUTH */}
        <Route path={APP_ROUTES.LOGIN} element={<Login />} />
        <Route path={APP_ROUTES.REGISTER} element={<Register />} />

        {/* USER */}
        <Route path="/user/*" element={<UserArea />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      
      </Routes>

    </div>
  );
}

export default App;
