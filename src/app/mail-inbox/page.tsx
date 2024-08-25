'use client';

import { useEffect, useState } from 'react';
import Layout from './Layout';
import InboxSidebar from '../components/InboxSidebar';
import MailList from '../components/MailList';
import MailDetail from '../components/MailDetail';
import axios from 'axios';

export default function Inbox() {
  const [selectedMailId, setSelectedMailId] = useState<string>('');
  const [mailInfo, setMailInfo] = useState<any>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     let res = await axios.get(
  //       'https://hiring.reachinbox.xyz/api/v1/onebox/list'
  //     );
  //     setMailInfo(res.data);
  //     console.log(res.data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <Layout>
      <div className="flex w-full h-[90%]">
        <div className='text-black dark:text-white bg-[#FAFAFA] dark:bg-black border-r-2 border-[#d9d9d9] w-[20%] px-4 py-4'>
        <MailList
          // mailInfo={mailInfo}
        />
        </div>
        <div className='flex items-center justify-center text-center w-[60%] bg-[#F4F6F8] border-r-2 border-[#d9d9d9] dark:bg-black'>
        {!selectedMailId ? (
          <div className="flex items-center">
            <div className="bg-white dark:bg-[#23272C] dark:text-white p-8 rounded-lg max-w-md">
              <h1 className='font-bold'>It is the beginning of a legendary pipeline</h1>
              <h3 className='font-light'>when you have inbound e-mails <br/> you will see them here</h3>
            </div>
          </div>
        ) : (
          <MailDetail
            subject={mailInfo?.subject}
            fromEmail={mailInfo?.fromEmail}
            toEmail={mailInfo?.toEmail}
            body={`This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.This is the email body for ${mailInfo?.subject}.`}
          />
        )}
        </div>
        <div className='p-4 bg-[#F9F9F9] text-black dark:bg-black dark:text-white border-l-2 flex flex-col w-[20%] h-screen'>
        <InboxSidebar />
        </div>
      </div>
    </Layout>
  );
}
