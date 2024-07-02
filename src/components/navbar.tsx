'use client';

import { useState } from 'react';
import {
  ChevronDownIcon,
  PhoneIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <nav className="bg-white border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="#" className="flex items-center ">
          <Image
            src="/icons/bakso-logo.svg"
            alt="bakso logo"
            width={200}
            height={100}
            className=" px-8"
          />
          ||
          <Image
            src={'/images/Logo-Profdesain.png'}
            alt=""
            width={200}
            height={100}
            className=""
          />
        </Link>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className="hidden w-full md:block md:w-auto"
          id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-black  md:dark:bg-transparent hover:text-red-600"
                aria-current="page">
                Home
              </Link>
            </li>
            <li>
              <button
                className=" py-2 px-3 text-black flex flex-row items-center hover:text-red-600"
                aria-current="page"
                onClick={() => setDropdown(!dropdown)}>
                Menu{' '}
                <ChevronDownIcon className="size-4 font-bold text-red-500" />
              </button>
              <div
                id="dropdownNavbar"
                className={`z-10 ${
                  dropdown ? 'block' : 'hidden'
                }  absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}>
                <ul
                  className="py-2 text-sm text-black dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton">
                  <li>
                    <a
                      href="#foods"
                      onClick={() => setDropdown(!dropdown)}
                      className="block px-4 py-2  hover:text-red-600">
                      Bakso
                    </a>
                  </li>
                  <li>
                    <a
                      href="#foods"
                      onClick={() => setDropdown(!dropdown)}
                      className="block px-4 py-2  hover:text-red-600">
                      Mie Ayam
                    </a>
                  </li>
                  <li>
                    <a
                      href="#foods"
                      onClick={() => setDropdown(!dropdown)}
                      className="block px-4 py-2  hover:text-red-600">
                      Minuman
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="#services"
                className="block py-2 px-3 text-black hover:text-red-600"
                aria-current="page">
                Layanan
              </a>
            </li>
            <li>
              <Link href={'/order'}>
                <button
                  type="button"
                  className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm text-center inline-flex items-center me-2 py-2 px-3 gap-2">
                  <PhoneIcon className="size-4 text-white" />
                  Order
                </button>
              </Link>{' '}
              <Link href={'/login'}>
                <button
                  type="button"
                  className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm text-center inline-flex items-center me-2 py-2 px-3 gap-2">
                  <UserIcon className="size-4 text-white" />
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
