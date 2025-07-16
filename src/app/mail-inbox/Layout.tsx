'use client';

import React, { ReactNode } from 'react';
import Sidebar from '../components/SideBar';
import Header from '../components/NavBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex overflow-hidden">
      <div className="w-[4%] h-full">
        <Sidebar />
      </div>
      <div className="w-[96%] h-full">
        <div className='w-full'>
        <Header />
        </div>
      <main className='w-full max-h-full overflow-auto'>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
