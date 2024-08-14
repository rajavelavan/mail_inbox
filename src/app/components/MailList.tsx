import React from 'react';

interface Mail {
  id: string;
  sender: string;
  subject: string;
  status: 'new' | 'read' | 'replied';
}

interface MailListProps {
  mails: Mail[];
  onSelectMail: (id: string) => void;
  selectedMailId: string;
}

const MailList: React.FC<MailListProps> = ({ mails, onSelectMail, selectedMailId }) => {
  return (
    <div className="flex-1 overflow-y-auto bg-gray-300 text-black dark:bg-black dark:text-white border-l-2">
      {mails.map((mail) => (
        <div
          key={mail.id}
          onClick={() => onSelectMail(mail.id)}
          className={`p-4 border-b border-gray-700 cursor-pointer ${
            selectedMailId === mail.id ? 'bg-gray-700 text-white' : ''
          }`}
        >
          <div className="font-bold">{mail.sender}</div>
          <div>{mail.subject}</div>
          <div className={`text-xs ${mail.status === 'new' ? 'text-blue-500' : ''}`}>
            {mail.status}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MailList;
