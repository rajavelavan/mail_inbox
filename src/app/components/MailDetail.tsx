import React, { useState, useEffect } from 'react';
import MailReply from './MailReply';
import axios from 'axios';
import { SlArrowDown } from 'react-icons/sl';
import { FiMoreHorizontal } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import MainHeader from './Main-Header';

interface MailDetailProps {
  fromEmail: string;
  toEmail: string;
  threadId: number;
  subject: string;
  body: string;
}

const MailDetail = () => {
  const router = useRouter();
  const [isReplying, setIsReplying] = useState<boolean>(false);
  const [content, setContent] = useState<any>(null);
  useEffect(() => {
    const jwt = localStorage.getItem('token');
    console.log('Token is found.');
    if (!jwt) {
      router.push('/login');
    }

    const fetchData = async () => {
      try {
        let res = await axios.get(
          'https://hiring.reachinbox.xyz/api/v1/onebox/messages/52957',
          { headers: { Authorization: `Bearer ${jwt}` } }
        );
        setContent(res.data.data);
        console.log(res.data);
      } catch (error) {
        console.error('Error in fetching data', error);
      }
    };
    fetchData();
  }, [router]);

  const handleReplyClick = () => {
    setIsReplying(true);
  };
  return (
    <div className="w-full">
      <MainHeader />
      <div>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-full mx-4 h-px my-8 bg-[#E7E9EB] border-0 dark:bg-[#191919]" />
          <span className="absolute p-2 text-xs dark:text-white text-[#687885] bg-[#EEF1F4] dark:bg-[#171819] rounded-lg">
            yesterday
          </span>
        </div>
        {content &&
          content.map((item: any, index: number) => (
            <React.Fragment key={`${index}`}>
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

        {/* <div className="">
          <div className="flex items-center my-4 p-2">
            <div className="flex-grow border-t-2 ml-4 dark:bg-[#191919]" />
            <span className="text-xs p-2 text-[#687885] bg-[#EEF1F4] dark:bg-[#171819]">
              Today
            </span>
            <div className="flex-grow border-t-2 mr-4 dark:bg-[#171819]" />
          </div>
          <div className="p-4">
            <div className="container bg-[#F9F9F9] dark:bg-[#141517] p-4 border rounded-lg max-h-80 overflow-auto">
              <h2 className="text-xl text-black dark:text-white font-normal">
                {subject}
              </h2>
              <h3 className="text-gray-500">From: {fromEmail}</h3>
              <h3 className="text-gray-500 text-sm">To: {toEmail}</h3>
              <div className="mb-4 text-[#334562] dark:text-gray-100">
                {body}
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="p-4 fixed w-[58%] bottom-4">
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
              sender={content.toEmail}
              receipient={content.fromEmail}
              subject={`Re:${content.subject}`}
              body=""
              onCancel={() => setIsReplying(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MailDetail;
