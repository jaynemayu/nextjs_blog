'use client';

import { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import BlogPost from '@/components/blog-post';
import NavBar from '@/components/nav-bar';

const Dashboard = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex flex-row min-h-screen justify-between p-24 divide-x divide-gray-300">
      {/* Navbar */}
      <NavBar />
      

      {/* Main Content */}
      <div className="flex-grow p-4">
        {[...Array(4)].map((_, i) => (
          <BlogPost
            key={i}
            username={`username ${i + 1}`}
            num={i + 1}
          />
        ))}
      </div>

      {/* Right panel */}
      <div className="relative w-1/4 p-4">
        <IoSearch
          className={`absolute h-6 w-6 text-gray-300 inset-6 left-6 text-gray-${isFocused ? '800' : '300'}`}
        />
        <input
          type="text"
          placeholder="Search Blogr"
          id="search"
          name="search"
          className="border border-gray-300 rounded p-2 pl-10 outline-0 placeholder-gray-300 text-gray-300 focus:text-gray-800 bg-zinc-100 focus:bg-white"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
    </div>
  );
};

export default Dashboard;