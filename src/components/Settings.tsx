import React from 'react';
import { Save } from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-4">User Preferences</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent3"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent3"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="theme" className="block text-sm font-medium text-gray-700 mb-1">
              Theme
            </label>
            <select
              id="theme"
              name="theme"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent3"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox text-accent3" />
              <span className="ml-2">Enable notifications</span>
            </label>
          </div>
          <button type="submit" className="bg-accent3 text-white px-4 py-2 rounded hover:bg-accent4 transition-colors flex items-center">
            <Save className="w-5 h-5 mr-2" />
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;