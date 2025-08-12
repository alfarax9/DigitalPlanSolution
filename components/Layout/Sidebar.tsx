import React from 'react';
import { LayoutDashboard, FolderOpen, Tag, Menu, X } from 'lucide-react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { api, logout } from '../lib/api';

interface SidebarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, setCurrentPage, isOpen, setIsOpen }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'categories', label: 'Categories', icon: Tag }
  ];
  const LogOut = () => {
    // Implement your logout logic here
    const router = useRouter();

    const handleLogout = async () => {
      Cookies.remove("token");
      const response = await api.post('/logout');
      if (response.status === 200) {
        router.push("/login");
      }
    };
  };

  return (

    
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full min-h-screen w-64 bg-gradient-to-b from-blue-900 to-blue-800 text-white transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:z-auto`}>
        <div className="p-6">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Admin Panel</h1>
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden p-1 hover:bg-blue-700 rounded-md transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>
        
        <nav className="mt-8">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center px-6 py-3 text-left hover:bg-blue-700 transition-colors ${
                  isActive ? 'bg-blue-700 border-r-4 border-blue-300' : ''
                }`}
              >
                <Icon size={20} className="mr-3" />
                {item.label}
              </button>
            );
          })}
          <button
            onClick={() => {
              logout()
            }}
            className={`w-full flex items-center px-6 py-3 text-left hover:bg-blue-700 transition-colors`
            }
          >
            Logout
          </button>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;