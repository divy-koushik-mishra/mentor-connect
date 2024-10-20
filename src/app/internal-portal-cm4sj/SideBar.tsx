'use client';

import { useRouter } from 'next/navigation';
import { Home, Settings, Users, GraduationCap, Calendar, LogOut } from 'lucide-react';

export default function Sidebar({ handleLogout }: { handleLogout: () => void }) {
  const router = useRouter();

  const menuItems = [
    { name: 'Dashboard', icon: Home, path: '/internal-portal-cm4sj/' },
    { name: 'Mentors', icon: Users, path: '/internal-portal-cm4sj/mentors' },
    { name: 'Students', icon: GraduationCap, path: '/internal-portal-cm4sj/students' },
    { name: 'Schedule', icon: Calendar, path: '/internal-portal-cm4sj/schedule' },
    { name: 'Settings', icon: Settings, path: '/internal-portal-cm4sj/settings' },
  ];

  return (
    <aside className="bg-gradient-to-b from-blue-900 to-indigo-900 text-white h-screen w-64 fixed top-0 left-0 flex flex-col justify-between shadow-xl">
      <div>
        <div className="p-6 text-2xl font-bold text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Admin Portal
          </span>
        </div>
        <nav className="flex flex-col space-y-2 p-4">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => router.push(item.path)}
              className="flex items-center space-x-3 text-white hover:bg-indigo-700 p-3 rounded-lg transition-all duration-200 ease-in-out"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </button>
          ))}
        </nav>
      </div>
      <div className="p-6">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center space-x-2 text-white bg-red-500 hover:bg-red-600 p-3 rounded-lg transition-all duration-200 ease-in-out"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}