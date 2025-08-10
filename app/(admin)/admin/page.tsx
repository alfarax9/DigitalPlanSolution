"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";


export default function DashboardPage() {
  const [stats, setStats] = useState({ items: 0, users: 0, revenue: 0 });
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    // Contoh ambil data dari Laravel API
    axios.get("http://localhost:8000/api/dashboard").then((res) => {
      setStats(res.data.stats);
      setChartData(res.data.chart);
    });
  }, []);

  return (
      <>
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Dashboard</h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg">
          <p className="text-lg">Total Items</p>
          <h2 className="text-3xl font-bold">{stats.items}</h2>
        </div>
        <div className="bg-green-600 text-white p-6 rounded-lg shadow-lg">
          <p className="text-lg">Total Users</p>
          <h2 className="text-3xl font-bold">{stats.users}</h2>
        </div>
        <div className="bg-purple-600 text-white p-6 rounded-lg shadow-lg">
          <p className="text-lg">Revenue</p>
          <h2 className="text-3xl font-bold">${stats.revenue}</h2>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">Monthly Sales</h2>
      </div>

      {/* Recent Table */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">Recent Activity</h2>
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-200">
            <tr>
              <th className="px-4 py-2">User</th>
              <th className="px-4 py-2">Action</th>
              <th className="px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-gray-700">
              <td className="px-4 py-2">John Doe</td>
              <td className="px-4 py-2">Added new item</td>
              <td className="px-4 py-2">2025-08-11</td>
            </tr>
            <tr className="border-b dark:border-gray-700">
              <td className="px-4 py-2">Jane Smith</td>
              <td className="px-4 py-2">Updated profile</td>
              <td className="px-4 py-2">2025-08-10</td>
            </tr>
          </tbody>
        </table>
      </div>
      </>
  );
}
