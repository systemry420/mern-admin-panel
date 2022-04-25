import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './pages/User';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/users' element={<User />} />
              <Route path='/register' element={<Register />} />
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
