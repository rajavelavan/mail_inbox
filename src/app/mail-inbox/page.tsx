'use client';

import { useEffect, useState } from 'react';
import Layout from './Layout';
import InboxSidebar from '../components/InboxSidebar';
import MailList from '../components/MailList';
import MailDetail from '../components/MailDetail';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Main() {
  const [selectedThreadId, setSelectedThreadId] = useState<number | null>();
  

  const handleClick = (threadId: number) => {
    console.log('Mail selected.')
    setSelectedThreadId(threadId);
  }

  return (
    <Layout>
      <div className="flex w-full h-screen">
        <div className="w-[20%] text-black dark:text-white bg-[#FAFAFA] dark:bg-black border-r-2 border-[#d9d9d9] px-4 py-4 overflow-auto">
          <MailList onMailSelect={handleClick}/>
        </div>
        <div className="flex text-center w-[60%] bg-[#F4F6F8] border-r-2 border-[#d9d9d9] dark:bg-black overflow-auto">
          {!selectedThreadId ? (
            <div className="flex w-full h-full items-center justify-center">
              <div className="bg-white dark:bg-[#23272C] dark:text-white p-8 rounded-lg max-w-md">
                <h1 className="font-bold">
                  It is the beginning of a legendary pipeline
                </h1>
                <h3 className="font-light">
                  when you have inbound e-mails <br /> you will see them here
                </h3>
              </div>
            </div>
          ) : (
            <MailDetail thread={selectedThreadId} />
          )}
        </div>
        <div className="p-4 bg-[#F9F9F9] text-black dark:bg-black dark:text-white border-l-2 flex flex-col h-full w-[20%]">
          <InboxSidebar />
        </div>
      </div>
    </Layout>
  );
}
