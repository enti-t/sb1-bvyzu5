import React, { useState } from 'react';
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, Minimize2, FileText, List, Layers, Sun, Moon, Maximize2 } from 'lucide-react';
import StoryArchive from './StoryArchive';
import GoalsAndTodos from './GoalsAndTodos';
import QuickStarts from './QuickStarts';
import AtlasChat from './AtlasChat';
import ArchivistChat from './ArchivistChat';
import DraftPane from './DraftPane';
import OutlinePane from './OutlinePane';
import ActPane from './ActPane';
import ProgressHUD from './ProgressHUD';

const WritingInterface: React.FC = () => {
  const [currentView, setCurrentView] = useState('draft');
  const [theme, setTheme] = useState('dark');
  const [leftPaneExpanded, setLeftPaneExpanded] = useState(true);
  const [rightPaneExpanded, setRightPaneExpanded] = useState(true);
  const [atlasChatExpanded, setAtlasChatExpanded] = useState(false);
  const [outline, setOutline] = useState<Array<{ id: number; title: string; content: string }>>([]);

  const handleFormatting = (command: string) => {
    document.execCommand(command, false, undefined);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleLeftPane = () => {
    setLeftPaneExpanded(!leftPaneExpanded);
  };

  const toggleRightPane = () => {
    setRightPaneExpanded(!rightPaneExpanded);
  };

  const toggleAtlasChat = () => {
    setAtlasChatExpanded(!atlasChatExpanded);
  };

  const updateOutline = (newOutline: Array<{ id: number; title: string; content: string }>) => {
    setOutline(newOutline);
  };

  return (
    <div className={`h-screen flex ${theme}`}>
      {/* Left Sidebar */}
      <div className={`pane ${leftPaneExpanded ? 'w-1/4' : 'w-12'} flex flex-col border-r border-gray-700`}>
        <div className="flex-grow overflow-hidden">
          <StoryArchive />
        </div>
        <div className="h-1/4 overflow-hidden">
          <ArchivistChat />
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-grow flex flex-col ${atlasChatExpanded ? 'pane-expanded' : ''}`}>
        {/* Top Bar */}
        <div className="bg-gray-800 p-2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button onClick={toggleLeftPane} className="btn-icon">
              {leftPaneExpanded ? <Minimize2 /> : <Maximize2 />}
            </button>
            <button onClick={() => handleFormatting('bold')} className="btn-icon">
              <Bold />
            </button>
            <button onClick={() => handleFormatting('italic')} className="btn-icon">
              <Italic />
            </button>
            <button onClick={() => handleFormatting('underline')} className="btn-icon">
              <Underline />
            </button>
            <div className="border-r border-gray-600 h-4"></div>
            <button onClick={() => handleFormatting('justifyLeft')} className="btn-icon">
              <AlignLeft />
            </button>
            <button onClick={() => handleFormatting('justifyCenter')} className="btn-icon">
              <AlignCenter />
            </button>
            <button onClick={() => handleFormatting('justifyRight')} className="btn-icon">
              <AlignRight />
            </button>
            <div className="border-r border-gray-600 h-4"></div>
            <select className="input-select">
              <option>Normal</option>
              <option>Heading 1</option>
              <option>Heading 2</option>
              <option>Heading 3</option>
            </select>
            <select className="input-select">
              <option>Font Size</option>
              <option>12</option>
              <option>14</option>
              <option>16</option>
              <option>18</option>
              <option>20</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <button onClick={toggleTheme} className="btn-icon">
              {theme === 'dark' ? <Sun /> : <Moon />}
            </button>
            <button onClick={toggleRightPane} className="btn-icon">
              {rightPaneExpanded ? <Minimize2 /> : <Maximize2 />}
            </button>
          </div>
        </div>

        {/* View Selector */}
        <div className="bg-gray-800 p-1 flex space-x-1">
          <button
            onClick={() => setCurrentView('draft')}
            className={`btn-icon ${currentView === 'draft' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
          >
            <FileText />
          </button>
          <button
            onClick={() => setCurrentView('outline')}
            className={`btn-icon ${currentView === 'outline' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
          >
            <List />
          </button>
          <button
            onClick={() => setCurrentView('act')}
            className={`btn-icon ${currentView === 'act' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
          >
            <Layers />
          </button>
        </div>

        {/* Main Editor */}
        <div className="flex-grow bg-gray-800 p-2 overflow-hidden">
          {currentView === 'draft' && <DraftPane />}
          {currentView === 'outline' && <OutlinePane outline={outline} updateOutline={updateOutline} />}
          {currentView === 'act' && <ActPane outline={outline} updateOutline={updateOutline} />}
        </div>

        {/* Atlas Chat */}
        <div className={`h-1/4 ${atlasChatExpanded ? 'flex-grow' : ''}`}>
          <AtlasChat expanded={atlasChatExpanded} toggleExpand={toggleAtlasChat} />
        </div>
      </div>

      {/* Right Sidebar */}
      <div className={`pane ${rightPaneExpanded ? 'w-1/4' : 'w-12'} bg-gray-800 flex flex-col border-l border-gray-700`}>
        <div className="flex-grow overflow-hidden">
          <GoalsAndTodos />
          <QuickStarts />
        </div>
        <div className="h-1/4">
          <ProgressHUD />
        </div>
      </div>
    </div>
  );
};

export default WritingInterface;