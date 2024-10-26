'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser, isLoggedIn } from '@/lib/appwrite';
import Header from './AdminHeader';
import DashboardCard from './DashboardCard';
import GraphComponent from './GraphComponent';


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
  const [loading, setLoading] = useState(true); // Loading state for smoother UX
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const loggedIn = await isLoggedIn();
      if (!loggedIn) {
        router.push('/internal-portal-cm4sj/auth');
      } else {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
        setLoading(false); // Once data is loaded, set loading to false
      }
    };
    checkAuth();
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      {/* <Sidebar /> */}

      {/* Main content area */}
      <div className="flex-1 ">
        <Header user={user} />

        <main className="p-6 space-y-6">
          {/* Cards section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* <h2>hii {user.name}</h2> */}
            <DashboardCard title="Total Students" value="120" />
            <DashboardCard title="Active Mentors" value="15" />
            <DashboardCard title="Issues Resolved" value="45" />
            <DashboardCard title="Pending Requests" value="25" /> {/* New metric */}
          </div>

          {/* Graph section */}
          <div className="bg-white shadow rounded p-4">
            <h2 className="text-xl font-bold mb-4">Mentorship Requests Over Time</h2>
            <GraphComponent />
          </div>
{/*  */}

        </main>
      </div>
    </div>
  );
}
