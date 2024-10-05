import React from 'react';

const ProgressHUD: React.FC = () => {
  // Mock data - replace with actual data in a real implementation
  const projectWordCount = 5000;
  const projectGoal = 10000;
  const weeklyProgress = 75; // 75%
  const sessionProgress = 60; // 60%

  const calculateColor = (percentage: number) => {
    if (percentage < 50) return 'text-green-500';
    if (percentage < 75) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="bg-gray-900 p-2 h-full">
      <h3 className="text-sm font-semibold mb-2 text-white">Progress</h3>
      <div className="space-y-2">
        <div>
          <div className="flex justify-between text-xs mb-1 text-gray-300">
            <span>Project Word Count</span>
            <span>{projectWordCount} / {projectGoal}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className={`h-2 rounded-full ${calculateColor((projectWordCount / projectGoal) * 100)}`}
              style={{ width: `${(projectWordCount / projectGoal) * 100}%` }}
            ></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-xs mb-1 text-gray-300">
            <span>Weekly Goal</span>
            <span>{weeklyProgress}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: `${weeklyProgress}%` }}
            ></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-xs mb-1 text-gray-300">
            <span>Session Goal</span>
            <span>{sessionProgress}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-purple-500 h-2 rounded-full"
              style={{ width: `${sessionProgress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressHUD;