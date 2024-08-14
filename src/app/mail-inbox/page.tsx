'use client'
import { useState } from 'react';
import Layout from '../components/Layout';
import InboxSidebar from '../components/InboxSidebar';
import MailList from '../components/MailList';
import MailDetail from '../components/MailDetail';

export default function Inbox() {
  const [selectedInbox, setSelectedInbox] = useState<string>('Inbox');
  const [selectedMailId, setSelectedMailId] = useState<string>('');

  // Example data
  const inboxes = ['Inbox', 'Sent', 'Drafts', 'Trash'];
  const mails = [
    {
      id: '1',
      sender: 'jeanne@icloud.com',
      subject: 'New Product Launch',
      status: 'new',
    },
    {
      id: '2',
      sender: 'sanya@gmail.com',
      subject: 'Payment not going through',
      status: 'read',
    },
    // Add more emails as needed
  ];

  const selectedMail = mails.find((mail) => mail.id === selectedMailId);

  const handleReply = () => {
    // Implement reply logic
  };

  const handleMove = () => {
    // Implement move logic
  };

  return (
    <Layout>
      <div className="flex h-screen bg-white">
        <MailList
          mails = {mails}
          onSelectMail={setSelectedMailId}
          selectedMailId={selectedMailId}
          />
        {selectedMail && (
          <MailDetail
          sender={selectedMail.sender}
          subject={selectedMail.subject}
          body={`This is the email body for ${selectedMail.subject}.`}
          onReply={handleReply}
          onMove={handleMove}
          />
        )}
        <InboxSidebar
          inboxes={inboxes}
          selectedInbox={selectedInbox}
          onSelectInbox={setSelectedInbox}
        />
      </div>
    </Layout>
  );
}
