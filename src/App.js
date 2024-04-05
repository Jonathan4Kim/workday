import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import JobForm from './CreateProfileForm'
import LandingPage from './Landing'
import SignInPage from './components/SignInPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/jobprofile" element={<JobForm />} />
      </Routes>
    </Router>
  );
}