'use client';

import React from 'react';

export default function Header({user}) {
  console.log(user    );
  
  return (
    <header className="bg-white shadow-md w-full h-16 flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold text-black">Hello, {user.name}</h1>
      <div className="flex items-center">
        {/* Add other elements like notifications, search etc. here */}
        <div className="text-gray-500">Notifications</div>
      </div>
    </header>
  );
}