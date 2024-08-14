'use client'
import { useState } from 'react';
import { FaHome, FaUser, FaEnvelope, FaTelegramPlane, FaTable, FaChartBar, FaPalette, FaFolder } from 'react-icons/fa';

export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { icon: FaHome, link: '#home' },
    { icon: FaUser, link: '#user' },
    { icon: FaEnvelope, link: '#messages' },
    { icon: FaTelegramPlane, link: '#send' },
    { icon: FaPalette, link: '#palette' },
    { icon: FaFolder, link: '#folder' }, 
    { icon: FaChartBar, link: '#analytics' },
  ];

  return (
    <aside className="w-16 bg-white text-gray-500 dark:bg-black border-r-2 h-screen flex flex-col justify-between py-4 items-center">
      <div className="flex flex-col items-center space-y-8">
        {/* Menu Items */}
        <nav className="flex flex-col space-y-6">
          {menuItems.map((item, index) => (
            <a
              href={item.link}
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative p-3 rounded-lg flex items-center justify-center ${
                activeIndex === index ? 'bg-gray-200' : ''
              } hover:bg-gray-200`}
            >
              <item.icon className="w-6 h-6" />
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}


