import React, { useState } from 'react';
import { CheckSquare, PlusSquare, Trash2 } from 'lucide-react';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const GoalsAndTodos: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'Write 1000 words', completed: false },
    { id: 2, text: 'Edit Chapter 3', completed: true },
    { id: 3, text: 'Outline new story', completed: false },
  ]);
  const [newTask, setNewTask] = useState('');
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const startEditing = (id: number) => {
    setEditingTaskId(id);
  };

  const finishEditing = (id: number, newText: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: newText } : task
    ));
    setEditingTaskId(null);
  };

  return (
    <div className="p-4 bg-gray-800">
      <h2 className="text-xl font-semibold mb-4 text-white">Goals & To-Do</h2>
      <div className="space-y-2">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center space-x-2">
            <CheckSquare
              className={`w-5 h-5 cursor-pointer ${task.completed ? 'text-accent3' : 'text-gray-400'}`}
              onClick={() => toggleTask(task.id)}
            />
            {editingTaskId === task.id ? (
              <input
                type="text"
                value={task.text}
                onChange={(e) => finishEditing(task.id, e.target.value)}
                onBlur={() => setEditingTaskId(null)}
                autoFocus
                className="flex-grow bg-gray-700 text-white border-b border-gray-600 focus:outline-none focus:border-accent3"
              />
            ) : (
              <span
                className={`flex-grow ${task.completed ? 'line-through text-gray-500' : 'text-white'}`}
                onClick={() => startEditing(task.id)}
              >
                {task.text}
              </span>
            )}
            <Trash2
              className="w-5 h-5 text-red-500 cursor-pointer"
              onClick={() => deleteTask(task.id)}
            />
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-grow bg-gray-700 text-white border border-gray-600 rounded-l px-2 py-1 focus:outline-none focus:ring-2 focus:ring-accent3"
          placeholder="Add new task"
        />
        <button
          onClick={addTask}
          className="bg-accent3 text-white px-2 py-1 rounded-r hover:bg-accent4 transition-colors"
        >
          <PlusSquare className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default GoalsAndTodos;