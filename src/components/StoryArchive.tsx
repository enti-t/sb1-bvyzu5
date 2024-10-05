import React, { useState } from 'react';
import { Folder, FileText, Image, ChevronLeft, ChevronRight, Grid, List, Share, Tag, ChevronDown } from 'lucide-react';

interface FileNode {
  id: string;
  name: string;
  type: 'file' | 'folder' | 'image';
  size?: string;
  lastModified?: string;
}

const StoryArchive: React.FC = () => {
  const [files, setFiles] = useState<FileNode[]>([
    { id: '1', name: 'Composure App Prototype Code', type: 'file', size: '24 KB', lastModified: '2024-09-20' },
    { id: '2', name: 'ctcopeland_FIGMA_design_for_writing_a...0f0_3.png', type: 'image', size: '1.2 MB', lastModified: '2024-09-20' },
    { id: '3', name: 'ctcopeland_FIGMA_WEBSITE_design_for...a3d_3.png', type: 'image', size: '2.5 MB', lastModified: '2024-09-20' },
    { id: '4', name: 'ctcopeland_FIGMA_WEBSITE_design_for...dcf7_1.png', type: 'image', size: '1.8 MB', lastModified: '2024-09-20' },
    { id: '5', name: 'ctcopeland_PNG_of_MOCKUP_FIGMA_...7be3b3_2.png', type: 'image', size: '3.1 MB', lastModified: '2024-09-20' },
    { id: '6', name: 'Screenshot 2024-09-20 at 12.38.23 AM', type: 'image', size: '4.7 MB', lastModified: '2024-09-20' },
  ]);

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const renderFileIcon = (type: string) => {
    switch (type) {
      case 'folder':
        return <Folder className="w-6 h-6 text-accent4" />;
      case 'image':
        return <Image className="w-6 h-6 text-accent3" />;
      default:
        return <FileText className="w-6 h-6 text-accent5" />;
    }
  };

  return (
    <div className="bg-gray-900 text-white p-4 flex-grow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">STORY ARCHIVE</h2>
        <div className="flex space-x-2">
          <button className="p-1 hover:bg-gray-700 rounded"><ChevronLeft className="w-4 h-4" /></button>
          <button className="p-1 hover:bg-gray-700 rounded"><ChevronRight className="w-4 h-4" /></button>
          <button className="p-1 hover:bg-gray-700 rounded" onClick={() => setViewMode('grid')}><Grid className="w-4 h-4" /></button>
          <button className="p-1 hover:bg-gray-700 rounded" onClick={() => setViewMode('list')}><List className="w-4 h-4" /></button>
          <button className="p-1 hover:bg-gray-700 rounded"><Share className="w-4 h-4" /></button>
          <button className="p-1 hover:bg-gray-700 rounded"><Tag className="w-4 h-4" /></button>
          <button className="p-1 hover:bg-gray-700 rounded"><ChevronDown className="w-4 h-4" /></button>
        </div>
      </div>
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-3 gap-4">
          {files.map((file) => (
            <div key={file.id} className="text-center">
              {renderFileIcon(file.type)}
              <p className="text-sm mt-1 truncate">{file.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm">
              <th className="pb-2">Name</th>
              <th className="pb-2">Size</th>
              <th className="pb-2">Last Modified</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file) => (
              <tr key={file.id} className="text-sm">
                <td className="py-1 flex items-center">
                  {renderFileIcon(file.type)}
                  <span className="ml-2">{file.name}</span>
                </td>
                <td>{file.size}</td>
                <td>{file.lastModified}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StoryArchive;