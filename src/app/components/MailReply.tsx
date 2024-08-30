import axios from 'axios';
import { headers } from 'next/headers';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { RxCross1 } from 'react-icons/rx';

interface MailReply {
  toName: string;
  to: string;
  from: string;
  fromName: string;
  thread: number;
  subject: string;
  references: [];
  inReplyTo: string;
  body: string;
}

interface MailReplyProps {
  data: MailReply;
  thread: any;
  onCancel: () => void;
}

const MailReply = ({ data, thread, onCancel }: MailReplyProps) => {
  const router = useRouter();
  console.log(data);
  // const [reply, setReply] = useState(data);
  const [postData, setPostData] = useState<any>(null);
  const [token, setToken] = useState<string | null>(null);

  const handleChange = (e: any) => {
    console.log("e.target.name", e.target.name)
  setPostData({
      "toName": "Mitrajit",
      "to": "chandra.rupam@gmail.com",
      "from": "mitrajit2022@gmail.com",
      "fromName": "Mitrajit",
      "subject": "My Subject",
      "body": "<p>Hello world !!!</p>",
      "references": [
          "<dea5a0c2-336f-1dc3-4994-191a0ad3891a@gmail.com>",
          "<CAN5Dvwu24av80BmEg9ZVDWaP2+hTOrBQn9KhjfFkZZX_Do88FA@mail.gmail.com>",
          "<CAN5DvwuzPAhoBEpQGRUOFqZF5erXc=B98Ew_5zbHF5dmeKWZMQ@mail.gmail.com>",
          "<a1383d57-fdee-60c0-d46f-6bc440409e84@gmail.com>"
      ],
      "inReplyTo": "<a1383d57-fdee-60c0-d46f-6bc440409e84@gmail.com>"
    });
  };

  useEffect(()=> {
    const jwt = localStorage.getItem('token');
    console.log('Token is found.');
    setToken(jwt);
    if (!jwt) {
      router.push('/login');
    }
  }, [router])


  const handleSend = async () => {
    try {
      const res = await axios.post(
        `https://hiring.reachinbox.xyz/api/v1/onebox/reply/${thread}`,
        postData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
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
        <RxCross1 onClick={() => onCancel()} />
      </div>
      <div className="p-4 container bg-[#ECEFF3] dark:bg-[#141517] border-[#24262A] rounded-b-lg">
        <div className="flex items-center mt-2">
          <label className="block text-sm dark:text-[#7C7C7F]">To:</label>
          <input
            name='to'
            type="text"
            placeholder="Receipient Mail"
            onChange={handleChange}
            value={data?.to}
            className="w-full p-2 ml-2 text-[#94979B] dark:text-gray-100 rounded dark:bg-[#141517]"
          />
        </div>
        <hr />
        <div className="flex items-center mt-2">
          <label className="block text-sm dark:text-[#7C7C7F]">From:</label>
          <input
          name= 'from'
            type="text"
            placeholder="Sender Mail"
            onChange={handleChange}
            value={data?.from}
            className="w-full p-2 ml-2 text-[#94979B] dark:text-gray-100 dark:bg-[#141517] rounded"
          />
        </div>
        <hr />
        <div className="flex items-center mt-2">
          <label className="block text-sm dark:text-[#7C7C7F]">Subject:</label>
          <input
            name= 'subject'
            type="text"
            onChange={handleChange}
            value={data?.subject}
            className="w-full p-2 ml-2 text-[#94979B] dark:text-gray-100 dark:bg-[#141517] rounded"
          />
        </div>
        <hr />
        <div className="flex items-center mt-2">
          <textarea
            name='body'
            placeholder="Type Your Message here..."
            onChange={handleChange}
            value={data?.body}
            className="w-full dark:text-gray-100 text-[#94979B] dark:bg-[#141517] p-2 border rounded h-32"
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
