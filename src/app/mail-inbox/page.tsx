'use client';

import { useEffect, useState } from 'react';
import Layout from './Layout';
import InboxSidebar from '../components/InboxSidebar';
import MailList from '../components/MailList';
import MailDetail from '../components/MailDetail';

export default function Main() {
  const [selectedMailId, setSelectedMailId] = useState<string>('');


  return (
    <Layout>
      <div className="flex h-[90%]">
        <div className="text-black dark:text-white bg-[#FAFAFA] dark:bg-black border-r-2 border-[#d9d9d9] w-[20%] px-4 py-4">
          <MailList/>
        </div>
        <div className="flex text-center w-[60%] bg-[#F4F6F8] border-r-2 border-[#d9d9d9] dark:bg-black">
          <MailDetail/>
          {/* {!selectedMailId ? (
            <div className="flex w-full items-center justify-center">
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
            <MailDetail />
          )} */}
        </div>
        <div className="p-4 bg-[#F9F9F9] text-black dark:bg-black dark:text-white border-l-2 flex flex-col w-[20%]">
          <InboxSidebar />
        </div>
      </div>
    </Layout>
  );
}
