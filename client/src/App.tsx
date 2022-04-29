import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './pages/User';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/users' element={<User />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='/products' element={<Products />} />
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
