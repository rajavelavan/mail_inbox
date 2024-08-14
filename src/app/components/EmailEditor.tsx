// components/EmailEditor.tsx
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

interface EmailEditorProps {
  onSend: (email: { subject: string; body: string }) => void;
}

const EmailEditor: React.FC<EmailEditorProps> = ({ onSend }) => {
  const [subject, setSubject] = useState<string>('');
  const [body, setBody] = useState<string>('');

  const handleSubmit = () => {
    onSend({ subject, body });
    setSubject('');
    setBody('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <ReactQuill value={body} onChange={setBody} />
      <button onClick={handleSubmit} className="mt-4 p-2 bg-blue-500 text-white rounded">
        Send
      </button>
    </div>
  );
};

export default EmailEditor;
