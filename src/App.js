// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProfilesProvider } from './context/ProfilesContext';
import Home from './pages/Home';
import ProfileDetails from './pages/ProfileDetails';
import './App.css';

const App = () => {
  return (
    <ProfilesProvider>
      <Router>
        <div className="app">
          <h1>Profile Mapper</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:id" element={<ProfileDetails />} />
          </Routes>
        </div>
      </Router>
    </ProfilesProvider>
  );
};

export default App;
