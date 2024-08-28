import React from 'react';
import { SlArrowDown } from 'react-icons/sl';
import { FiMoreHorizontal } from 'react-icons/fi';

export default function MainHeader() {
  return (
    <div className="flex sticky w-full items-center justify-between dark:bg-black p-3 bg-white border-b-2 border-[#ECECED]">
      <div className="text-black font-bold text-left">
        <p className="dark:text-white">Orlando</p>
        <span className="text-xs text-[#94979B]">orlando@gmail.com</span>
      </div>
      <div className="flex items-center justify-center gap-4 text-[#3F4F6B] border-[#F3F5F6] dark:border-[#1B1C1D] dark:text-[#D3D7DB]">
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
  );
}
