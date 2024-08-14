
import React, { useState } from 'react';

interface MailReplyProps {
  recipient: string;
  subject: string;
  onCancel: () => void;
}

const MailReply: React.FC<MailReplyProps> = ({ recipient, subject, onCancel }) => {
  const [body, setBody] = useState<string>('');

  const handleSend = () => {
    // Implement send email logic here
    console.log(`To: ${recipient}, Subject: ${subject}, Body: ${body}`);
    onCancel(); // Close the reply form after sending
  };

  return (
    <div className="mt-4 p-4 bg-gray-800 rounded shadow-md text-white">
      <div className="mb-2">
        <label className="block text-gray-400 text-sm">To:</label>
        <input
          type="text"
          value={recipient}
          readOnly
          className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
        />
      </div>
      <div className="mb-2">
        <label className="block text-gray-400 text-sm">From:</label>
        <input
          type="text"
          value="your-email@example.com" // Replace with dynamic data
          readOnly
          className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
        />
      </div>
      <div className="mb-2">
        <label className="block text-gray-400 text-sm">Subject:</label>
        <input
          type="text"
          value={subject}
          readOnly
          className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-400 text-sm">Message:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full p-2 bg-gray-700 border border-gray-600 rounded h-32"
        />
      </div>
      <div className="flex space-x-4">
        <button onClick={handleSend} className="p-2 bg-blue-500 text-white rounded">
          Send
        </button>
        <button onClick={onCancel} className="p-2 bg-gray-700 text-white rounded">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default MailReply;
