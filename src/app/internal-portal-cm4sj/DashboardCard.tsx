'use client';

import React from 'react';

interface DashboardCardProps {
  title: string;
  value: string | number;
}

export default function DashboardCard({ title, value }: DashboardCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-gray-700 font-semibold text-lg">{title}</h2>
      <p className="text-black text-2xl mt-2">{value}</p>
    </div>
  );
}
