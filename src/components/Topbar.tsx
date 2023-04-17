// components/TopBar.js

import React from "react";
import { FaHome } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center bg-blue-500 p-2">
      <div className="flex items-center space-x-2">
        {/* <img src="/logo.png" alt="Logo" className="h-6 w-6" /> */}
        <span className="text-white font-bold text-lg">App Name</span>
      </div>
      <div>
        <button className="bg-white rounded-full p-2">
          <FaHome className="h-6 w-6 text-green-500" />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
