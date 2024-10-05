import React from 'react';
import { PlusCircle, Trash2 } from 'lucide-react';

interface OutlineItem {
  id: number;
  title: string;
  content: string;
}

interface OutlinePaneProps {
  outline: OutlineItem[];
  updateOutline: (newOutline: OutlineItem[]) => void;
}

const OutlinePane: React.FC<OutlinePaneProps> = ({ outline, updateOutline }) => {
  const addOutlineItem = () => {
    const newItem: OutlineItem = {
      id: Date.now(),
      title: 'New Item',
      content: '',
    };
    updateOutline([...outline, newItem]);
  };

  const updateItem = (id: number, field: 'title' | 'content', value: string) => {
    const updatedOutline = outline.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    updateOutline(updatedOutline);
  };

  const deleteItem = (id: number) => {
    const updatedOutline = outline.filter((item) => item.id !== id);
    updateOutline(updatedOutline);
  };

  return (
    <div className="space-y-2 editor-field p-2 rounded-lg h-full overflow-auto">
      {outline.map((item) => (
        <div key={item.id} className="outline-item">
          <div className="flex items-center justify-between mb-1">
            <input
              type="text"
              value={item.title}
              onChange={(e) => updateItem(item.id, 'title', e.target.value)}
              className="outline-item-title"
            />
            <button onClick={() => deleteItem(item.id)} className="text-red-500 hover:text-red-700">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
          <textarea
            value={item.content}
            onChange={(e) => updateItem(item.id, 'content', e.target.value)}
            className="outline-item-content"
          />
        </div>
      ))}
      <button
        onClick={addOutlineItem}
        className="flex items-center space-x-1 bg-accent3 text-white px-3 py-1 rounded text-sm hover:bg-accent4 transition-colors"
      >
        <PlusCircle className="w-4 h-4" />
        <span>Add Outline Item</span>
      </button>
    </div>
  );
};

export default OutlinePane;