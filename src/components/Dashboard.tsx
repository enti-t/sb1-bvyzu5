import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Settings, BarChart2 } from 'lucide-react';

const Dashboard: React.FC = () => {
  const recentFiles = [
    { id: 1, name: 'My Novel Chapter 1', lastEdited: '2 hours ago' },
    { id: 2, name: 'Short Story Ideas', lastEdited: '1 day ago' },
    { id: 3, name: 'Blog Post Draft', lastEdited: '3 days ago' },
  ];

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Recent Files</h2>
          <ul>
            {recentFiles.map((file) => (
              <li key={file.id} className="mb-2">
                <Link to={`/write/${file.id}`} className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-accent4" />
                  <span>{file.name}</span>
                  <span className="ml-auto text-sm text-gray-500">{file.lastEdited}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/write" className="mt-4 inline-block bg-accent3 text-white px-4 py-2 rounded hover:bg-accent4 transition-colors">
            New Document
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-4">
            <Link to="/write" className="block bg-accent1 text-text px-4 py-2 rounded hover:bg-accent2 transition-colors">
              Start Writing
            </Link>
            <Link to="/settings" className="flex items-center text-accent5 hover:text-accent4 transition-colors">
              <Settings className="w-5 h-5 mr-2" />
              Settings
            </Link>
            <Link to="/analytics" className="flex items-center text-accent5 hover:text-accent4 transition-colors">
              <BarChart2 className="w-5 h-5 mr-2" />
              View Analytics
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;