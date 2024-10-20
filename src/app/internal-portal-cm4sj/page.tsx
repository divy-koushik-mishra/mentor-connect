'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser, isLoggedIn, logout } from '@/lib/appwrite';
import Sidebar from './SideBar';
import Header from './AdminHeader';
import DashboardCard from './DashboardCard';
import GraphComponent from './GraphComponent';
// import Header from '@/components/Header';

interface User {
    $id: string;
  $createdAt: string;
  $updatedAt: string;
  name: string;
  email: string;
  emailVerification: boolean;
  phone?: string;
  phoneVerification?: boolean;
  status: boolean;
  passwordUpdate?: string;
  registration: string;
  prefs?: Record<string, []>;
    }   

export default function AdminDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const loggedIn = await isLoggedIn();
      if (!loggedIn) {
        router.push('/internal-portal-cm4sj/auth');
      } else {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      }
    };
    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    await logout();
    router.push('/internal-portal-cm4sj/auth');
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar handleLogout={handleLogout} />

      {/* Main content area */}
      <div className="flex-1 ml-64">
        <Header />
        
        <main className="p-6 space-y-6">
          {/* Cards section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DashboardCard title="Total Students" value="120" />
            <DashboardCard title="Active Mentors" value="15" />
            <DashboardCard title="Issues Resolved" value="45" />
          </div>

          {/* Graph section */}
          <GraphComponent />

        </main>

        {/* <Footer /> */}
      </div>
    </div>
  );
}
