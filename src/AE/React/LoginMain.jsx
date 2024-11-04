import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

function LoginMain() {
  const isAvailable = localStorage.getItem('user');

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route 
          path="/home" 
          element={isAvailable ? <Home /> : <Navigate to="/login" />} 
        />
      </Routes>
    </Router>
  );
}

export default LoginMain;
