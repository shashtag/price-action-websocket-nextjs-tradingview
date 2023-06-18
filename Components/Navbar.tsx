"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className=' bg-gray-800  border-b-[1px] border-gray-700 shadow-2xl'>
      <div className='flex items-center justify-between mx-auto p-4'>
        <Link href='/' className='text-2xl font-semibold'>
          Price Tracker
        </Link>
        <ul className='font-medium flex md:space-x-10'>
          <li>
            <Link
              href='/phase1'
              className={`block hover:text-blue-500 ${
                pathname == "/phase1" ? "text-blue-500" : null
              }`}>
              Phase 1
            </Link>
          </li>
          <li>
            <a
              href='/phase2'
              className={`block hover:text-blue-500 ${
                pathname == "/phase2" ? "text-blue-500" : null
              }`}>
              Phase 2
            </a>
          </li>
          <li>
            <a
              href='/phase3'
              className={`block hover:text-blue-500 ${
                pathname == "/phase3" ? "text-blue-500" : null
              }`}>
              Phase 3
            </a>
          </li>
          <li>
            <a
              href='/phase4'
              className={`block hover:text-blue-500 ${
                pathname == "/phase4" ? "text-blue-500" : null
              }`}>
              Phase 4
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
