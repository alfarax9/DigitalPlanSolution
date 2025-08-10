"use client";

import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg">
        <div className="p-4 text-xl font-bold text-blue-600">Admin Panel</div>
        <nav className="mt-4">
          <Link href="/admin" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Data List</Link>
          <Link href="/admin/create" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Tambah Data</Link>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}