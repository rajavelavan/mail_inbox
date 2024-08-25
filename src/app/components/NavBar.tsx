'use client';

import { SlArrowDown } from 'react-icons/sl';
import ThemeToggle from './ThemeToggle';
export default function Navbar() {
  return (
    <div className="flex items-center h-[10%] dark:bg-medium justify-between border-b-2 w-full">
      <div className="flex items-center justify-between rounded p-3">
        <h1 className="font-bold dark:text-white text-[#5B5F66] pl-6">
          OneBox
        </h1>
      </div>
      <div className="flex items-center justify-between p-5 gap-10 rounded">
        <div className="flex items-center">
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-2 text-md rounded dark:text-white text-[#6E767F]">
          <h3>Raja Workspace</h3>
          <SlArrowDown />
        </div>
      </div>
    </div>
  );
}
