import Link from 'next/link';
import React from "react";
import MenuItem from './MenuItem';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import DarkModeSwitch from './DarkModeSwitch';

export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
      <div className="flex gap-4">
        <MenuItem title="home" address="/home" Icon={AiFillHome}></MenuItem>
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill}></MenuItem>
      </div>
      <div className='flex items-center gap-4'>
        <DarkModeSwitch/>
      <Link href={'/'} className='flex gap-1 items-center'>
        <span className='text-xl font-bold bg-blue-500 p-2 rounded-lg'>IMDb</span>
        <span className='text-xl font-bold hidden sm:inline'>Clone</span>
      </Link>
    </div>
  </div>
  );
}
