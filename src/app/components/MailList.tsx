import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { IoReload } from 'react-icons/io5';
import { SlArrowDown } from 'react-icons/sl';
import MailDetail from './MailDetail';

interface Mail {
  id: number;
  fromEmail: string;
  subject: string;
  threadId: number;
  sentAt: string;
  inReplyTo: string;
}

interface MailListProps {
  onMailSelect: (threadId: number) => void;
}

const MailList = () => {
  const router = useRouter();

  const [mails, setMails] = useState<Mail[]>([]);
  const [selectedThreadId, setSelectedThreadId] = useState<number | null>(null);
  
  const jwt = localStorage.getItem('token');
  console.log('Token is found.');
  if (!jwt) {
    router.push('/login');
  }

  async function RestoreData() {
    let res = await axios.get(
      'https://hiring.reachinbox.xyz/api/v1/onebox/reset',
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    console.log('data reset successfully.', res.data);
  }

  useEffect(() => {

    const fetchData = async () => {
      try {
        let res = await axios.get(
          'https://hiring.reachinbox.xyz/api/v1/onebox/list',
          { headers: { Authorization: `Bearer ${jwt}` } }
        );
        setMails(res.data.data);
        console.log(res.data);
      } catch (error) {
        console.error('Error in fetching data', error);
      }
    };
    fetchData();
  }, [router, jwt]);

  

  const handleMailClick = (threadId: number) => {
    setSelectedThreadId(threadId);
  };

  return (
    <div className="h-[inherit]">
      <div className="flex justify-between">
        <div className="flex text-blue-500 items-center justify-around">
          <h1 className="font-bold text-2xl">All Inbox(s)</h1>
          <SlArrowDown className="ml-3" />
        </div>
        <div className="p-2">
          <button className="flex justify-center items-center size-10 border-2 dark:bg-medium border-gray-400 rounded text-center">
            <IoReload className="size-6 text-slate-800 dark:text-white" onClick={RestoreData} />
          </button>
        </div>
      </div>
      <div className="font-normal text-slate-700">
        <p className="font-semibold dark:text-white">
          25/25
          <span className="text-gray-500 font-mono"> Inboxes selected</span>
        </p>
      </div>
      <div className="p-4 px-0">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 border rounded bg-[#F4F6F8] dark:bg-[#23272C] border-[#ECEFF1] dark:border-[#292D32]"
        />
      </div>
      <div className="flex justify-between">
        <p>
          <span className="p-2 text-[#5775E8] rounded-xl bg-[#222426]">26</span>{' '}
          New Replies
        </p>
        <h3 className="flex justify-center items-center gap-3">
          Newest
          <SlArrowDown className="" />
        </h3>
      </div>

      <div className="mt-5">
        {mails.map((i) => {
          return (
            <div
              key={i.id}
              onClick={() => handleMailClick(i.threadId)}
              className={`p-4 dark:border-t-2 dark:border-t-[#191C1F] cursor-pointer ${
                selectedThreadId === i.threadId
                  ? 'text-black dark:text-[#F4FAFF] border-l-2 border-[#5C7CFA]'
                  : ''
              }`}
            >
              <div className="font-extrabold">{i.fromEmail}</div>
              <div className="font-light">{i.subject}</div>

              <div
                className={`text-xs font-extralight ${
                  i.inReplyTo === 'Closed' ? 'text-[#626FE6] rounded-lg' : ''
                }`}
              >
                {i.sentAt}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MailList;
