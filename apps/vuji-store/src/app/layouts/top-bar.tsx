'use client';

import { useState } from 'react';

export function TopBar() {
  const [language, setLanguage] = useState('English');
  const [currency, setCurrency] = useState('USD');

  return (
    <div className="hidden items-center justify-between bg-black px-4 py-2 text-sm text-white md:flex lg:px-16">
      <div>Welcome to Vuji Online Store!</div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          <span>Language:</span>
          <select
            aria-label="Select language"
            className="cursor-pointer border-none bg-transparent outline-none"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="English">English</option>
            <option value="Vietnamese">Vietnamese</option>
            <option value="French">French</option>
          </select>
        </div>

        <div className="flex items-center space-x-1">
          <span>Currency:</span>
          <select
            aria-label="Select currency"
            className="cursor-pointer border-none bg-transparent outline-none"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="VND">VND</option>
          </select>
        </div>

        <span className="h-4 w-px bg-gray-400"></span>

        <div className="flex items-center space-x-3">
          <a href="#" className="hover:underline">
            Sign In
          </a>
          <a href="#" className="hover:underline">
            Register
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
