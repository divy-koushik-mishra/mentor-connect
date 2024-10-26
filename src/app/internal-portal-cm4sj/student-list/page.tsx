'use client';

import { useEffect, useState } from 'react';
// import { getAllStudents } from '@/lib/api'; // Fetch function for getting student data from the database
import { useRouter } from 'next/navigation';
import { getAllContactSubmissions } from '@/lib/appwrite';

export default function StudentPage() {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchStudents = async () => {
      const data = await getAllContactSubmissions();
      setStudents(data);
      setLoading(false);
    };
    fetchStudents();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <div className="p-6 flex-1">
      {/* Page Header */}
      <header className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Student Management</h1>
        <button
          onClick={() => router.push('/add-student')}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Add Student
        </button>
      </header>

      {/* Search and Filters */}
      <div className="flex items-center space-x-4 mb-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="border rounded-md p-2 w-1/3"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <select className="border rounded-md p-2">
          <option value="">Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <select className="border rounded-md p-2">
          <option value="">Assigned Mentor</option>
          <option value="John Doe">John Doe</option>
          <option value="Jane Smith">Jane Smith</option>
          {/* Populate with mentor names */}
        </select>
      </div>

      {/* Student Table */}
      <div className="bg-white shadow overflow-hidden rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Mentor</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} className="text-center p-6">Loading...</td>
              </tr>
            ) : filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student.id} className="border-b">
                  <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{student.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{student.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      student.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{student.mentor || 'Unassigned'}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => router.push(`/students/${student.id}`)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      View
                    </button>
                    <button
                      onClick={() => {/* Add delete functionality */}}
                      className="text-red-600 hover:text-red-900 ml-4"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center p-6">No students found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination (Optional) */}
      <div className="mt-4 flex justify-end">
        <button className="px-4 py-2 bg-gray-200 rounded-md">Previous</button>
        <button className="ml-2 px-4 py-2 bg-gray-200 rounded-md">Next</button>
      </div>
    </div>
    </>
  );
}
