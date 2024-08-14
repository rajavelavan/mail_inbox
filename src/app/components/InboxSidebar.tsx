import React from 'react';
import Link from 'next/link';

interface InboxSidebarProps {
  inboxes: string[];
  selectedInbox: string;
  onSelectInbox: (inbox: string) => void;
}

const InboxSidebar: React.FC<InboxSidebarProps> = ({ inboxes, selectedInbox, onSelectInbox }) => {
  return (
    <div className="w-64 h-full bg-gray-300 text-black dark:bg-black dark:text-white border-l-2 flex flex-col">
      <div className="p-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 border border-gray-600 rounded"
        />
      </div>
      <div className="flex-1 overflow-y-auto">
        {inboxes.map((inbox) => (
          <div
            key={inbox}
            onClick={() => onSelectInbox(inbox)}
            className={`p-4 cursor-pointer ${selectedInbox === inbox ? 'bg-gray-700 text-white' : ''}`}
          >
            {inbox}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InboxSidebar;
