import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import JobForm from './CreateProfileForm'
import LandingPage from './Landing'
import SignInPage from './components/SignInPage';
import JobsApplicant from './applicant/jobs/jobsApplicant';
import ExploreApplicant from './applicant/explore/exploreApplicant';
import JobsRecruiter from './recruiter/jobs/jobsRecruiter';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/jobprofile" element={<JobForm />} />
        <Route path="/applicant/jobs" element={<JobsApplicant />} />
        <Route path="/applicant/explore" element={<ExploreApplicant />} />

        <Route path="/recruiter/jobs" element={<JobsRecruiter />} />

      </Routes>
    </Router>
  );
}