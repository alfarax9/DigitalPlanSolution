import React from 'react';
import { Menu, Bell, User } from 'lucide-react';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
          >
            <Menu size={20} />
          </button>
          <h2 className="text-xl font-semibold text-gray-800 ml-2 lg:ml-0">
            Dashboard
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;