'use client';
import { useState } from 'react';
import {
  FaHome,
  FaUser,
  FaEnvelope,
  FaTelegramPlane,
  FaTable,
  FaChartBar,
  FaInbox,
} from 'react-icons/fa';
import { RiUserSearchLine } from 'react-icons/ri';
import { TfiMenuAlt } from 'react-icons/tfi';

export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { icon: FaHome, link: '#home' },
    { icon: RiUserSearchLine, link: '#user' },
    { icon: FaEnvelope, link: '#messages' },
    { icon: FaTelegramPlane, link: '#send' },
    { icon: TfiMenuAlt, link: '#menu' },
    { icon: FaInbox, link: '#mails' },
    { icon: FaChartBar, link: '#analytics' },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-white text-gray-500 dark:bg-[#101113] border-r-2 h-screen">
      <div>img</div>
      <div className="flex flex-col items-center space-y-4 gap-5">
        {menuItems.map((item, index) => (
          <a
            href={item.link}
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`p-3 flex items-center justify-center rounded-lg ${
              activeIndex === index ? 'bg-gray-200' : ''
            } hover:bg-gray-200`}
          >
            <item.icon className="w-6 h-6" />
          </a>
        ))}
      </div>
    </div>
  );
}
