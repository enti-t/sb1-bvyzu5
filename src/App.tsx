import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import WritingInterface from './components/WritingInterface';
import Settings from './components/Settings';
import Analytics from './components/Analytics';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-coral text-text">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/write" element={<WritingInterface />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;