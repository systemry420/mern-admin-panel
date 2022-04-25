import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './pages/User';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className='container-fluid'>
        <Sidebar />
        <main className='container d-flex'>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/users' element={<User />} />
            </Routes>
          </BrowserRouter>
        </main>
      </div>
    </div>
  );
}

export default App;
