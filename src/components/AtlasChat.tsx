import React, { useState } from 'react';
import { Send, Maximize2, Minimize2 } from 'lucide-react';

interface AtlasChatProps {
  expanded: boolean;
  toggleExpand: () => void;
}

const AtlasChat: React.FC<AtlasChatProps> = ({ expanded, toggleExpand }) => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hello! I'm Atlas, your writing assistant. How can I help you today?", isUser: false },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      setInput('');
      // Simulate AI response (replace with actual AI integration later)
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "I'm processing your request. How else can I assist you?", isUser: false }]);
      }, 1000);
    }
  };

  return (
    <div className={`bg-gray-800 shadow-md border-t border-gray-700 flex flex-col h-full`}>
      <div className="flex justify-between items-center bg-gray-900 p-1">
        <h3 className="text-sm font-semibold">Atlas Chat</h3>
        <button onClick={toggleExpand} className="btn-icon">
          {expanded ? <Minimize2 /> : <Maximize2 />}
        </button>
      </div>
      <div className="flex-grow overflow-y-auto p-2">
        {messages.map((message, index) => (
          <div key={index} className={`chat-message ${message.isUser ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block ${message.isUser ? 'bg-accent3 text-white' : 'bg-gray-700 text-white'}`}>
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center border-t border-gray-700 p-1">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow px-2 py-1 bg-gray-700 text-white text-sm focus:outline-none"
          placeholder="Ask Atlas..."
        />
        <button onClick={sendMessage} className="ml-1 p-1.5 bg-accent3 text-white rounded-full hover:bg-accent4 transition-colors">
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default AtlasChat;