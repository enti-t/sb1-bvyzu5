import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Analytics: React.FC = () => {
  const data = [
    { name: 'Mon', words: 1000 },
    { name: 'Tue', words: 1500 },
    { name: 'Wed', words: 800 },
    { name: 'Thu', words: 2000 },
    { name: 'Fri', words: 1200 },
    { name: 'Sat', words: 500 },
    { name: 'Sun', words: 1800 },
  ];

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Analytics</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-4">Writing Progress</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="words" fill="#C06C84" />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Writing Stats</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-accent1 p-4 rounded-lg">
              <h4 className="text-lg font-semibold">Total Words</h4>
              <p className="text-3xl font-bold">8,800</p>
            </div>
            <div className="bg-accent2 p-4 rounded-lg">
              <h4 className="text-lg font-semibold">Average Daily Words</h4>
              <p className="text-3xl font-bold">1,257</p>
            </div>
            <div className="bg-accent3 p-4 rounded-lg">
              <h4 className="text-lg font-semibold">Writing Streak</h4>
              <p className="text-3xl font-bold">5 days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;