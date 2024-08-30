'use client';

import { useEffect, useState } from 'react';
import Layout from './Layout';
import InboxSidebar from '../components/InboxSidebar';
import MailList from '../components/MailList';
import MailDetail from '../components/MailDetail';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Main() {
  const router = useRouter();
  const [selectedThreadId, setSelectedThreadId] = useState<number | null>();
  const [token, setToken] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = (threadId: number) => {
    console.log('Mail selected.')
    setSelectedThreadId(threadId);
  }

  
  async function deleteData(confirmed: boolean) {
    
    if (confirmed && token) {
      try {
        const res = await axios.delete(
          `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${selectedThreadId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log('Deletion success.', res.data);
      } catch (error) {
        console.error('Error deleting data:', error);
      }
    }
    setShowPopup(false);
  }
  
  
  useEffect(() => {
    const jwt = localStorage.getItem('token');
      console.log('Token is found.');
      setToken(jwt);
      if (!jwt) {
        router.push('/login');
      }
    const handleDelete = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'd') {
        e.preventDefault();
        setShowPopup(true);
      }
    };
    window.addEventListener('keydown', handleDelete);
    return () => {
      window.removeEventListener('keydown', handleDelete);
    };
  }, [router]);


  return (
    <Layout>
      <div className="flex h-[90%]">
        <div className="text-black dark:text-white bg-[#FAFAFA] dark:bg-black border-r-2 border-[#d9d9d9] w-[20%] px-4 py-4">
          <MailList onMailSelect={handleClick}/>
        </div>
        <div className="flex text-center w-[60%] bg-[#F4F6F8] border-r-2 border-[#d9d9d9] dark:bg-black">
          {!selectedThreadId ? (
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
            <MailDetail thread={selectedThreadId} />
          )}
        </div>
        <div className="p-4 bg-[#F9F9F9] text-black dark:bg-black dark:text-white border-l-2 flex flex-col w-[20%]">
          <InboxSidebar />
        </div>
        {showPopup && (
          <div className="relative inline-block">
            <div className="fixed inset-0 z-50 bg-gray-500 bg-opacity-50 h-screen px-4 md:px-8">
              <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto shadow-lg rounded-md bg-white overflow-hidden">
                <div className="p-6 text-center">
                  <h1 className="text-xl font-bold text-gray-800">
                    Confirm Delete
                  </h1>
                  <p className="mt-2 text-sm text-gray-700">
                    Are you sure you want to delete this item?
                  </p>
                </div>
                <div className="flex justify-center items-center p-3 space-x-4">
                  <button
                    className="inline-flex justify-center px-4 py-2 text-sm text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none"
                    onClick={() => deleteData(true)}
                  >
                    Yes
                  </button>
                  <button
                    className="inline-flex justify-center px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
                    onClick={() => deleteData(false)}
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
