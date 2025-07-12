import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold">Stevens Flock</div>

      {/* Navigation */}
      <div className="flex space-x-6 items-center relative">
        {/* HOME Dropdown */}
        <div className="relative group">
          <Link href="/" className="hover:text-blue-600 text-blue-700">
            Home ▾
          </Link>
          <div className="absolute bg-white border rounded shadow-lg top-full mt-2 py-2 w-40 z-10 hidden group-hover:block">
            <a
              href={router.pathname === '/' ? "#mission" : "/#mission"}
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Our Mission
            </a>
            <a
              href={router.pathname === '/' ? "#contact" : "/#contact"}
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* SPORTS Dropdown */}
        <div className="relative group">
          <button className="hover:text-blue-600">Sports ▾</button>
          <div className="absolute bg-white border rounded shadow-lg top-full mt-2 py-2 w-40 z-10 hidden group-hover:block">
            <Link href="/sports?type=basketball" className="block px-4 py-2 hover:bg-gray-100">
              Basketball
            </Link>
            <Link href="/sports?type=soccer" className="block px-4 py-2 hover:bg-gray-100">
              Soccer
            </Link>
            <Link href="/sports?type=swimming" className="block px-4 py-2 hover:bg-gray-100">
              Swimming
            </Link>
          </div>
        </div>

        {/* PROFILE */}
        <Link href="/profile" className="hover:text-blue-600">
          Profile
        </Link>
      </div>
    </nav>
  );
}
