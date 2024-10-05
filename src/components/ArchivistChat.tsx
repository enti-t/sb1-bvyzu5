import React, { useState } from 'react';
import { Send, BookOpen } from 'lucide-react';

const ArchivistChat: React.FC = () => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hello! I'm the Archivist. I can help you navigate and search through your story archive. How may I assist you?", isUser: false },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      setInput('');
      // Simulate AI response (replace with actual AI integration later)
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "I'm searching through your story archive. How else can I help you with your files?", isUser: false }]);
      }, 1000);
    }
  };

  return (
    <div className="bg-gray-800 shadow-md border-t border-gray-700">
      <div className="flex items-center justify-between bg-gray-900 text-white p-2">
        <div className="flex items-center">
          <BookOpen className="w-5 h-5 mr-2" />
          <span>Archivist</span>
        </div>
      </div>
      <div className="h-40 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-2 ${message.isUser ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded-lg ${message.isUser ? 'bg-accent5 text-white' : 'bg-gray-700 text-white'}`}>
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center border-t border-gray-700 p-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow px-2 py-1 bg-gray-700 text-white focus:outline-none"
          placeholder="Ask Archivist..."
        />
        <button onClick={sendMessage} className="ml-2 p-2 bg-accent5 text-white rounded-full hover:bg-accent4 transition-colors">
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ArchivistChat;