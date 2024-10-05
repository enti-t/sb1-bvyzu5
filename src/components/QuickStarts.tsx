import React from 'react';
import { UserPlus, TrendingUp, Globe, Sparkles } from 'lucide-react';

const QuickStarts: React.FC = () => {
  const quickStarts = [
    { icon: UserPlus, text: 'Character Development' },
    { icon: TrendingUp, text: 'Plot Progression' },
    { icon: Globe, text: 'World Building' },
    { icon: Sparkles, text: 'Surprise Me' },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Quick Starts</h2>
      <div className="space-y-2">
        {quickStarts.map((start, index) => (
          <button
            key={index}
            className="w-full flex items-center space-x-2 bg-accent1 text-text px-4 py-2 rounded hover:bg-accent2 transition-colors"
          >
            <start.icon className="w-5 h-5" />
            <span>{start.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickStarts;