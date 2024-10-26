'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser, isLoggedIn, logout } from '@/lib/appwrite';
import Sidebar from './SideBar';
import Header from './AdminHeader';
import DashboardCard from './DashboardCard';
import GraphComponent from './GraphComponent';
import RequestList from './RequestList'; // New component to show student requests
import MentorList from './MentorList'; // New component for managing mentors
import Notifications from './Notifications'; // Optional for mentor or request-related alerts

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

  const handleLogout = async () => {
    await logout();
    router.push('/internal-portal-cm4sj/auth');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar handleLogout={handleLogout} />

      {/* Main content area */}
      <div className="flex-1 ml-64 overflow-y-scroll">
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

          {/* Notifications (Optional) */}
          <div className="bg-white shadow rounded p-4">
            <h2 className="text-xl font-bold mb-4">Notifications</h2>
            <Notifications />
          </div>

          {/* Student Request Management */}
          <div className="bg-white shadow rounded p-4">
            <h2 className="text-xl font-bold mb-4">Student Requests</h2>
            <RequestList /> {/* Component to display list of student requests */}
          </div>

          {/* Mentor Management */}
          <div className="bg-white shadow rounded p-4">
            <h2 className="text-xl font-bold mb-4">Mentor Management</h2>
            <MentorList /> {/* Component to manage mentors */}
          </div>

        </main>
      </div>
    </div>
  );
}
