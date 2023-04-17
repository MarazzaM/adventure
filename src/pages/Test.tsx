// pages/index.js

import React from "react";
import Head from "next/head";
import { FaVideo, FaPhone, FaEllipsisV, FaArrowLeft } from "react-icons/fa";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { GoVerified } from "react-icons/go";

export default function Home() {
  return (
    <div>
      <Head>
        <title>WhatsApp UI Chat</title>
      </Head>
      <div className="flex justify-center items-center h-screen">
        <div className="max-w-lg rounded-2xl overflow-hidden shadow-lg bg-gray-100 w-full">
          <div className="bg-[#075E54] p-3 flex items-center justify-between rounded-t-2xl">
          <div className="flex flex-row justify-center items-center">
          <FaArrowLeft className="h-6 w-6 text-white p-1" />
          <img
                className="h-8 w-8 rounded-full"
                src="/back.jpg"
                alt="Avatar 1"
              />
          </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl text-white font-bold">WhatsApp</span>
              <GoVerified className="h-6 w-6 text-[#25D366]" />
            </div>
            <div className="flex items-center space-x-2">
              
              <FaVideo className="h-6 w-6 text-white" />
              <FaPhone className="h-6 w-6 text-white" />
              <FaEllipsisV className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="flex-grow overflow-y-auto">
            {/* Chat messages here */}
            <div className="flex flex-col space-y-2 p-4">
              <div className="flex items-center self-start space-x-2">
                <img
                  className="h-8 w-8 rounded-full"
                  src="/back.jpg"
                  alt="Avatar 1"
                />
                <div className="bg-white rounded-lg p-2">
                  <p className="font-medium">Hi there!</p>
                  <p>How are you doing?</p>
                </div>
              </div>
              <div className="flex items-center self-end space-x-2">
                <div className="bg-green-500 rounded-lg p-2">
                  <p className="font-medium text-white">Great, thanks!</p>
                  <p className="text-white">How about you?</p>
                </div>
                <img
                  className="h-8 w-8 rounded-full"
                  src="/back.jpg"
                  alt="Avatar 2"
                />
              </div>
              {/* More chat messages here */}
            </div>
          </div>
          <div className="flex items-center justify-center bg-gray-200 p-4">
            <input
              className="rounded-full px-4 py-2 w-full max-w-lg border-2 border-gray-300 focus:outline-none"
              type="text"
              placeholder="Type a message..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
