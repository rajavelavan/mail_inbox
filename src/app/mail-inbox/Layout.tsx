'use client'

import React, { ReactNode } from 'react';
import Sidebar from '../components/SideBar';
import Header from '../components/NavBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='flex'>
      <div className='w-[4%]'>
        <Sidebar/>
      </div>
      <div className='w-[96%]'>
        <Header/>
        <div>
          <main className=''>{children}</main>
        </div>
      </div>
    </div> 
  )};

export default Layout;


