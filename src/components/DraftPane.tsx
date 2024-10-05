import React, { useState } from 'react';

const DraftPane: React.FC = () => {
  const [content, setContent] = useState('');

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    setContent(target.innerHTML);
  };

  return (
    <div
      className="w-full h-full editor-field rounded-lg shadow-inner p-6 focus:outline-none font-quattrocento"
      contentEditable={true}
      onInput={handleInput}
      dangerouslySetInnerHTML={{ __html: content }}
      style={{ minHeight: '500px' }}
    ></div>
  );
};

export default DraftPane;