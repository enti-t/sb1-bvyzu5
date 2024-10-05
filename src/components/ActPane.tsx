import React, { useState } from 'react';
import { PlusCircle, Trash2 } from 'lucide-react';

interface OutlineItem {
  id: number;
  title: string;
  content: string;
}

interface ActPaneProps {
  outline: OutlineItem[];
  updateOutline: (newOutline: OutlineItem[]) => void;
}

const ActPane: React.FC<ActPaneProps> = ({ outline, updateOutline }) => {
  const [selectedAct, setSelectedAct] = useState<OutlineItem | null>(null);

  const addAct = () => {
    const newAct: OutlineItem = {
      id: Date.now(),
      title: 'New Act',
      content: '',
    };
    updateOutline([...outline, newAct]);
    setSelectedAct(newAct);
  };

  const updateAct = (field: 'title' | 'content', value: string) => {
    if (selectedAct) {
      const updatedOutline = outline.map((item) =>
        item.id === selectedAct.id ? { ...item, [field]: value } : item
      );
      updateOutline(updatedOutline);
      setSelectedAct({ ...selectedAct, [field]: value });
    }
  };

  const deleteAct = (id: number) => {
    const updatedOutline = outline.filter((item) => item.id !== id);
    updateOutline(updatedOutline);
    setSelectedAct(null);
  };

  return (
    <div className="flex h-full editor-field rounded-lg">
      <div className="w-1/4 pr-4 border-r border-gray-600">
        <h3 className="text-lg font-semibold mb-4">Acts</h3>
        <ul className="space-y-2">
          {outline.map((act) => (
            <li
              key={act.id}
              className={`cursor-pointer p-2 rounded ${
                selectedAct?.id === act.id ? 'bg-accent3 text-white' : 'hover:bg-gray-700'
              }`}
              onClick={() => setSelectedAct(act)}
            >
              {act.title}
            </li>
          ))}
        </ul>
        <button
          onClick={addAct}
          className="flex items-center space-x-2 mt-4 bg-accent3 text-white px-4 py-2 rounded hover:bg-accent4 transition-colors"
        >
          <PlusCircle className="w-5 h-5" />
          <span>Add Act</span>
        </button>
      </div>
      <div className="w-3/4 pl-4">
        {selectedAct ? (
          <div>
            <div className="flex items-center justify-between mb-4">
              <input
                type="text"
                value={selectedAct.title}
                onChange={(e) => updateAct('title', e.target.value)}
                className="text-xl font-semibold bg-transparent focus:outline-none focus:ring-2 focus:ring-accent3 rounded px-2 py-1"
              />
              <button onClick={() => deleteAct(selectedAct.id)} className="text-red-500 hover:text-red-700">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
            <textarea
              value={selectedAct.content}
              onChange={(e) => updateAct('content', e.target.value)}
              className="w-full h-64 p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-accent3"
            />
          </div>
        ) : (
          <p className="text-gray-400 italic">Select an act to view and edit its content</p>
        )}
      </div>
    </div>
  );
};

export default ActPane;