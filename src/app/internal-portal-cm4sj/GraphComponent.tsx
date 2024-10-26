'use client';

import React from 'react';

export default function GraphComponent() {
  return (
    <div className="bg-white  rounded-lg p-6 mt-6">
      <h2 className="text-gray-700 font-semibold text-lg mb-4">Performance Graph</h2>
      {/* Placeholder for actual graph */}
      <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
        <span className="text-gray-500">Graph goes here</span>
      </div>
    </div>
  );
}

