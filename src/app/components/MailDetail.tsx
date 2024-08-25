import React, { useState } from 'react';
import MailReply from './MailReply';
import { SlArrowDown } from 'react-icons/sl';
import { FiMoreHorizontal } from 'react-icons/fi';

interface MailDetailProps {
  fromEmail: string;
  toEmail: string;
  subject: string;
  body: string;
}

const MailDetail: React.FC<MailDetailProps> = ({
  fromEmail,
  toEmail,
  subject,
  body,
}) => {
  const [isReplying, setIsReplying] = useState<boolean>(false);

  const handleReplyClick = () => {
    setIsReplying(true);
  };
  return (
    <div className="">
      <div>
        <div className="flex p-3 w-full items-center justify-between dark:bg-black bg-white border-b-2 border-[#ECECED]">
          <div className="text-black font-bold">
            <p className="dark:text-white">Orlando</p>
            <span className="text-xs text-[#94979B]">orlando@gmail.com</span>
          </div>
          <div className="flex gap-4 items-center justify-center text-[#3F4F6B] border-[#F3F5F6] dark:border-[#1B1C1D] dark:text-[#D3D7DB]">
            <div className="flex rounded-lg border-2 dark:bg-medium">
              <p className="p-1">Meeting Completed</p>
              <SlArrowDown className=" size-7 mt-1 px-2" />
            </div>
            <div className="flex rounded-lg border-2 dark:bg-medium">
              <p className="p-1">Move</p>
              <SlArrowDown className="size-7 mt-1 px-2" />
            </div>
            <div className="flex p-1 rounded-lg border-2 dark:bg-medium">
              <FiMoreHorizontal className="size-6 px-1" />
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-auto">
        <div className="flex items-center my-4 p-2">
          <div className="flex-grow border-t-2 ml-4 dark:bg-[#191919]" />
          <span className="text-xs p-2 text-[#687885] bg-[#EEF1F4] dark:bg-[#171819]">
            Yesterday
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
            <div className="mb-4 text-[#334562] dark:text-gray-100">{body}</div>
          </div>
        </div>

        <div className="">
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
        </div>
      </div>
      <div className="p-4 fixed w-[58%] bottom-4">
        {!isReplying ? (
          <button
            onClickCapture={handleReplyClick}
            className="mt-2 p-2 bg-blue-500 text-white rounded"
          >
            Reply
          </button>
        ) : (
          <div className="">
            <MailReply
              sender={toEmail}
              receipient={fromEmail}
              subject={`Re:${subject}`}
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
