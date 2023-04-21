// components/TopBar.js
import Image from "next/image";

import React from "react";
import { FaHome } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center bg-blue-500 p-2 px-4">
      <div className="flex items-center space-x-2">
        <Image src="/logo.webp" alt="Logo" className="h-8 w-40"      width={500}
      height={100} />
        {/* <span className="text-white font-bold text-lg">App Name</span> */}
      </div>
      <div>
        <button className="bg-white rounded-full p-2">
          <a href="http://fdl/">
          <FaHome className="h-3 w-3 text-green-500" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
