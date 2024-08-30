import React, { useState, useEffect } from 'react';
import MailReply from './MailReply';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import MainHeader from './Main-Header';

interface MailDetail {
  fromEmail: string;
  toEmail: string;
  threadId: number;
  updatedAt: Date;
  subject: string;
  body: string;
}

interface MailDetailProps {
  thread : any;
}

const MailDetail = ({thread}: MailDetailProps) => {
  const router = useRouter();
  const [isReplying, setIsReplying] = useState<boolean>(false);
  const [content, setContent] = useState<any>(null);

  console.log(content);

  
  useEffect(() => {
    const jwt = localStorage.getItem('token');
    console.log('Token is found.');
    if (!jwt) {
      router.push('/login');
    }

    const fetchData = async () => {
      try {
        let res = await axios.get(
          `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${thread}`,
          { headers: { Authorization: `Bearer ${jwt}` } }
        );
        setContent(res.data.data);
        console.log(res.data);
      } catch (error) {
        console.error('Error in fetching data', error);
      }
    };
    fetchData();
  }, [router, thread]);

  const handleReplyClick = () => {
    setIsReplying(true);
  };

  useEffect(() => {
    const handleReply = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'r') {
        e.preventDefault();
        setIsReplying(true);
      }
    };
    window.addEventListener('keydown', handleReply);
    return () => {
      window.removeEventListener('keydown', handleReply);
    };
  }, []);
  return (
    <div className="w-full">
      <MainHeader />
      <div>
        {content &&
          content.map((item: any, index: number) => (
            <React.Fragment key={`${index}`}>
              <div className="inline-flex items-center justify-center w-full">
                <hr className="w-full mx-4 h-px my-8 bg-[#E7E9EB] border-0 dark:bg-[#191919]" />
                <span className="absolute p-2 text-xs dark:text-white text-[#687885] bg-[#EEF1F4] dark:bg-[#171819] rounded-lg">
                  {new Date(item?.updatedAt).toLocaleDateString('en-US', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                  })}
                </span>
              </div>
              <div className="p-4">
                <div className="container text-left bg-[#F9F9F9] dark:bg-[#141517] p-4 border rounded-lg max-h-80 overflow-auto">
                  <h2 className="text-xl text-black dark:text-white font-normal">
                    {item?.subject}
                  </h2>
                  <h3 className="text-gray-500">From: {item?.fromEmail}</h3>
                  <h3 className="text-gray-500 text-sm">To: {item?.toEmail}</h3>
                  <div className="mb-4 text-[#334562] dark:text-gray-100">
                    <div dangerouslySetInnerHTML={{ __html: item?.body }} />
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
      </div>
      <div className="p-2 w-[57.5%] fixed bottom-4">
        {!isReplying ? (
          <button
            onClickCapture={handleReplyClick}
            className="mt-2 p-2 left-4 bg-blue-500 text-white rounded"
          >
            Reply
          </button>
        ) : (
          <div className="">
            <MailReply
              data={content}
              thread= {thread}
              onCancel={() => setIsReplying(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MailDetail;
