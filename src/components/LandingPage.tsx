import React from 'react';
import { Link } from 'react-router-dom';
import { PenTool } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <PenTool className="w-16 h-16 text-accent5 mb-4" />
      <h1 className="text-4xl font-bold mb-4">Welcome to Composure</h1>
      <p className="text-xl mb-8">Your modern writing companion</p>
      <div className="space-x-4">
        <Link to="/dashboard" className="bg-accent3 text-white px-6 py-2 rounded-full hover:bg-accent4 transition-colors">
          Get Started
        </Link>
        <Link to="/login" className="bg-accent1 text-text px-6 py-2 rounded-full hover:bg-accent2 transition-colors">
          Login
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;