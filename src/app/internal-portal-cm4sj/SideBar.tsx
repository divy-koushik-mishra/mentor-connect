"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Home, 
  Settings, 
  Users, 
  GraduationCap, 
  Calendar, 
  LogOut,
  ChevronRight,
  Search
} from 'lucide-react';
import { getCurrentUser, isLoggedIn, logout } from '@/lib/appwrite';

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

interface UserCardProps {
  isCollapsed: boolean;
  user: User | null;
  isLoading: boolean;
}

const UserCard = ({ isCollapsed, user, isLoading }: UserCardProps) => (
  <div className={`p-4 ${isCollapsed ? 'items-center' : ''}`}>
    <div className="flex items-center space-x-3">
      <div className="relative">
        <img 
          src="/founder.png" 
          alt="Profile" 
          className="w-10 h-10 rounded-full bg-gray-200"
        />
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
      </div>
      {!isCollapsed && (
        <div className="flex-1 min-w-0">
          {isLoading ? (
            <div className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-24 mb-1"></div>
              <div className="h-3 bg-gray-200 rounded w-16"></div>
            </div>
          ) : user ? (
            <>
              <h3 className="text-sm font-medium text-gray-900 truncate">
                {user.name || user.email}
              </h3>
              <p className="text-xs text-gray-500 truncate">
                {user.email}
              </p>
            </>
          ) : (
            <p className="text-sm text-gray-500">Not logged in</p>
          )}
        </div>
      )}
    </div>
  </div>
);

const SearchBar = ({ isCollapsed }: { isCollapsed: boolean }) => (
  <div className={`px-4 mb-4 ${isCollapsed ? 'hidden' : ''}`}>
    <div className="relative">
      <input
        type="text"
        placeholder="Type to search..."
        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-pink-500"
      />
      <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
    </div>
  </div>
);

export default function Sidebar() {
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const menuItems = [
    { name: 'Dashboard', icon: Home, path: '/internal-portal-cm4sj/', badge: 'New' },
    { name: 'Students', icon: GraduationCap, path: '/internal-portal-cm4sj/student-list' },
    { name: 'Mentors', icon: Users, path: '/internal-portal-cm4sj/mentor-list' },
    { name: 'Charts', icon: GraduationCap, path: '/internal-portal-cm4sj/charts' },
    { name: 'Tables', icon: Calendar, path: '/internal-portal-cm4sj/tables' },
    { name: 'Settings', icon: Settings, path: '/internal-portal-cm4sj/settings' },
  ];

  useEffect(() => {
    const checkAuth = async () => {
      try {
        setIsLoading(true);
        const loggedIn = await isLoggedIn();
        
        if (!loggedIn) {
          router.push('/internal-portal-cm4sj/auth');
          return;
        }

        const currentUser = await getCurrentUser();
        if (currentUser) {
          setUser(currentUser);
        } else {
          router.push('/internal-portal-cm4sj/auth');
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        router.push('/internal-portal-cm4sj/auth');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []); // Remove router from dependencies to prevent infinite loops

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
      router.push('/internal-portal-cm4sj/auth');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <aside 
      className={`bg-white text-gray-700 h-screen fixed top-0 left-0 flex flex-col justify-between shadow-xl transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div>
        <div className="py-6 pl-6 font-bold flex items-center justify-between border-b">
          {!isCollapsed && (
            <span className="text-xl text-pink-500">
              Mentor Connect
            </span>
          )}
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 rounded-lg hover:bg-gray-100"
          >
            <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
              isCollapsed ? 'rotate-180' : ''
            }`} />
          </button>
        </div>

        <UserCard isCollapsed={isCollapsed} user={user} isLoading={isLoading} />
        <SearchBar isCollapsed={isCollapsed} />

        <nav className="flex flex-col space-y-1 p-4">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => router.push(item.path)}
              className={`flex items-center space-x-3 hover:bg-gray-100 p-3 rounded-lg transition-all duration-200 ease-in-out ${
                isCollapsed ? 'justify-center' : ''
              }`}
            >
              <item.icon className="w-5 h-5 text-gray-500" />
              {!isCollapsed && (
                <div className="flex justify-between items-center flex-1">
                  <span className="text-sm">{item.name}</span>
                  {item.badge && (
                    <span className="bg-pink-500 text-white text-xs px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>
              )}
            </button>
          ))}
        </nav>
      </div>

      <div className="p-4">
        <button
          onClick={handleLogout}
          className={`flex items-center space-x-2 text-red-500 hover:bg-red-50 p-3 rounded-lg transition-all duration-200 ease-in-out w-full ${
            isCollapsed ? 'justify-center' : ''
          }`}
        >
          <LogOut className="w-5 h-5" />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}