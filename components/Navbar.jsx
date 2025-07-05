import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const sportsList = [
    'Soccer',
    'Basketball',
    'Lacrosse',
    'Tennis',
    'Track',
    'Swimming',
    'Volleyball',
    'Wrestling',
  ];

  return (
    <nav className="flex gap-6 p-4 shadow-md bg-white relative z-10">
      {/* Home */}
      <Link href="/" className="hover:underline cursor-pointer py-2 px-1">
        Home
      </Link>

      {/* History */}
      <Link href="/history" className="hover:underline cursor-pointer py-2 px-1">
        History
      </Link>

      {/* Sports Dropdown */}
      <div
        className="relative py-2 px-1"
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <span className="hover:underline cursor-pointer">Sports ▾</span>

        {showDropdown && (
          <div className="absolute left-0 top-full bg-white shadow-lg border rounded mt-1 py-2 w-48 z-20">
            {sportsList.map((sport) => (
              <Link
                key={sport}
                href={`/sports/${sport.toLowerCase()}`}
                className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
              >
                {sport}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
