import React, { useState } from 'react';
import MailReply from './MailReply';

interface MailDetailProps {
  sender: string;
  subject: string;
  body: string;
  onReply: () => void;
  onMove: () => void;
}

const MailDetail: React.FC<MailDetailProps> = ({
  sender,
  subject,
  body,
  onReply,
  onMove,
}) => {
  const [isReplying, setIsReplying] = useState<boolean>(false);

  const handleReplyClick = () => {
    setIsReplying(true);
  };
  return (
    <div className="flex-1 p-4 bg-gray-300 text-black dark:bg-black dark:text-white border-l-2">
      <div className="mb-4">
        <div className="text-gray-500 text-sm">From: {sender}</div>
        <div className="text-xl font-bold">{subject}</div>
      </div>
      <div className="mb-4">{body}</div>
      <div className="flex space-x-4">
        <button
          onClick={onReply}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Reply
        </button>
        <button onClick={onMove} className="p-2 bg-gray-700 text-white rounded">
          Move
        </button>
      </div>
      {isReplying && (
        <MailReply 
          recipient={sender} 
          subject={`Re: ${subject}`} 
          onCancel={() => setIsReplying(false)} 
        />
      )}
    </div>
  );
};

export default MailDetail;
