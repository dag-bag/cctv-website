import React from "react";

import Image from "next/image";
export default function Card({ src, Icon }) {
  return (
    <div>
      <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:scale-110 transition-all duration-300 group">
        <div className="relative w-full h-56">
          <Image
            className="object-cover "
            src={src}
            alt="avatar"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="p-5 flex items-center space-x-3 group-hover:text-purple-500">
          <Icon className="text-2xl" />
          <div>
            <span className="text-sm text-gray-700  group-hover:text-purple-500">
              Access Control System
            </span>
            <span className="block text-base font-bold text-gray-800  group-hover:text-purple-500">
              FINGERPRINT ACCESS SYSTEM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
