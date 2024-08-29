import axios from 'axios';
import React, { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';

interface MailReply {
  sender: string;
  receipient: string;
  subject: string;
  body: string;
}

interface MailReplyProps {
  onCancel: () => void;
}

const MailReply = ({
  sender,
  receipient,
  subject,
  body}: MailReply,
  {onCancel,
}: MailReplyProps) => {

  const [reply, setReply] = useState({sender: '', receipient: '', subject: `${subject}`, body: ''});

  const handleChange = (e:any) => {
    const {name,value} = e.target;
    setReply((prevReply)=>({ ...prevReply, [name]: value }));
  };

  const handleSend = async () => {
    try {
      const res = await axios.post(`https://hiring.reachinbox.xyz/api/v1/onebox/reply/58791`, reply);
      console.log('Yes', res.data);
      onCancel(); // Close the reply form after sending
    } catch (error: any) {
      console.log('No', error.message);
    }
  };

  return (
    <div className="bg-white dark:bg-[#23272C] text-black rounded-lg">
      <div className="flex p-4 items-center dark:text-[#B1B0B4] justify-between">
        <h1>Reply</h1>
        <RxCross1 onClick={() => onCancel()} className=''/>
      </div>
      <div className="p-4 container bg-[#ECEFF3] dark:bg-[#141517] border-[#24262A] rounded-b-lg">
        <div className="flex items-center mt-2">
          <label className="block text-sm dark:text-[#7C7C7F]">To:</label>
          <input
            type='text'
            placeholder={receipient}
            onChange={handleChange}
            value={reply?.receipient}
            className="w-full p-2 ml-2 text-[#94979B] dark:text-gray-100 rounded dark:bg-[#141517]"
          />
        </div>
        <hr/>
        <div className="flex items-center mt-2">
          <label className="block text-sm dark:text-[#7C7C7F]">From:</label>
          <input
            type="text"
            placeholder={sender}
            onChange={handleChange}
            value={reply?.sender}
            readOnly
            className="w-full p-2 ml-2 text-[#94979B] dark:text-gray-100 dark:bg-[#141517] rounded"
          />
        </div>
        <hr/>
        <div className="flex items-center mt-2">
          <label className="block text-sm dark:text-[#7C7C7F]">Subject:</label>
          <input
            type="text"
            onChange ={handleChange}
            value={reply?.subject}
            className="w-full p-2 ml-2 text-[#94979B] dark:text-gray-100 dark:bg-[#141517] rounded"
          />
        </div>
        <hr/>
        <div className="flex items-center mt-2">
          <textarea
            placeholder="Type Your Message here..."
            onChange={handleChange}
            value={reply?.body}
            className="w-full dark:text-gray-100 dark:bg-[#141517] p-2 border rounded h-32"
          />
        </div>
        <div className="flex space-x-4 mt-3">
          <button
            onClick={handleSend}
            className="p-2 bg-blue-500 text-white rounded"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default MailReply;
